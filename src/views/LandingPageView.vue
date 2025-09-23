<template>
  <div class="landing-page">
    <section class="hero">
      <div class="hero-content">
        <h1>Your Mental Wellness Journey Starts Here 🧠</h1>
        <p>
          Discover evidence-based articles, guided meditations, and practical tools for better mental health. 
          Take the first step towards a more mindful, balanced life.
        </p>
        <div class="actions">
          <RouterLink to="/plans" class="btn primary">Start Your Journey</RouterLink>
          <RouterLink to="/articles" class="btn secondary">Explore Articles</RouterLink>
        </div>
      </div>
      <div class="hero-image">
        <div class="floating-elements">
          <div class="element element-1">🧘‍♀️</div>
          <div class="element element-2">🌱</div>
          <div class="element element-3">💚</div>
          <div class="element element-4">🌊</div>
        </div>
      </div>
    </section>

    <section class="features">
      <div class="container">
        <h2>Why Choose Mind Soul Hub?</h2>
        <div class="features-grid">
          <div class="feature">
            <div class="feature-icon">📚</div>
            <h3>Expert Content</h3>
            <p>Access hundreds of psychology articles written by licensed mental health professionals</p>
          </div>
          <div class="feature">
            <div class="feature-icon">🧘</div>
            <h3>Guided Meditations</h3>
            <p>Practice mindfulness with our library of guided meditations for every mood and situation</p>
          </div>
          <div class="feature">
            <div class="feature-icon">📱</div>
            <h3>Practice Anywhere</h3>
            <p>Take your wellness journey with you on any device with offline content access</p>
          </div>
          <div class="feature">
            <div class="feature-icon">👥</div>
            <h3>Supportive Community</h3>
            <p>Connect with others on similar wellness journeys and share insights safely</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta">
      <div class="container">
        <h2>Ready to Prioritize Your Mental Health?</h2>
        <p>Join thousands who've transformed their well-being with our evidence-based approach</p>
        <RouterLink to="/plans" class="btn primary large">Start Free Trial</RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.landing-page {
  background: linear-gradient(135deg, #e6fffa, #99f6e4, #5eead4);
}

.hero {
  min-height: 80vh;
  display: flex;
  align-items: center;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  gap: 4rem;
}

.hero-content {
  flex: 1;
  max-width: 600px;
}

.hero h1 {
  font-size: 3.5rem;
  color: #0f766e;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.hero p {
  font-size: 1.2rem;
  color: #134e4a;
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.btn {
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn.primary {
  background: #14b8a6;
  color: white;
}

.btn.primary:hover {
  background: #0f766e;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(20, 184, 166, 0.4);
}

.btn.secondary {
  background: white;
  color: #14b8a6;
  border: 2px solid #14b8a6;
}

.btn.secondary:hover {
  background: #f0fdfa;
  transform: translateY(-2px);
}

.btn.large {
  padding: 1.2rem 2.5rem;
  font-size: 1.1rem;
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.floating-elements {
  position: relative;
  width: 300px;
  height: 300px;
}

.element {
  position: absolute;
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  animation: float 6s ease-in-out infinite;
}

.element-1 {
  top: 20px;
  left: 50px;
  animation-delay: 0s;
}

.element-2 {
  top: 80px;
  right: 30px;
  animation-delay: 1.5s;
}

.element-3 {
  bottom: 80px;
  left: 20px;
  animation-delay: 3s;
}

.element-4 {
  bottom: 20px;
  right: 60px;
  animation-delay: 4.5s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.features {
  padding: 4rem 0;
  background: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.features h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #0f766e;
  margin-bottom: 3rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature {
  text-align: center;
  padding: 2rem;
  border-radius: 16px;
  background: #f0fdfa;
  transition: transform 0.3s ease;
}

.feature:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature h3 {
  color: #0f766e;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.feature p {
  color: #134e4a;
  line-height: 1.5;
}

.cta {
  padding: 4rem 0;
  background: linear-gradient(135deg, #0f766e, #14b8a6);
  color: white;
  text-align: center;
}

.cta h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.cta p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
}

@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    text-align: center;
    min-height: 60vh;
    gap: 2rem;
  }

  .hero h1 {
    font-size: 2.5rem;
  }

  .hero p {
    font-size: 1.1rem;
  }

  .floating-elements {
    width: 200px;
    height: 200px;
  }

  .element {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }

  .features h2 {
    font-size: 2rem;
  }

  .cta h2 {
    font-size: 2rem;
  }

  .actions {
    justify-content: center;
  }
}
</style>