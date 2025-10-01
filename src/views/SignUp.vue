<script setup>
import { ref } from 'vue';
import { supabase } from '@/lib/supabase.js'
import BackButton from "@/components/BackButton.vue";

const passwordVisible = ref(false)
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')

const createAccount = async () => {
  try {
    if (!email.value || !password.value) {
      console.error('Email and password are required');
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
      options: {
        data: {
          first_name: firstName.value,
          last_name: lastName.value,
        }
      }
    });
    if (error) {
      console.error('Signup error:', error.message);
      return;
    }

    firstName.value = " "
    lastName.value = " "
    email.value = " "
    password.value = " "
    console.log('Account created successfully:', data);

  } catch (error) {
    console.error('Unexpected error:', error);
  }
}

const togglePassword = () => {
  passwordVisible.value = !passwordVisible.value
}
</script>

<template>
  <div class="min-h-screen w-full flex flex-col justify-center items-center p-4 sm:p-8 lg:p-14 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">

    <div class="w-full max-w-6xl mb-4">
      <BackButton
          label="Back to Home"
          to="/"
          class="mb-4"
      />
    </div>
    <div class="w-full max-w-md lg:max-w-lg xl:max-w-xl bg-white/70 backdrop-blur-sm shadow-lg border border-white/20 rounded-3xl flex flex-col items-center py-8 sm:py-10 lg:py-12 space-y-6">
      <header class="w-full flex flex-col items-center justify-center h-auto space-y-3 px-4">
        <div class="w-16 h-16 bg-gradient-to-br from-blue-100 to-slate-200 rounded-2xl flex items-center justify-center mb-2 shadow-sm border border-blue-100/50">
          <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
          </svg>
        </div>
        <h1 class="text-3xl sm:text-4xl lg:text-4xl font-semibold text-gray-700 text-center">Create Account</h1>
        <p class="text-sm sm:text-base text-gray-500 text-center">Already have an account? <router-link to="/signin"><a class="text-blue-500 hover:text-blue-600 font-medium cursor-pointer transition-colors">Sign in</a></router-link> </p>
      </header>
      <main class="w-full px-6 sm:px-8 lg:px-10 space-y-5">
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div class="w-full">
            <label class="block text-sm font-medium text-gray-600 mb-2">First Name</label>
            <input v-model="firstName" placeholder="John" class="w-full p-3.5 border border-gray-200 bg-gray-50/50 rounded-xl focus:ring-2 focus:ring-blue-300/50 focus:border-blue-300 focus:bg-white transition-all placeholder:text-gray-400 text-sm sm:text-base outline-none">
          </div>
          <div class="w-full">
            <label class="block text-sm font-medium text-gray-600 mb-2">Last Name</label>
            <input v-model="lastName" placeholder="Doe" class="w-full p-3.5 border border-gray-200 bg-gray-50/50 rounded-xl focus:ring-2 focus:ring-blue-300/50 focus:border-blue-300 focus:bg-white transition-all placeholder:text-gray-400 text-sm sm:text-base outline-none">
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-600 mb-2">Email Address</label>
          <input v-model="email" type="email" placeholder="john.doe@example.com" class="w-full p-3.5 border border-gray-200 bg-gray-50/50 rounded-xl focus:ring-2 focus:ring-blue-300/50 focus:border-blue-300 focus:bg-white transition-all placeholder:text-gray-400 text-sm sm:text-base outline-none">
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-600 mb-2">Password</label>
          <div class="relative w-full">
            <input
                v-model="password"
                placeholder="Create a strong password"
                class="w-full p-3.5 pr-12 border border-gray-200 bg-gray-50/50 rounded-xl focus:ring-2 focus:ring-blue-300/50 focus:border-blue-300 focus:bg-white transition-all placeholder:text-gray-400 text-sm sm:text-base outline-none"
                :type="passwordVisible ? 'text' : 'password'"
            >
            <button
                type="button"
                @click="togglePassword"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none transition-colors"
                aria-label="Toggle password visibility"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path v-if="passwordVisible" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
                <template v-else>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.543 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </template>
              </svg>
            </button>
          </div>
          <p class="text-xs text-gray-400 mt-2">Must be at least 8 characters long</p>
        </div>
      </main>
      <div class="w-full px-6 sm:px-8 lg:px-10">
        <button class="bg-gradient-to-r from-blue-500/90 to-blue-600/90 hover:from-blue-500 hover:to-blue-600 p-3.5 w-full rounded-xl text-white text-base sm:text-lg font-medium shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                @click="createAccount"
        >
          Create Account
        </button>
      </div>
    </div>
  </div>
</template>