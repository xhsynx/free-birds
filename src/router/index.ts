import { createRouter, createWebHistory } from 'vue-router'
import LoginScreen from '../components/LoginScreen.vue'
import RegisterScreen from '../components/RegisterScreen.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginScreen,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterScreen,
    },
  ],
})

export default router
