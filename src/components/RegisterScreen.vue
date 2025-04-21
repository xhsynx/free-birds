<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-xl shadow-2xl">
      <div class="text-center">
        <h2 class="mt-6 text-3xl font-extrabold text-white">Create your account</h2>
        <p class="mt-2 text-sm text-gray-400">Join us and start your journey</p>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="handleRegister">
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
              :class="[
                'appearance-none relative block w-full px-4 py-3 border text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-200',
                v$.username.$error
                  ? 'border-red-500 bg-gray-700 focus:ring-red-500'
                  : 'border-gray-700 bg-gray-700 focus:ring-indigo-500',
              ]"
              placeholder="Choose a username"
              @blur="v$.username.$touch"
            />
            <div v-if="v$.username.$error" class="mt-1 text-sm text-red-500">
              <span v-if="v$.username.required.$invalid">Username is required</span>
              <span v-else-if="v$.username.minLength.$invalid"
                >Username must be at least 3 characters</span
              >
              <span v-else-if="v$.username.maxLength.$invalid"
                >Username must be less than 20 characters</span
              >
            </div>
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <input
              id="email"
              v-model="email"
              name="email"
              type="email"
              required
              :class="[
                'appearance-none relative block w-full px-4 py-3 border text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-200',
                v$.email.$error
                  ? 'border-red-500 bg-gray-700 focus:ring-red-500'
                  : 'border-gray-700 bg-gray-700 focus:ring-indigo-500',
              ]"
              placeholder="Enter your email"
              @blur="v$.email.$touch"
            />
            <div v-if="v$.email.$error" class="mt-1 text-sm text-red-500">
              <span v-if="v$.email.required.$invalid">Email is required</span>
              <span v-else-if="v$.email.email.$invalid">Please enter a valid email</span>
            </div>
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
              :class="[
                'appearance-none relative block w-full px-4 py-3 border text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-200',
                v$.password.$error
                  ? 'border-red-500 bg-gray-700 focus:ring-red-500'
                  : 'border-gray-700 bg-gray-700 focus:ring-indigo-500',
              ]"
              placeholder="Create a password"
              @blur="v$.password.$touch"
            />
            <div v-if="v$.password.$error" class="mt-1 text-sm text-red-500">
              <span v-if="v$.password.required.$invalid">Password is required</span>
              <span v-else-if="v$.password.minLength.$invalid"
                >Password must be at least 8 characters</span
              >
              <span v-else-if="v$.password.containsUppercase.$invalid"
                >Password must contain at least one uppercase letter</span
              >
              <span v-else-if="v$.password.containsLowercase.$invalid"
                >Password must contain at least one lowercase letter</span
              >
              <span v-else-if="v$.password.containsNumber.$invalid"
                >Password must contain at least one number</span
              >
              <span v-else-if="v$.password.containsSpecial.$invalid"
                >Password must contain at least one special character</span
              >
            </div>
          </div>
          <div>
            <label for="confirmPassword" class="block text-sm font-medium text-gray-300 mb-2"
              >Confirm Password</label
            >
            <input
              id="confirmPassword"
              v-model="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              :class="[
                'appearance-none relative block w-full px-4 py-3 border text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-200',
                v$.confirmPassword.$error
                  ? 'border-red-500 bg-gray-700 focus:ring-red-500'
                  : 'border-gray-700 bg-gray-700 focus:ring-indigo-500',
              ]"
              placeholder="Confirm your password"
              @blur="v$.confirmPassword.$touch"
            />
            <div v-if="v$.confirmPassword.$error" class="mt-1 text-sm text-red-500">
              <span v-if="v$.confirmPassword.sameAsPassword.$invalid">Passwords must match</span>
            </div>
          </div>
        </div>

        <div>
          <button
            type="submit"
            :disabled="isLoading || v$.$invalid"
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
            {{ isLoading ? 'Creating account...' : 'Create account' }}
          </button>
        </div>

        <div class="text-center">
          <p class="text-sm text-gray-400">
            Already have an account?
            <router-link
              to="/login"
              class="font-medium text-indigo-400 hover:text-indigo-300 transition duration-200 ml-1"
            >
              Sign in
            </router-link>
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
import { useVuelidate } from '@vuelidate/core'
import {
  required,
  email as emailValidator,
  minLength,
  maxLength,
  sameAs,
} from '@vuelidate/validators'

const router = useRouter()
const userStore = useUserStore()

const username = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const isLoading = ref(false)

const rules = {
  username: {
    required,
    minLength: minLength(3),
    maxLength: maxLength(20),
  },
  email: {
    required,
    email: emailValidator,
  },
  password: {
    required,
    minLength: minLength(8),
    containsUppercase: (value: string) => /[A-Z]/.test(value),
    containsLowercase: (value: string) => /[a-z]/.test(value),
    containsNumber: (value: string) => /[0-9]/.test(value),
    containsSpecial: (value: string) => /[!@#$%^&*]/.test(value),
  },
  confirmPassword: {
    required,
    sameAsPassword: sameAs(password),
  },
}

const v$ = useVuelidate(rules, { username, email, password, confirmPassword })

const handleRegister = async () => {
  const isValid = await v$.value.$validate()
  if (!isValid) return

  try {
    isLoading.value = true
    // TODO: Implement your registration API call here
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username.value,
        email: email.value,
        password: password.value,
      }),
    })

    if (!response.ok) throw new Error('Registration failed')

    const data = await response.json()
    userStore.setUser(data)
    router.push('/dashboard')
  } catch (error) {
    console.error('Registration error:', error)
    alert('Registration failed. Please try again.')
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
/* Add any additional styles here */
</style>
