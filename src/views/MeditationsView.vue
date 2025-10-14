<template>
  <div class="meditations-page">
    <section class="hero">
      <div class="container">
        <h1>Explore Guided Meditations 🧘‍♀️</h1>
        <p>Find the right meditation for your mood, situation, or wellness goal.</p>
      </div>
    </section>

    <section class="meditations-list">
      <div class="container">
        <div class="grid">
          <RouterLink
            v-for="(meditation, id) in meditations"
            :key="id"
            :to="`/meditations/${id}`"
            class="card"
          >
            <div class="icon">{{ meditation.icon }}</div>
            <h3>{{ meditation.title }}</h3>
            <p>{{ meditation.description }}</p>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router"

const meditations: Record<
  string,
  { title: string; icon: string; description: string }
> = {
  mindfulness: {
    title: "Mindfulness Meditation",
    icon: "🧘‍♂️",
    description: "Learn to stay present and reduce stress with mindfulness.",
  },
  sleep: {
    title: "Sleep Meditation",
    icon: "🌙",
    description: "Calm your mind for deeper, more restful sleep.",
  },
  focus: {
    title: "Focus & Clarity",
    icon: "🎯",
    description: "Boost concentration and mental clarity with guided focus sessions.",
  },
  gratitude: {
    title: "Gratitude Meditation",
    icon: "🙏",
    description: "Cultivate gratitude and positivity daily.",
  },
}
</script>

<style scoped>
.meditations-page {
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
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
}

.meditations-list {
  padding: 3rem 0;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  text-align: center;
}

.card:hover {
  transform: translateY(-5px);
}

.icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
</style>
