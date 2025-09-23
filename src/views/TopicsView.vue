<template>
  <div class="browse-topics">
    <section class="hero">
      <div class="container">
        <h1>Browse Wellness Topics 🌿</h1>
        <p>
          Explore curated topics to support your mental health journey.  
          Find practical tips, guided exercises, and expert insights on what matters most to you.
        </p>
      </div>
    </section>

    <section class="topics-grid">
      <div class="container">
        <div class="grid">
          <RouterLink to="/topics/stress" class="topic-card">
            <div class="icon">😌</div>
            <h3>Stress Management</h3>
            <p>Learn techniques to reduce stress and restore balance in daily life.</p>
          </RouterLink>
          <RouterLink to="/topics/mindfulness" class="topic-card">
            <div class="icon">🧘‍♂️</div>
            <h3>Mindfulness</h3>
            <p>Build awareness and presence through guided practices and meditations.</p>
          </RouterLink>
          <RouterLink to="/topics/sleep" class="topic-card">
            <div class="icon">🌙</div>
            <h3>Better Sleep</h3>
            <p>Discover habits and exercises to improve your sleep quality.</p>
          </RouterLink>
          <RouterLink to="/topics/self-esteem" class="topic-card">
            <div class="icon">💪</div>
            <h3>Self-Esteem</h3>
            <p>Boost your confidence and nurture a healthier relationship with yourself.</p>
          </RouterLink>
          <RouterLink to="/topics/anxiety" class="topic-card">
            <div class="icon">💚</div>
            <h3>Anxiety Relief</h3>
            <p>Find calming strategies and practical tools for managing anxiety.</p>
          </RouterLink>
          <RouterLink to="/topics/relationships" class="topic-card">
            <div class="icon">👥</div>
            <h3>Healthy Relationships</h3>
            <p>Explore ways to build stronger, more supportive connections.</p>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router"
</script>

<style scoped>
.browse-topics {
  background: #f9fafb;
  min-height: 100vh;
}

.hero {
  background: linear-gradient(135deg, #14b8a6, #0f766e);
  color: white;
  text-align: center;
  padding: 4rem 2rem;
}

.hero h1 {
  font-size: 2.8rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.topics-grid {
  padding: 4rem 0;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}

.topic-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}

.topic-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 6px 18px rgba(0,0,0,0.1);
}

.icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.topic-card h3 {
  font-size: 1.4rem;
  color: #0f766e;
  margin-bottom: 0.75rem;
}

.topic-card p {
  font-size: 1rem;
  color: #374151;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.2rem;
  }
  .hero p {
    font-size: 1rem;
  }
}
</style>
