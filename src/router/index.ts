import ArticleDetailsView from "@/views/ArticleDetailsView.vue"
import ArticlesView from "@/views/ArticlesView.vue"
import LandingPageView from "@/views/LandingPageView.vue"
import LoginView from "@/views/LoginView.vue"
import MeditationDetailsView from "@/views/MeditationDetailsView.vue"
import MeditationsView from "@/views/MeditationsView.vue"
import PlanDetailsView from "@/views/PlanDetailsView.vue"
import PlansView from "@/views/PlansView.vue"
import PrivacyPolicyView from "@/views/PrivacyPolicyView.vue"
import RegisterView from "@/views/RegisterView.vue"
import TermsConditionsView from "@/views/TermsConditionsView.vue"
import TopicDetails from "@/views/TopicDetails.vue"
import TopicsView from "@/views/TopicsView.vue"

import { createRouter as createVueRouter, createWebHistory } from "vue-router"

import type { RouteLocationNamedRaw } from "vue-router"

export const rootRoute: RouteLocationNamedRaw = { name: "home" }

const createRouter = () => {
    const router = createVueRouter({
        history: createWebHistory(import.meta.env.BASE_URL),
        routes: [
            {
                path: "/",
                name: "home",
                component: LandingPageView,
            },
            {
                path: "/topics",
                name: "topics",
                component: TopicsView,
            },
            {
                path: "/topics/:topicId",
                name: "topic-details",
                component: TopicDetails,
                meta: { requiresAuth: true },
            },
            {
                path: "/articles",
                name: "articles",
                component: ArticlesView,
            },
            {
                path: "/articles/:articleId",
                name: "article-details",
                component: ArticleDetailsView,
                meta: { requiresAuth: true },
            },
            {
                path: "/meditations",
                name: "meditations",
                component: MeditationsView,
            },
            {
                path: "/meditations/:meditationId",
                name: "meditation-details",
                component: MeditationDetailsView,
                meta: { requiresAuth: true },
            },
            {
                path: "/plans",
                name: "plans",
                component: PlansView,
            },
            {
                path: "/plans/:planId",
                name: "plan-details",
                component: PlanDetailsView,
                meta: { requiresAuth: true },
            },
            {
                path: "/login",
                name: "login",
                component: LoginView,
                meta: { requiresGuest: true },
            },
            {
                path: "/register",
                name: "register",
                component: RegisterView,
                meta: { requiresGuest: true },
            },
            {
                path: "/terms-conditions",
                name: "terms-conditions",
                component: TermsConditionsView,
            },
            {
                path: "/privacy-policy",
                name: "privacy-policy",
                component: PrivacyPolicyView,
            },
        ],
    })

    // Global route guard
    router.beforeEach(async (to, _from, next) => {
        const requiresAuth = to.matched.some(record => (record.meta as any)?.requiresAuth === true)
        const requiresGuest = to.matched.some(record => (record.meta as any)?.requiresGuest === true)

        let loggedIn = false

        try {
            const res = await fetch("https://back.mindsoulhub.com/auth/me", {
                credentials: "include"
            })
            loggedIn = res.ok
        } catch (err) {
            loggedIn = false
        }

        if (requiresAuth && !loggedIn) {
            // Not logged in → redirect to login
            next({ name: "login" })
        } else if (requiresGuest && loggedIn) {
            // Logged in → redirect to home
            next({ name: "home" })
        } else {
            next()
        }
    })

    return router
}

export default createRouter
