<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section brand-section">
        <div class="brand">
          <span class="icon">🧠</span>
          <span class="name">Mind Soul Hub</span>
        </div>
        <p class="tagline">Where mental wellness meets mindful living</p>
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
          <li><a href="#" @click="openHelp">Help Center</a></li>
          <li><a href="#" @click="openContact">Contact Us</a></li>
          <li><a href="#" @click="openFAQ">FAQ</a></li>
          <li><a href="#" @click="openFeedback">Send Feedback</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>Legal</h4>
        <ul>
          <li><a href="#" @click="navigate('terms-conditions')">Terms & Conditions</a></li>
          <li><a href="#" @click="navigate('privacy-policy')">Privacy Policy</a></li>
          <li><a href="#" @click="openEthics">Ethical Guidelines</a></li>
          <li><a href="#" @click="openDisclaimer">Medical Disclaimer</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>Newsletter</h4>
        <p>Get weekly mental health tips and mindfulness practices</p>
        <form class="newsletter-form" @submit.prevent="subscribeNewsletter">
          <input type="email" placeholder="Enter your email" v-model="email" required />
          <button type="submit">🌟 Subscribe</button>
        </form>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="footer-bottom-content">
        <p>&copy; 2025 Mind Soul Hub. All rights reserved.</p>
        <p class="disclaimer">
          This platform provides educational content only and is not a substitute for professional mental health
          treatment.
        </p>
        <div class="crisis-notice">
          <p><strong>Crisis Support:</strong> If you're experiencing a mental health emergency, please contact emergency
            services or call 988 (Suicide & Crisis Lifeline).</p>
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
    alert(`Thank you for subscribing with ${email.value}! You'll receive weekly mental health insights and mindfulness tips. 🌟`)
    email.value = ''
  }
}

const navigate = (name: string) => {
  router.push({ name })
}

function openPrivacy() {
  alert('Privacy Policy: We protect your mental health data with the highest security standards. This is a demo application.')
}

function openEthics() {
  alert('Ethical Guidelines: Our content follows APA ethical standards and evidence-based practices for mental health education.')
}

function openDisclaimer() {
  alert('Medical Disclaimer: This platform provides educational content only. Always consult qualified mental health professionals for diagnosis and treatment.')
}

function openHelp() {
  alert('Help Center: Contact our support team at help@mindfulwaves.com for assistance with your wellness journey.')
}

function openContact() {
  alert('Contact Us: Email us at hello@mindfulwaves.com or call 1-800-MINDFUL for general inquiries.')
}

function openFAQ() {
  alert('FAQ: Find answers about mental health resources, subscriptions, and platform features.')
}

function openFeedback() {
  alert('Send Feedback: Help us improve mental health education! Send suggestions to feedback@mindfulwaves.com')
}

function openCrisisHelp() {
  alert('Crisis Support Resources:\n\n• National Suicide Prevention Lifeline: 988\n• Crisis Text Line: Text HOME to 741741\n• National Domestic Violence Hotline: 1-800-799-7233\n\nIf you\'re in immediate danger, please call 911.')
}

function openSelfAssessment() {
  alert('Mental Health Assessment: Take evidence-based screening tools to better understand your mental health and identify areas for growth and support.')
}

function openWellnessTools() {
  alert('Wellness Tools: Access mood trackers, meditation timers, breathing exercises, and other digital tools to support your mental wellness journey.')
}
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #0f766e, #14b8a6);
  color: white;
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.brand-section {
  grid-column: span 1;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.icon {
  font-size: 1.2rem;
}

.tagline {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1.5rem;
  font-style: italic;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  text-align: center;
  line-height: 40px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.footer-section h4 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #99f6e4;
}

.footer-section ul {
  list-style: none;
}

.footer-section li {
  margin-bottom: 0.5rem;
}

.footer-section a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section a:hover {
  color: #99f6e4;
}

.newsletter-form {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

.newsletter-form input {
  flex: 1;
  padding: 0.75rem;
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
}

.newsletter-form button {
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  white-space: nowrap;
  transition: background 0.3s ease;
}

.newsletter-form button:hover {
  background: rgba(255, 255, 255, 0.3);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1.5rem 2rem;
}

.footer-bottom-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
}

.disclaimer {
  margin: 0.5rem 0;
  font-size: 0.85rem;
  font-style: italic;
}

.crisis-notice {
  margin-top: 1rem;
  padding: 1rem;
  background: rgba(239, 68, 68, 0.2);
  border-radius: 8px;
  border-left: 4px solid #ef4444;
}

.crisis-notice p {
  font-size: 0.9rem;
  color: #fecaca;
  margin: 0;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 2rem;
}

.modal {
  background: white;
  border-radius: 12px;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  background: #f9fafb;
  border-radius: 12px 12px 0 0;
}

.modal-header h3 {
  color: #0f766e;
  margin: 0;
}

.close-btn {
  background: none;
  border: none;
  font-size: 2rem;
  color: #059669;
  cursor: pointer;
  line-height: 1;
}

.close-btn:hover {
  color: #0f766e;
}

.modal-content {
  padding: 2rem;
  color: #374151;
  line-height: 1.6;
}

.modal-content h4 {
  color: #0f766e;
  margin: 1.5rem 0 0.5rem 0;
}

.modal-content h4:first-child {
  margin-top: 0;
}

.modal-content p {
  margin-bottom: 1rem;
}

.effective-date {
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
  font-size: 0.9rem;
}

/* Responsive */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    padding: 2rem 1rem;
  }

  .newsletter-form {
    flex-direction: column;
  }

  .modal-overlay {
    padding: 1rem;
  }

  .modal-content {
    padding: 1.5rem;
  }
}
</style>