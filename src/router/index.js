import { createRouter, createWebHistory } from 'vue-router'
import DashboardComponent from '../views/backend/layouts/pages/dashboard/DashboardComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'DashboardComponent',
      component: DashboardComponent
    }
  ]
})

export default router
