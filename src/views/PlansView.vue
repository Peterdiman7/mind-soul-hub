<template>
  <div class="plans-page">
    <section class="hero">
      <div class="container">
        <h1>Choose Your Plan 💎</h1>
        <p>Select the plan that fits your mental wellness journey.</p>
      </div>
    </section>

    <section class="plans-list">
      <div class="container">
        <div class="grid">
          <div
            v-for="(plan, id) in plans"
            :key="id"
            :class="['plan-card', plan.bestValue ? 'best-value' : '']"
          >
            <div v-if="plan.bestValue" class="best-value-badge">Best Value</div>
            <h3>{{ plan.title }}</h3>
            <p class="price">{{ plan.price }}</p>
            <ul class="features">
              <li v-for="(feature, idx) in plan.features" :key="idx">
                ✅ {{ feature }}
              </li>
            </ul>
            <p class="recurring" v-if="plan.recurring">{{ plan.recurring }}</p>
            <RouterLink :to="`/plans/${id}`" class="btn choose">Choose Plan</RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router"

const plans: Record<
  string,
  {
    title: string
    price: string
    recurring?: string
    features: string[]
    bestValue?: boolean
  }
> = {
  oneDay: {
    title: "1-Day Access",
    price: "$1.95",
    recurring: "Recurs everyday until cancelled",
    features: ["Full library access", "HD streaming", "One-time payment"],
  },
  fiveDays: {
    title: "5-Day Plan",
    price: "$9.95",
    recurring: "Recurs every 5 days until cancelled",
    features: ["Full library access", "HD streaming", "Cancel anytime"],
  },
  tenDays: {
    title: "10-Day Plan",
    price: "$19.95",
    recurring: "Recurs every 10 days until cancelled",
    features: ["Full library access", "HD streaming", "Cancel anytime"],
  },
  twentyDays: {
    title: "20-Day Plan",
    price: "$24.95",
    recurring: "Recurs every 12 days until cancelled",
    features: ["Full library access", "HD streaming", "Cancel anytime"],
  },
  fifteenDaysBest: {
    title: "15-Day Plan",
    price: "$29.95",
    recurring: "Recurs every 15 days until cancelled",
    bestValue: true,
    features: ["Full library access", "HD streaming", "Cancel anytime"],
  },
  twentyDaysPremium: {
    title: "20-Day Premium",
    price: "$39.95",
    recurring: "Recurs every 20 days until cancelled",
    features: ["Full library access", "HD streaming", "Cancel anytime"],
  },
  thirtyDays: {
    title: "30-Day Plan",
    price: "$49.95",
    recurring: "Recurs every 30 days until cancelled",
    features: ["Full library access", "HD streaming", "Cancel anytime"],
  },
}
</script>

<style scoped>
.plans-page {
  background: #f9fafb;
  min-height: 100vh;
}

.hero {
  background: linear-gradient(135deg, #0f766e, #14b8a6);
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

.plans-list {
  padding: 4rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.plan-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  position: relative;
  transition: transform 0.3s ease;
}

.plan-card:hover {
  transform: translateY(-5px);
}

.best-value {
  border: 2px solid #14b8a6;
}

.best-value-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: #14b8a6;
  color: white;
  padding: 0.3rem 1rem;
  border-radius: 12px 12px 0 0;
  font-weight: bold;
  font-size: 0.9rem;
}

.price {
  font-size: 2rem;
  font-weight: bold;
  margin: 1rem 0;
  color: #0f766e;
}

.features {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.features li {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.recurring {
  font-size: 0.9rem;
  color: #374151;
  margin-bottom: 1rem;
}

.btn.choose {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background: #14b8a6;
  color: white;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn.choose:hover {
  background: #0f766e;
  transform: translateY(-2px);
}
</style>
