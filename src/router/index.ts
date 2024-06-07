import { KeepAlive } from 'vue'
import { createRouter, createMemoryHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'Home',
      KeepAlive: true,
      requireAuth: false
    },
    component: () => import('@/views/Home.vue')
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router