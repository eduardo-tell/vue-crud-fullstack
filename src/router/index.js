import { createRouter, createWebHistory } from 'vue-router'

import RegisterPage from '../pages/RegisterPage.vue'
import ListPage from '../pages/ListPage.vue'

const routes = [
  {
    path: '/',
    component: RegisterPage,
  },
  {
    path: '/list',
    component: ListPage,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router