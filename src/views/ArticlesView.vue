<template>
  <div class="articles-page">
    <section class="hero">
      <div class="container">
        <h1>Explore Articles 📚</h1>
        <p>Dive into evidence-based insights to improve your mental wellness.</p>
      </div>
    </section>

    <section class="articles-list">
      <div class="container">
        <div class="grid">
          <RouterLink
            v-for="(article, id) in articles"
            :key="id"
            :to="`/articles/${id}`"
            class="card"
          >
            <div class="icon">{{ article.icon }}</div>
            <h3>{{ article.title }}</h3>
            <p>{{ article.description }}</p>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router"

const articles: Record<
  string,
  { title: string; icon: string; description: string }
> = {
  breathing: {
    title: "Breathing Techniques",
    icon: "🌬️",
    description: "Simple breathing exercises to calm your mind and body.",
  },
  journaling: {
    title: "Power of Journaling",
    icon: "📓",
    description: "Discover how writing can reduce stress and improve clarity.",
  },
  gratitude: {
    title: "Gratitude Practices",
    icon: "🙏",
    description: "Learn how gratitude boosts happiness and resilience.",
  },
  habits: {
    title: "Building Healthy Habits",
    icon: "⚡",
    description: "Practical tips for sustainable lifestyle changes.",
  },
}
</script>

<style scoped>
.articles-page {
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

.articles-list {
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
