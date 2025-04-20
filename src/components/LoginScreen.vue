<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-xl shadow-2xl">
      <div class="text-center">
        <h2 class="mt-6 text-3xl font-extrabold text-white">Welcome Back</h2>
        <p class="mt-2 text-sm text-gray-400">Please sign in to your account</p>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="handleLogin">
        <div class="rounded-md shadow-sm space-y-4">
          <div>
            <label for="username" class="block text-sm font-medium text-gray-300 mb-2"
              >Username</label
            >
            <input
              id="username"
              v-model="username"
              name="username"
              type="text"
              required
              class="appearance-none relative block w-full px-4 py-3 border border-gray-700 bg-gray-700 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label for="password" class="block text-sm font-medium text-gray-300 mb-2"
              >Password</label
            >
            <input
              id="password"
              v-model="password"
              name="password"
              type="password"
              required
              class="appearance-none relative block w-full px-4 py-3 border border-gray-700 bg-gray-700 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
              placeholder="Enter your password"
            />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-700 rounded bg-gray-700"
            />
            <label for="remember-me" class="ml-2 block text-sm text-gray-300"> Remember me </label>
          </div>

          <div class="text-sm">
            <a
              href="#"
              class="font-medium text-indigo-400 hover:text-indigo-300 transition duration-200"
            >
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            :disabled="isLoading"
            class="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="isLoading" class="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg
                class="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </span>
            {{ isLoading ? 'Signing in...' : 'Sign in' }}
          </button>
        </div>

        <div class="text-center">
          <p class="text-sm text-gray-400">
            Don't have an account?
            <a
              href="#"
              class="font-medium text-indigo-400 hover:text-indigo-300 transition duration-200 ml-1"
            >
              Register
            </a>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const userStore = useUserStore()

const username = ref('')
const password = ref('')
const isLoading = ref(false)

const handleLogin = async () => {
  try {
    isLoading.value = true
    const success = await userStore.login(username.value, password.value)
    if (success) {
      router.push('/dashboard') // Redirect to dashboard after successful login
    }
  } catch (error) {
    console.error('Login failed:', error)
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
/* Add any additional styles here */
</style>
