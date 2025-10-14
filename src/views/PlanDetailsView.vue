<template>
  <div class="plan-detail">
    <section class="hero" v-if="plan">
      <div class="container">
        <div v-if="plan.bestValue" class="best-value-badge">Best Value</div>
        <h1>{{ plan.title }}</h1>
        <p class="price">{{ plan.price }}</p>
        <ul class="features">
          <li v-for="(feature, idx) in plan.features" :key="idx">✅ {{ feature }}</li>
        </ul>
        <p class="recurring" v-if="plan.recurring">{{ plan.recurring }}</p>
        <RouterLink to="/plans" class="btn back">← Back to Plans</RouterLink>
      </div>
    </section>

    <section v-else class="not-found">
      <div class="container">
        <h2>Plan not found ❓</h2>
        <RouterLink to="/plans" class="btn back">Browse all plans</RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router"
import { computed } from "vue"

const route = useRoute()

const plans: Record<
  string,
  { title: string; price: string; recurring?: string; features: string[]; bestValue?: boolean }
> = {
  oneDay: { title: "1-Day Access", price: "$1.95", features: ["Full library access", "HD streaming", "One-time payment"] },
  fiveDays: { title: "5-Day Plan", price: "$9.95", recurring: "Recurs every 5 days until cancelled", features: ["Full library access", "HD streaming", "Cancel anytime"] },
  tenDays: { title: "10-Day Plan", price: "$19.95", recurring: "Recurs every 10 days until cancelled", features: ["Full library access", "HD streaming", "Cancel anytime"] },
  twentyDays: { title: "20-Day Plan", price: "$24.95", recurring: "Recurs every 12 days until cancelled", features: ["Full library access", "HD streaming", "Cancel anytime"] },
  fifteenDaysBest: { title: "15-Day Plan", price: "$29.95", recurring: "Recurs every 15 days until cancelled", bestValue: true, features: ["Full library access", "HD streaming", "Cancel anytime"] },
  twentyDaysPremium: { title: "20-Day Premium", price: "$39.95", recurring: "Recurs every 20 days until cancelled", features: ["Full library access", "HD streaming", "Cancel anytime"] },
  thirtyDays: { title: "30-Day Plan", price: "$49.95", recurring: "Recurs every 30 days until cancelled", features: ["Full library access", "HD streaming", "Cancel anytime"] },
}

const planId = route.params.planId as string
const plan = computed(() => plans[planId])
</script>

<style scoped>
/* similar to BrowsePlans, reuse styles */
</style>
