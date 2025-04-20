import { createRouter, createWebHistory } from 'vue-router'
import LoginScreen from '../components/LoginScreen.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginScreen,
    },
  ],
})

export default router
