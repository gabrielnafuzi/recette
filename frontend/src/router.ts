import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import NProgress from 'nprogress'

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  NProgress.start()

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

router.afterEach(() => {
  NProgress.done()
})

export default router
