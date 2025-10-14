<template>
  <footer class="footer">
    <div class="footer-wave">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z">
        </path>
      </svg>
    </div>

    <div class="footer-content">
      <div class="footer-section brand-section">
        <div class="brand">
          <span class="icon">🧠</span>
          <div>
            <span class="name">Mind Soul Hub</span>
            <p class="tagline">Where mental wellness meets mindful living</p>
          </div>
        </div>
        <p class="description">
          Transform your mental health journey with evidence-based practices,
          expert guidance, and a supportive community.
        </p>
      </div>

      <div class="footer-section">
        <h4>Explore</h4>
        <ul>
          <li>
            <RouterLink to="/topics">Browse Topics</RouterLink>
          </li>
          <li>
            <RouterLink to="/articles">Psychology Articles</RouterLink>
          </li>
          <li>
            <RouterLink to="/meditations">Guided Meditations</RouterLink>
          </li>
          <li>
            <RouterLink to="/plans">Wellness Plans</RouterLink>
          </li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>Support</h4>
        <ul>
          <li><a href="#" @click.prevent="openHelp">Help Center</a></li>
          <li><a href="#" @click.prevent="openContact">Contact Us</a></li>
          <li><a href="#" @click.prevent="openFAQ">FAQ</a></li>
          <li><a href="#" @click.prevent="openFeedback">Send Feedback</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>Legal</h4>
        <ul>
          <li>
            <RouterLink to="/terms-conditions">Terms & Conditions</RouterLink>
          </li>
          <li>
            <RouterLink to="/privacy-policy">Privacy Policy</RouterLink>
          </li>
          <li><a href="#" @click.prevent="openEthics">Ethical Guidelines</a></li>
          <li><a href="#" @click.prevent="openDisclaimer">Medical Disclaimer</a></li>
        </ul>
      </div>

      <div class="footer-section newsletter-section">
        <h4>Stay Connected</h4>
        <p>Get weekly mental health tips and mindfulness practices</p>
        <form class="newsletter-form" @submit.prevent="subscribeNewsletter">
          <input type="email" placeholder="Enter your email" v-model="email" required />
          <button type="submit">
            <span>Subscribe</span>
            <span class="icon">✨</span>
          </button>
        </form>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="footer-bottom-content">
        <p class="copyright">&copy; 2025 Mind Soul Hub. All rights reserved.</p>
        <p class="disclaimer">
          This platform provides educational content only and is not a substitute for professional mental health
          treatment.
        </p>
        <div class="crisis-notice">
          <span class="crisis-icon">⚠️</span>
          <div class="crisis-text">
            <strong>Crisis Support:</strong>
            <span>If you're experiencing a mental health emergency, please contact emergency services or call 988
              (Suicide & Crisis Lifeline).</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')

function subscribeNewsletter() {
  if (email.value) {
    alert(`Thank you for subscribing with ${email.value}! You'll receive weekly mental health insights and mindfulness tips. ✨`)
    email.value = ''
  }
}

function openHelp() {
  alert('Help Center: Contact our support team at help@mindsoulhub.com for assistance with your wellness journey.')
}

function openContact() {
  alert('Contact Us: Email us at hello@mindsoulhub.com or call 1-800-MINDFUL for general inquiries.')
}

function openFAQ() {
  alert('FAQ: Find answers about mental health resources, subscriptions, and platform features.')
}

function openFeedback() {
  alert('Send Feedback: Help us improve mental health education! Send suggestions to feedback@mindsoulhub.com')
}

function openEthics() {
  alert('Ethical Guidelines: Our content follows APA ethical standards and evidence-based practices for mental health education.')
}

function openDisclaimer() {
  alert('Medical Disclaimer: This platform provides educational content only. Always consult qualified mental health professionals for diagnosis and treatment.')
}
</script>

<style scoped>
.footer {
  position: relative;
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  color: white;
  margin-top: auto;
}

.footer-wave {
  position: absolute;
  top: -1px;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.footer-wave svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 60px;
  fill: var(--gray-light);
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 5rem 2rem 3rem;
  display: grid;
  grid-template-columns: 1.5fr repeat(4, 1fr);
  gap: 3rem;
}

.brand-section {
  grid-column: span 1;
}

.brand {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.icon {
  font-size: 2.5rem;
  filter: drop-shadow(0 2px 8px rgba(124, 58, 237, 0.5));
}

.name {
  font-family: 'Playfair Display', serif;
  font-size: 1.6rem;
  font-weight: 700;
  display: block;
  margin-bottom: 0.3rem;
  background: linear-gradient(135deg, #a78bfa, #c4b5fd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.tagline {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.85rem;
  font-style: italic;
  margin: 0;
}

.description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  font-size: 0.95rem;
}

.footer-section h4 {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
}

.footer-section ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.footer-section a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: var(--transition);
  display: inline-block;
  font-size: 0.95rem;
}

.footer-section a:hover {
  color: white;
  transform: translateX(5px);
}

.newsletter-section p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.newsletter-form {
  display: flex;
  gap: 0.5rem;
  margin-top: 1.5rem;
}

.newsletter-form input {
  flex: 1;
  padding: 0.9rem 1.2rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius);
  font-size: 0.95rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  transition: var(--transition);
}

.newsletter-form input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.newsletter-form input:focus {
  outline: none;
  border-color: var(--primary-light);
  background: rgba(255, 255, 255, 0.15);
}

.newsletter-form button {
  padding: 0.9rem 1.8rem;
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: white;
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
  transition: var(--transition);
}

.newsletter-form button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(124, 58, 237, 0.4);
}
</style>