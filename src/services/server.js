import dotenv from "dotenv"
import express from "express";
import mysql from "mysql2/promise";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path"

// ---- LOAD ENV ----
dotenv.config({ path: path.resolve("/home/devalex/mindsoulhub.com/.env") })

const { JWT_SECRET, DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT } = process.env;
const PORT = process.env.PORT || 9101;

// ---- APP SETUP ----
const app = express();
app.use(express.json());
app.use(cookieParser());

// ---- CORS ----
const allowedOrigins = [
  "https://mindsoulhub.com",
  "http://localhost:9001",
  "http://localhost:5173"
];
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) callback(null, true);
      else callback(new Error("Not allowed by CORS"));
    },
    credentials: true
  })
);

// ---- MYSQL POOL ----
const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  port: DB_PORT ? parseInt(DB_PORT) : 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// ---- REGISTER ----
app.post("/auth/register", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashed = await bcrypt.hash(password, 10);
    const conn = await pool.getConnection();
    await conn.execute(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username, email, hashed]
    );
    conn.release();
    res.json({ message: "User registered successfully" });
  } catch (err) {
    console.error("REGISTER ERROR:", err);
    if (err.code === "ER_DUP_ENTRY")
      res.status(409).json({ error: "Username or email already exists" });
    else res.status(500).json({ error: "Database error" });
  }
});

// ---- LOGIN ----
app.post("/auth/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const conn = await pool.getConnection();
    const [rows] = await conn.execute(
      "SELECT * FROM users WHERE username = ?",
      [username]
    );
    conn.release();

    if (!rows.length) return res.status(401).json({ error: "Invalid credentials" });

    const user = rows[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ error: "Invalid credentials" });

    const token = jwt.sign(
      { id: user.id, username: user.username, email: user.email },
      JWT_SECRET,
      { expiresIn: "2h" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // set true if using HTTPS
      sameSite: "lax",
      maxAge: 2 * 60 * 60 * 1000
    });

    res.json({ message: "Login successful" });
  } catch (err) {
    console.error("LOGIN ERROR:", err);
    res.status(500).json({ error: "Database error" });
  }
});

// ---- PROTECTED ----
app.get("/auth/me", (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ error: "Missing token" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    res.json(decoded);
  } catch {
    res.status(401).json({ error: "Invalid or expired token" });
  }
});

// ---- LOGOUT ----
app.post("/auth/logout", (req, res) => {
  res.clearCookie("token", { httpOnly: true, sameSite: "lax" });
  res.json({ message: "Logged out" });
});

// ---- START SERVER ----
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
