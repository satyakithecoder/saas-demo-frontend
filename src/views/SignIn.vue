<script setup>
import { ref } from 'vue'
import { supabase } from '@/lib/supabase.js'
import BackButton from "@/components/BackButton.vue";

const freelancerPassword = ref(false)
const freelancerEmail = ref('')
const freelancerPasswordValue = ref('')

const clientEmail = ref('')
const clientToken = ref('')

const managerUid = ref('')

const toggleFreelancerPassword = () => {
  freelancerPassword.value = !freelancerPassword.value
}

const handleFreelancerSignIn = async () => {
  try{
    const { data, error } = await supabase.auth.signInWithPassword({
      email: freelancerEmail.value,
      password: freelancerPasswordValue.value,
    })
    if(error){
      console.error(error)
    }

    freelancerEmail.value = " "
    freelancerPasswordValue.value = " "
    console.log('SignIn successful: ',  data)

  }
  catch(error){
    console.log(error)
  }
}

const handleClientSignIn = () => {
  console.log('Client Sign In:', {
    email: clientEmail.value,
    token: clientToken.value,
    managerUuid: managerUid.value
  })
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

    <!-- Header -->
    <div class="text-center mb-8">
      <div class="w-20 h-20 bg-gradient-to-br from-blue-100 to-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm border border-blue-100/50">
        <svg class="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
        </svg>
      </div>
      <h1 class="text-4xl sm:text-5xl font-semibold text-gray-700 mb-2">Welcome Back</h1>
      <p class="text-base sm:text-lg text-gray-500">Choose your sign-in method</p>
    </div>

    <!-- Split Card Container -->
    <div class="w-full max-w-6xl">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">

        <!-- Freelancer Sign In Card -->
        <div class="bg-white/70 backdrop-blur-sm shadow-lg border border-white/20 rounded-3xl p-8 lg:p-10 space-y-6">
          <div class="text-center mb-8">
            <div class="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm border border-green-100/50">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
            </div>
            <h2 class="text-2xl font-semibold text-gray-700 mb-2">Sign in as Freelancer</h2>
            <p class="text-sm text-gray-500">Access your freelancer dashboard</p>
          </div>

          <form @submit.prevent="handleFreelancerSignIn" class="space-y-5">
            <div>
              <label class="block text-sm font-medium text-gray-600 mb-2">Email Address</label>
              <input
                  v-model="freelancerEmail"
                  type="email"
                  placeholder="freelancer@example.com"
                  class="w-full p-3.5 border border-gray-200 bg-gray-50/50 rounded-xl focus:ring-2 focus:ring-green-300/50 focus:border-green-300 focus:bg-white transition-all placeholder:text-gray-400 text-sm sm:text-base outline-none"
                  required
              >
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-600 mb-2">Password</label>
              <div class="relative w-full">
                <input
                    v-model="freelancerPasswordValue"
                    placeholder="Enter your password"
                    class="w-full p-3.5 pr-12 border border-gray-200 bg-gray-50/50 rounded-xl focus:ring-2 focus:ring-green-300/50 focus:border-green-300 focus:bg-white transition-all placeholder:text-gray-400 text-sm sm:text-base outline-none"
                    :type="freelancerPassword ? 'text' : 'password'"
                    required
                >
                <button
                    type="button"
                    @click="toggleFreelancerPassword"
                    class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none transition-colors"
                    aria-label="Toggle password visibility"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path v-if="freelancerPassword" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
                    <template v-else>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.543 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                    </template>
                  </svg>
                </button>
              </div>
            </div>

            <div class="flex items-center justify-between text-sm">
              <router-link to="/signup"><a href="#" class="text-green-500 hover:text-green-600 font-medium transition-colors">Create account</a></router-link>
              <a href="#" class="text-green-500 hover:text-green-600 font-medium transition-colors">Forgot password?</a>
            </div>

            <button
                type="submit"
                class="bg-gradient-to-r from-green-500/90 to-emerald-600/90 hover:from-green-500 hover:to-emerald-600 p-3.5 w-full rounded-xl text-white text-base font-medium shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              Sign In as Freelancer
            </button>
          </form>
        </div>

        <!-- Client Sign In Card -->
        <div class="bg-white/70 backdrop-blur-sm shadow-lg border border-white/20 rounded-3xl p-8 lg:p-10 space-y-6">
          <div class="text-center mb-8">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-100 to-indigo-200 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm border border-purple-100/50">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
            </div>
            <h2 class="text-2xl font-semibold text-gray-700 mb-2">Sign in as Client</h2>
            <p class="text-sm text-gray-500">Access your client portal</p>
          </div>

          <form @submit.prevent="handleClientSignIn" class="space-y-5">
            <div>
              <label class="block text-sm font-medium text-gray-600 mb-2">Email Address</label>
              <input
                  v-model="clientEmail"
                  type="email"
                  placeholder="client@company.com"
                  class="w-full p-3.5 border border-gray-200 bg-gray-50/50 rounded-xl focus:ring-2 focus:ring-purple-300/50 focus:border-purple-300 focus:bg-white transition-all placeholder:text-gray-400 text-sm sm:text-base outline-none"
                  required
              >
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-600 mb-2">Access Token</label>
              <input
                  v-model="clientToken"
                  type="password"
                  placeholder="Enter your access token"
                  class="w-full p-3.5 border border-gray-200 bg-gray-50/50 rounded-xl focus:ring-2 focus:ring-purple-300/50 focus:border-purple-300 focus:bg-white transition-all placeholder:text-gray-400 text-sm sm:text-base outline-none"
                  required
              >
              <p class="text-xs text-gray-400 mt-2">Token provided by your project manager</p>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-600 mb-2">Project Manager UID</label>
              <input
                  v-model="managerUid"
                  type="text"
                  placeholder="Enter project manager UID"
                  class="w-full p-3.5 border border-gray-200 bg-gray-50/50 rounded-xl focus:ring-2 focus:ring-purple-300/50 focus:border-purple-300 focus:bg-white transition-all placeholder:text-gray-400 text-sm sm:text-base outline-none"
                  required
              >
              <p class="text-xs text-gray-400 mt-2">UUID provided by your project manager</p>
            </div>

            <button
                type="submit"
                class="bg-gradient-to-r from-purple-500/90 to-indigo-600/90 hover:from-purple-500 hover:to-indigo-600 p-3.5 w-full rounded-xl text-white text-base font-medium shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              Sign In as Client
            </button>
          </form>
        </div>

      </div>
     </div>
    </div>
</template>