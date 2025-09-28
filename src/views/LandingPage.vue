<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import Logo from "@/assets/img/logo.jpg"
import Invoice from "@/assets/img/Invoice-window.svg"
import Chat from "@/assets/img/chat.svg"

const isYearly = ref(false)

const menu = () => {
  document.querySelector("#mobile-menu").classList.toggle("hidden")
}

const handleResize = () => {
  if (window.innerWidth >= 768) {
    document.querySelector("#mobile-menu")?.classList.add("hidden")
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <nav class="h-16 w-full flex items-center justify-between px-4 bg-white shadow-md mb-2">

    <div class="flex items-center space-x-2">
      <img :src="Logo" alt="logo" class="h-8 w-8">
      <span class="font-semibold text-lg">Chrono Task</span>
    </div>

    <div class="hidden md:flex ">
      <a href="#hero"
         class="relative inline-block px-4 py-2 rounded-full hover:bg-slate-200 hover:text-blue-600">
        Home
      </a>
      <a href="#"
         class="relative inline-block px-4 py-2 rounded-full hover:bg-slate-200 hover:text-blue-600">
        Features
      </a>
      <a href="#pricing"
         class="relative inline-block px-4 py-2 rounded-full hover:bg-slate-200 hover:text-blue-600">
        Pricing
      </a>
      <a href="#aboutUs"
         class="relative inline-block px-4 py-2 rounded-full hover:bg-slate-200 hover:text-blue-600">
        About Us
      </a>
    </div>

    <div class="flex items-center space-x-4 hidden md:flex">
      <button class="px-4 py-1 border border-blue-500 text-blue-500 rounded hover:bg-blue-50 transition">Sign In</button>
      <button class="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Sign Up</button>
    </div>
    <div class="md:hidden flex items-center">
      <button @click="menu" class="text-2xl">
        ☰
      </button>
    </div>
    <div class="md:hidden fixed top-16 left-0 w-full bg-white shadow-md z-50 flex flex-col space-y-2 p-4 hidden" id="mobile-menu">
      <a class="w-full text-left px-4 py-2 rounded hover:bg-blue-100" href="#hero">Home</a>
      <a class="w-full text-left px-4 py-2 rounded hover:bg-blue-100">Features</a>
      <a class="w-full text-left px-4 py-2 rounded hover:bg-blue-100" href="#pricing">Pricing</a>
      <a class="w-full text-left px-4 py-2 rounded hover:bg-blue-100" href="#aboutUs">About Us</a>
    </div>
  </nav>
  <div class="h-[90vh] w-full mx-2 rounded-3xl relative bg-gray-50" id="hero">
    <div class="absolute inset-0 z-10 flex flex-col items-center justify-center text-white space-y-3 px-4 text-center">
      <h1 class="text-3xl md:text-4xl font-bold text-slate-950">Organize, Plan and Track</h1>
      <p class="text-base md:text-lg mt-2 text-black">All in one place</p>
      <button class="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
        Get started
      </button>
    </div>
    <div class="absolute top-4 right-2 md:top-24 md:right-8 z-20 md:transform md:-rotate-12 w-40 md:w-96 hidden lg:block">
      <img
          :src="Chat"
          alt="chat"
          class="w-full h-auto shadow-2xl rounded-lg bg-slate-950 opacity-80 object-cover"
      >
    </div>
    <div class="absolute bottom-10 left-8 z-20 w-40 md:w-[300px] hidden lg:block md:rotate-12">
      <img :src="Invoice" alt="Invoice" class="w-full h-auto shadow-2xl rounded-lg object-cover border-2">
    </div>

  </div>
  <div class="py-16 px-4 bg-gray-50" id="pricing">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Choose Your Plan</h2>
      <p class="text-center text-gray-600 mb-8">Get started with Chrono Task today</p>
      <div class="flex items-center justify-center mb-12 space-x-4">
        <span class="text-gray-700 font-medium" :class="{ 'text-blue-600': !isYearly }">Monthly</span>
        <button
            @click="isYearly = !isYearly"
            class="relative inline-flex h-8 w-16 items-center rounded-full transition-colors focus:outline-none"
            :class="isYearly ? 'bg-blue-600' : 'bg-gray-300'"
        >
          <span
              class="inline-block h-6 w-6 transform rounded-full bg-white transition-transform"
              :class="isYearly ? 'translate-x-9' : 'translate-x-1'"
          ></span>
        </button>
        <span class="text-gray-700 font-medium" :class="{ 'text-blue-600': isYearly }">
          Yearly
          <span class="text-green-600 text-sm ml-1">(Save 20%)</span>
        </span>
      </div>

      <div class="max-w-md mx-auto">
        <div class="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-500 relative overflow-hidden">
          <div class="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
            Popular
          </div>

          <h3 class="text-2xl font-bold text-gray-900 mb-2">Pro Plan</h3>
          <div class="mb-6">
            <span class="text-4xl font-bold text-gray-900">
              ${{ isYearly ? '96' : '10' }}
            </span>
            <span class="text-gray-600 ml-2">
              {{ isYearly ? '/ year' : '/ month' }}
            </span>
            <div v-if="isYearly" class="text-sm text-green-600 mt-1">
              $8/month when billed annually
            </div>
          </div>

          <ul class="space-y-4 mb-8">
            <li class="flex items-start">
              <svg class="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="text-gray-700">Unlimited projects</span>
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="text-gray-700">File sharing</span>
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="text-gray-700">Payment tracking</span>
            </li>
          </ul>

          <button class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md">
            Get Started
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="py-12 px-4 bg-gray-50" id="aboutUs">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4">About Us</h2>
      <p class="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Chrono Task is your all-in-one solution for organizing, planning, and tracking your work.
        We're committed to helping teams and individuals achieve their goals with powerful yet simple tools.
      </p>

      <div class="flex justify-center space-x-6 mb-6">
        <a href="mailto:contact@chronotask.com"
           class="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-blue-100 transition duration-300 group"
           aria-label="Email">
          <i class="pi pi-envelope text-xl text-gray-700 group-hover:text-blue-600"></i>
        </a>
        <a href="https://instagram.com"
           target="_blank"
           class="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-pink-100 transition duration-300 group"
           aria-label="Instagram">
          <i class="pi pi-instagram text-xl text-gray-700 group-hover:text-pink-600"></i>
        </a>
        <a href="https://reddit.com"
           target="_blank"
           class="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-orange-100 transition duration-300 group"
           aria-label="Reddit">
          <i class="pi pi-reddit text-xl text-gray-700 group-hover:text-orange-600"></i>
        </a>
        <a href="https://twitter.com"
           target="_blank"
           class="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-blue-100 transition duration-300 group"
           aria-label="Twitter">
          <i class="pi pi-twitter text-xl text-gray-700 group-hover:text-blue-500"></i>
        </a>
      </div>

      <p class="text-center text-gray-500 text-sm">
        © 2025 Chrono Task. All rights reserved.
      </p>
    </div>
  </div>
</template>
<style scoped>
html {
  scroll-behavior: smooth;
}
</style>