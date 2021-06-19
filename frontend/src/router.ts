import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

// const auth = useAuthStore()

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    const token = window.localStorage.token

    const loginRoute = {
      path: '/login',
      query: { redirect: to.fullPath },
    }

    return token ? next() : next(loginRoute)
  }

  next()
})

export default router
