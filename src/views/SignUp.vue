<script setup>
import { ref } from 'vue'

const passwordVisible = ref(false)

const togglePassword = () => {
  passwordVisible.value = !passwordVisible.value
}
</script>

<template>
  <div class="min-h-screen w-full flex flex-col justify-center items-center p-4 sm:p-8 lg:p-14 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
    <div class="w-full max-w-md lg:max-w-lg xl:max-w-xl bg-white shadow-2xl rounded-2xl flex flex-col items-center py-8 sm:py-10 lg:py-12 space-y-6">
      <header class="w-full flex flex-col items-center justify-center h-auto space-y-3 px-4">
        <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-2 shadow-lg">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
          </svg>
        </div>
        <h1 class="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-800 text-center">Create Account</h1>
        <p class="text-sm sm:text-base text-gray-600 text-center">Already have an account? <a class="text-blue-600 hover:text-blue-700 font-medium cursor-pointer transition-colors">Sign in</a></p>
      </header>
      <main class="w-full px-6 sm:px-8 lg:px-10 space-y-5">
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div class="w-full">
            <label class="block text-sm font-medium text-gray-700 mb-2">First Name</label>
            <input placeholder="John" class="w-full p-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-gray-400 text-sm sm:text-base outline-none">
          </div>
          <div class="w-full">
            <label class="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
            <input placeholder="Doe" class="w-full p-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-gray-400 text-sm sm:text-base outline-none">
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
          <input type="email" placeholder="john.doe@example.com" class="w-full p-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-gray-400 text-sm sm:text-base outline-none">
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <div class="relative w-full">
            <input
                placeholder="Create a strong password"
                class="w-full p-3.5 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-gray-400 text-sm sm:text-base outline-none"
                :type="passwordVisible ? 'text' : 'password'"
            >
            <button
                type="button"
                @click="togglePassword"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none transition-colors"
                aria-label="Toggle password visibility"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path v-if="passwordVisible" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
                <template v-else>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.543 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </template>
              </svg>
            </button>
          </div>
          <p class="text-xs text-gray-500 mt-2">Must be at least 8 characters long</p>
        </div>
      </main>
      <div class="w-full px-6 sm:px-8 lg:px-10">
        <button class="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 p-3.5 w-full rounded-lg text-white text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5">
          Create Account
        </button>
      </div>
      <div class="flex items-center text-gray-400 w-full px-6 sm:px-8 lg:px-10 text-xs sm:text-sm">
        <div class="flex-grow border-t border-gray-300"></div>
        <span class="px-4 whitespace-nowrap font-medium">Or continue with</span>
        <div class="flex-grow border-t border-gray-300"></div>
      </div>
      <div class="w-full flex flex-col sm:flex-row gap-3 justify-center items-center px-6 sm:px-8 lg:px-10">
        <button class="group border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 rounded-lg p-3.5 w-full sm:w-1/2 transition-all text-sm sm:text-base font-medium text-gray-700 hover:text-blue-600 shadow-sm hover:shadow-md">
          <i class="pi pi-google group-hover:text-blue-600 transition-colors"></i> Google
        </button>
        <button class="group border-2 border-gray-300 hover:border-gray-800 hover:bg-gray-50 rounded-lg p-3.5 w-full sm:w-1/2 transition-all text-sm sm:text-base font-medium text-gray-700 hover:text-gray-900 shadow-sm hover:shadow-md">
          <i class="pi pi-github group-hover:text-gray-900 transition-colors"></i> GitHub
        </button>
      </div>
    </div>
  </div>
</template>