<template>
  <div class="topic-detail">
    <section class="hero" v-if="topic">
      <div class="container">
        <div class="icon">{{ topic.icon }}</div>
        <h1>{{ topic.title }}</h1>
        <p class="subtitle">{{ topic.description }}</p>
      </div>
    </section>

    <section class="content" v-if="topic">
      <div class="container">
        <h2>About {{ topic.title }}</h2>
        <p>
          {{ topic.longText }}
        </p>
        <RouterLink to="/topics" class="btn back">← Back to Topics</RouterLink>
      </div>
    </section>

    <section v-else class="not-found">
      <div class="container">
        <h2>Topic not found ❓</h2>
        <RouterLink to="/topics" class="btn back">Browse all topics</RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router"
import { computed } from "vue"

const route = useRoute()

// Define topic data
const topics: Record<string, { 
  title: string; icon: string; description: string; longText: string 
}> = {
  stress: {
    title: "Stress Management",
    icon: "😌",
    description: "Learn techniques to reduce stress and restore balance in daily life.",
    longText: "Stress is a natural response, but when unmanaged it can impact health and happiness. In this topic, you'll find breathing techniques, cognitive strategies, and daily habits to ease stress."
  },
  mindfulness: {
    title: "Mindfulness",
    icon: "🧘‍♂️",
    description: "Build awareness and presence through guided practices and meditations.",
    longText: "Mindfulness helps cultivate awareness of the present moment. Explore simple exercises, meditations, and reflections that can bring calm and focus to your everyday life."
  },
  sleep: {
    title: "Better Sleep",
    icon: "🌙",
    description: "Discover habits and exercises to improve your sleep quality.",
    longText: "Quality sleep is essential for well-being. This section offers routines, sleep hygiene tips, and relaxation exercises that promote restful nights and energized mornings."
  },
  "self-esteem": {
    title: "Self-Esteem",
    icon: "💪",
    description: "Boost your confidence and nurture a healthier relationship with yourself.",
    longText: "Self-esteem impacts how you see yourself and interact with the world. Learn practices to challenge negative self-talk, celebrate your strengths, and build lasting confidence."
  },
  anxiety: {
    title: "Anxiety Relief",
    icon: "💚",
    description: "Find calming strategies and practical tools for managing anxiety.",
    longText: "Anxiety is common, but it can be managed. In this topic, discover grounding techniques, journaling prompts, and guided relaxation to reduce anxious thoughts."
  },
  relationships: {
    title: "Healthy Relationships",
    icon: "👥",
    description: "Explore ways to build stronger, more supportive connections.",
    longText: "Relationships are key to well-being. Explore communication strategies, empathy exercises, and conflict resolution methods that help nurture positive bonds."
  },
}

const topicId = route.params.topicId as string
const topic = computed(() => topics[topicId])
</script>

<style scoped>
.topic-detail {
  background: #f9fafb;
  min-height: 100vh;
}

.hero {
  background: linear-gradient(135deg, #14b8a6, #0f766e);
  color: white;
  text-align: center;
  padding: 4rem 2rem;
}

.hero .icon {
  font-size: 3.5rem;
  margin-bottom: 1rem;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.hero .subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 700px;
  margin: 0 auto;
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
