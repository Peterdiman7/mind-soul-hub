<template>
  <header class="site-header" :class="{ scrolled: isScrolled }">
    <nav class="nav">
      <router-link to="/" class="logo" @click="closeMenu">
        <div class="logo-container">
          <span class="logo-icon">🧠</span>
          <div class="logo-text-wrapper">
            <span class="logo-text">Mind Soul Hub</span>
            <span class="logo-tagline">Your Wellness Journey</span>
          </div>
        </div>
      </router-link>

      <ul class="nav-links" :class="{ open: menuOpen }">
        <li>
          <router-link to="/" @click="closeMenu" class="nav-link">
            <span class="link-icon">🏠</span>
            <span>Home</span>
          </router-link>
        </li>
        <li>
          <router-link to="/topics" @click="closeMenu" class="nav-link">
            <span class="link-icon">📚</span>
            <span>Topics</span>
          </router-link>
        </li>
        <li>
          <router-link to="/articles" @click="closeMenu" class="nav-link">
            <span class="link-icon">📰</span>
            <span>Articles</span>
          </router-link>
        </li>
        <li>
          <router-link to="/meditations" @click="closeMenu" class="nav-link">
            <span class="link-icon">🧘</span>
            <span>Meditations</span>
          </router-link>
        </li>
        <li>
          <router-link to="/plans" @click="closeMenu" class="nav-link">
            <span class="link-icon">💎</span>
            <span>Plans</span>
          </router-link>
        </li>
        <li v-if="!loggedIn" class="auth-item">
          <router-link to="/login" @click="closeMenu" class="nav-link btn-login">
            <span class="link-icon">🔑</span>
            <span>Login</span>
          </router-link>
        </li>
        <li v-else class="auth-item">
          <button class="nav-link btn-logout" @click="logout">
            <span class="link-icon">👋</span>
            <span>Logout</span>
          </button>
        </li>
      </ul>

      <button class="menu-toggle" @click="toggleMenu" :aria-expanded="menuOpen.toString()" aria-label="Toggle menu">
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
      </button>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue"
import { useRouter } from "vue-router"
import { useAuthStore } from "@/stores/auth"
import { storeToRefs } from "pinia"

const router = useRouter()
const auth = useAuthStore()
const { loggedIn } = storeToRefs(auth)

const menuOpen = ref(false)
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
  document.body.style.overflow = menuOpen.value ? "hidden" : ""
}

const closeMenu = () => {
  menuOpen.value = false
  document.body.style.overflow = ""
}

const logout = async () => {
  closeMenu()
  await auth.logout()
  router.push("/login")
}

onMounted(() => {
  auth.checkLogin()
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.site-header {
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 200;
  border-bottom: 1px solid rgba(124, 58, 237, 0.1);
  transition: var(--transition);
}

.site-header.scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: var(--shadow-lg);
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 2rem;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  text-decoration: none;
}

.logo-icon {
  font-size: 2.5rem;
  filter: drop-shadow(0 2px 4px rgba(124, 58, 237, 0.3));
  transition: var(--transition);
}

.logo:hover .logo-icon {
  transform: scale(1.1) rotate(-5deg);
}

.logo-text-wrapper {
  display: flex;
  flex-direction: column;
}

.logo-text {
  font-family: 'Playfair Display', serif;
  font-weight: 800;
  font-size: 1.5rem;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.logo-tagline {
  font-size: 0.65rem;
  color: var(--gray);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.nav-links {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: var(--dark);
  font-weight: 600;
  font-size: 0.95rem;
  padding: 0.7rem 1.2rem;
  border-radius: var(--radius);
  transition: var(--transition);
  position: relative;
}

.nav-link::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  transform: translateX(-50%);
  transition: width 0.3s ease;
}

.nav-link:hover::before {
  width: 80%;
}

.nav-link:hover {
  color: var(--primary);
  background: rgba(124, 58, 237, 0.05);
}

.nav-link.router-link-active {
  color: var(--primary);
  background: rgba(124, 58, 237, 0.1);
}

.link-icon {
  font-size: 1.2rem;
}

.btn-login {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: white;
  border: none;
  font-weight: 600;
}

.btn-login::before {
  display: none;
}

.btn-login:hover {
  background: linear-gradient(135deg, var(--primary-dark), var(--primary));
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-logout {
  background: linear-gradient(135deg, var(--danger), #dc2626);
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 600;
}

.btn-logout::before {
  display: none;
}

.btn-logout:hover {
  background: linear-gradient(135deg, #dc2626, var(--danger));
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 24px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 300;
}

.menu-toggle span {
  display: block;
  height: 3px;
  width: 100%;
  background: var(--primary);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.menu-toggle span.open:nth-child(1) {
  transform: rotate(45deg) translate(7px, 7px);
}

.menu-toggle span.open:nth-child(2) {
  opacity: 0;
}

.menu-toggle span.open:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
}

@media (max-width: 1178px) {
  .menu-toggle {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: 0;
    flex-direction: column;
    align-items: flex-start;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(248, 250, 252, 0.98));
    backdrop-filter: blur(20px);
    width: 85%;
    max-width: 380px;
    height: 100vh;
    padding: 6rem 2rem 2rem;
    box-shadow: var(--shadow-xl);
    transform: translateX(100%);
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .nav-links.open {
    transform: translateX(0);
  }

  .nav-links li {
    width: 100%;
  }

  .nav-link {
    width: 100%;
    justify-content: flex-start;
    padding: 1rem 1.5rem;
    font-size: 1.1rem;
  }

  .nav-link::before {
    display: none;
  }

  .auth-item {
    margin-top: 1rem;
  }

  .logo-tagline {
    display: none;
  }
}

@media (max-width: 480px) {
  .logo-text {
    font-size: 1.2rem;
  }

  .logo-icon {
    font-size: 2rem;
  }

  .nav {
    padding: 0.8rem 1rem;
  }
}
</style>