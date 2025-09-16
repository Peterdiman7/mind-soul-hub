<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section brand-section">
        <div class="brand">
          <span class="icon">🧠</span>
          <span class="name">Mindful Waves</span>
        </div>
        <p class="tagline">Where mental wellness meets mindful living</p>
        <div class="social-links">
          <a href="#" class="social-link" aria-label="Facebook">📘</a>
          <a href="#" class="social-link" aria-label="Twitter">🐦</a>
          <a href="#" class="social-link" aria-label="Instagram">📷</a>
          <a href="#" class="social-link" aria-label="LinkedIn">💼</a>
        </div>
      </div>

      <div class="footer-section">
        <h4>Explore</h4>
        <ul>
          <li><RouterLink to="/categories">Browse Topics</RouterLink></li>
          <li><RouterLink to="/articles">Psychology Articles</RouterLink></li>
          <li><RouterLink to="/meditations">Guided Meditations</RouterLink></li>
          <li><RouterLink to="/plans">Wellness Plans</RouterLink></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>Resources</h4>
        <ul>
          <li><a href="#" @click="openCrisisHelp">Crisis Support</a></li>
          <li><a href="#" @click="openTherapistFinder">Find a Therapist</a></li>
          <li><a href="#" @click="openSelfAssessment">Mental Health Assessment</a></li>
          <li><a href="#" @click="openWellnessTools">Wellness Tools</a></li>
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
          <li><a href="#" @click="openTerms">Terms & Conditions</a></li>
          <li><a href="#" @click="openPrivacy">Privacy Policy</a></li>
          <li><a href="#" @click="openEthics">Ethical Guidelines</a></li>
          <li><a href="#" @click="openDisclaimer">Medical Disclaimer</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>Newsletter</h4>
        <p>Get weekly mental health tips and mindfulness practices</p>
        <form class="newsletter-form" @submit.prevent="subscribeNewsletter">
          <input 
            type="email" 
            placeholder="Enter your email"
            v-model="email"
            required
          />
          <button type="submit">🌟 Subscribe</button>
        </form>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="footer-bottom-content">
        <p>&copy; 2025 Mindful Waves. All rights reserved.</p>
        <p class="disclaimer">
          This platform provides educational content only and is not a substitute for professional mental health treatment.
        </p>
        <div class="crisis-notice">
          <p><strong>Crisis Support:</strong> If you're experiencing a mental health emergency, please contact emergency services or call 988 (Suicide & Crisis Lifeline).</p>
        </div>
      </div>
    </div>

    <!-- Terms & Conditions Modal -->
    <div v-if="showTermsModal" class="modal-overlay" @click="closeModal">
      <div class="modal" @click.stop>
        <div class="modal-header">
          <h3>Terms & Conditions</h3>
          <button class="close-btn" @click="closeModal">&times;</button>
        </div>
        <div class="modal-content">
          <h4>1. Acceptance of Terms</h4>
          <p>By using Mindful Waves, you agree to be bound by these Terms and Conditions and acknowledge that this platform provides educational content only.</p>
          
          <h4>2. Educational Content Disclaimer</h4>
          <p>All content on Mindful Waves is for educational and informational purposes only. It is not intended as a substitute for professional mental health treatment, diagnosis, or advice.</p>
          
          <h4>3. Mental Health Services</h4>
          <p>Our subscription services provide access to educational articles and guided meditations. We do not provide therapy, counseling, or medical services.</p>
          
          <h4>4. User Responsibilities</h4>
          <p>Users must seek professional help for serious mental health concerns and not rely solely on platform content for treatment decisions.</p>
          
          <h4>5. Privacy and Confidentiality</h4>
          <p>We protect user privacy according to our Privacy Policy. However, users should be aware that online communications are not completely secure.</p>
          
          <h4>6. Crisis Situations</h4>
          <p>This platform is not equipped to handle mental health emergencies. Users experiencing crisis situations should contact emergency services immediately.</p>
          
          <h4>7. Content Accuracy</h4>
          <p>While we strive for accuracy, mental health is complex and individualized. Content may not apply to all situations or conditions.</p>
          
          <h4>8. Limitation of Liability</h4>
          <p>Mindful Waves shall not be liable for any decisions made based on platform content or for any outcomes related to mental health treatment.</p>
          
          <p class="effective-date"><strong>Effective Date:</strong> September 16, 2025</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const email = ref('')
const showTermsModal = ref(false)

function subscribeNewsletter() {
  if (email.value) {
    alert(`Thank you for subscribing with ${email.value}! You'll receive weekly mental health insights and mindfulness tips. 🌟`)
    email.value = ''
  }
}

function openTerms() {
  showTermsModal.value = true
}

function closeModal() {
  showTermsModal.value = false
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

function openTherapistFinder() {
  alert('Find a Therapist: Use our directory to locate licensed mental health professionals in your area. This feature helps connect you with qualified therapists and counselors.')
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