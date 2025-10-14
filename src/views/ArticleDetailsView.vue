<template>
  <div class="article-detail">
    <section class="hero" v-if="article">
      <div class="container">
        <div class="icon">{{ article.icon }}</div>
        <h1>{{ article.title }}</h1>
        <p class="subtitle">{{ article.description }}</p>
      </div>
    </section>

    <section class="content" v-if="article">
      <div class="container">
        <h2>About {{ article.title }}</h2>
        <p>{{ article.longText }}</p>
        <RouterLink to="/articles" class="btn back">← Back to Articles</RouterLink>
      </div>
    </section>

    <section v-else class="not-found">
      <div class="container">
        <h2>Article not found ❓</h2>
        <RouterLink to="/articles" class="btn back">Browse all articles</RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router"
import { computed } from "vue"

const route = useRoute()

const articles: Record<
  string,
  { title: string; icon: string; description: string; longText: string }
> = {
  breathing: {
    title: "Breathing Techniques",
    icon: "🌬️",
    description: "Simple breathing exercises to calm your mind and body.",
    longText:
      "Breathing exercises help regulate your nervous system. Techniques such as diaphragmatic breathing, box breathing, and alternate nostril breathing are proven to reduce stress, lower blood pressure, and increase focus.",
  },
  journaling: {
    title: "Power of Journaling",
    icon: "📓",
    description: "Discover how writing can reduce stress and improve clarity.",
    longText:
      "Journaling allows you to process thoughts and emotions on paper. Daily reflections can improve self-awareness, reduce anxiety, and even enhance problem-solving skills.",
  },
  gratitude: {
    title: "Gratitude Practices",
    icon: "🙏",
    description: "Learn how gratitude boosts happiness and resilience.",
    longText:
      "Practicing gratitude daily has been linked to improved mental health and stronger relationships. Writing down 3 things you're grateful for each day can significantly boost your overall well-being.",
  },
  habits: {
    title: "Building Healthy Habits",
    icon: "⚡",
    description: "Practical tips for sustainable lifestyle changes.",
    longText:
      "Healthy habits form the foundation of lasting wellness. Start small, be consistent, and focus on systems rather than goals. This article explores proven strategies for building habits that last.",
  },
}

const articleId = route.params.articleId as string
const article = computed(() => articles[articleId])
</script>

<style scoped>
.article-detail {
  background: #f9fafb;
  min-height: 100vh;
}

.hero {
  background: linear-gradient(135deg, #0f766e, #14b8a6);
  color: white;
  text-align: center;
  padding: 4rem 2rem;
}

.hero .icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.hero .subtitle {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
}

.content {
  padding: 3rem 0;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
}

.content h2 {
  color: #0f766e;
  margin-bottom: 1rem;
}

.content p {
  color: #374151;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.not-found {
  text-align: center;
  padding: 5rem 2rem;
}

.btn.back {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background: #14b8a6;
  color: white;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn.back:hover {
  background: #0f766e;
  transform: translateY(-2px);
}
</style>
