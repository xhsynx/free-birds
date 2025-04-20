import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

interface User {
  id: string | null
  username: string | null
  email: string | null
  token: string | null
}

export const useUserStore = defineStore('user', () => {
  const id = ref<string | null>(null)
  const username = ref<string | null>(null)
  const email = ref<string | null>(null)
  const token = ref<string | null>(null)

  const isAuthenticated = computed(() => !!token.value)
  const currentUser = computed(() => ({
    id: id.value,
    username: username.value,
    email: email.value,
  }))

  function setUser(userData: Partial<User>) {
    id.value = userData.id ?? id.value
    username.value = userData.username ?? username.value
    email.value = userData.email ?? email.value
    token.value = userData.token ?? token.value
  }

  function clearUser() {
    id.value = null
    username.value = null
    email.value = null
    token.value = null
  }

  async function login(username: string, password: string) {
    try {
      // TODO: Implement your login API call here
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })

      if (!response.ok) throw new Error('Login failed')

      const data = await response.json()
      setUser(data)
      return true
    } catch (error) {
      console.error('Login error:', error)
      return false
    }
  }

  async function logout() {
    try {
      // TODO: Implement your logout API call here
      await fetch('/api/logout', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      })
      clearUser()
      return true
    } catch (error) {
      console.error('Logout error:', error)
      return false
    }
  }

  return {
    id,
    username,
    email,
    token,
    isAuthenticated,
    currentUser,
    setUser,
    clearUser,
    login,
    logout,
  }
})
