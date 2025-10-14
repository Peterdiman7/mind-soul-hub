<template>
  <div class="meditation-detail">
    <section class="hero" v-if="meditation">
      <div class="container">
        <div class="icon">{{ meditation.icon }}</div>
        <h1>{{ meditation.title }}</h1>
        <p class="subtitle">{{ meditation.description }}</p>
      </div>
    </section>

    <section class="content" v-if="meditation">
      <div class="container">
        <h2>About {{ meditation.title }}</h2>
        <p>{{ meditation.longText }}</p>
        <RouterLink to="/meditations" class="btn back">← Back to Meditations</RouterLink>
      </div>
    </section>

    <section v-else class="not-found">
      <div class="container">
        <h2>Meditation not found ❓</h2>
        <RouterLink to="/meditations" class="btn back">Browse all meditations</RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router"
import { computed } from "vue"

const route = useRoute()

const meditations: Record<
  string,
  { title: string; icon: string; description: string; longText: string }
> = {
  mindfulness: {
    title: "Mindfulness Meditation",
    icon: "🧘‍♂️",
    description: "Learn to stay present and reduce stress with mindfulness.",
    longText:
      "Mindfulness meditation teaches you to observe your thoughts and feelings without judgment. It can improve focus, reduce stress, and increase overall well-being.",
  },
  sleep: {
    title: "Sleep Meditation",
    icon: "🌙",
    description: "Calm your mind for deeper, more restful sleep.",
    longText:
      "Sleep meditations help relax the body and mind, making it easier to fall asleep. Techniques include body scans, visualization, and deep breathing.",
  },
  focus: {
    title: "Focus & Clarity",
    icon: "🎯",
    description: "Boost concentration and mental clarity with guided focus sessions.",
    longText:
      "Guided focus meditations enhance concentration and mental clarity. Perfect for work, study, or creative activities requiring sustained attention.",
  },
  gratitude: {
    title: "Gratitude Meditation",
    icon: "🙏",
    description: "Cultivate gratitude and positivity daily.",
    longText:
      "Gratitude meditation encourages reflecting on positive aspects of life. Regular practice has been shown to boost happiness and overall mental resilience.",
  },
}

const meditationId = route.params.meditationId as string
const meditation = computed(() => meditations[meditationId])
</script>

<style scoped>
.meditation-detail {
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
