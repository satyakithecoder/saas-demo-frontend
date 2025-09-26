<script setup>
import Logo from "@/assets/img/logo.jpg"
import Background from "@/assets/img/background.jpg"
const menu = () => {
  document.querySelector("#mobile-menu").classList.toggle("hidden")
}
</script>

<template>
  <nav class="h-16 w-full flex items-center justify-between px-4 bg-white shadow-md">

    <div class="flex items-center space-x-2">
      <img :src="Logo" alt="logo" class="h-8 w-8">
      <span class="font-semibold text-lg">Chrono Task</span>
    </div>

    <div class="hidden md:flex ">
      <a href="#"
         class="relative inline-block px-4 py-2 rounded-full hover:bg-slate-200 hover:text-blue-600">
        Home
      </a>
      <a href="#"
         class="relative inline-block px-4 py-2 rounded-full hover:bg-slate-200 hover:text-blue-600">
        Features
      </a>
      <a href="#"
         class="relative inline-block px-4 py-2 rounded-full hover:bg-slate-200 hover:text-blue-600">
        Pricing
      </a>
      <a href="#"
         class="relative inline-block px-4 py-2 rounded-full hover:bg-slate-200 hover:text-blue-600">
        About Us
      </a>
    </div>

    <div class="flex items-center space-x-4">
      <button class="px-4 py-1 border border-blue-500 text-blue-500 rounded hover:bg-blue-50 transition">Sign In</button>
      <button class="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Sign Up</button>
    </div>
    <div class="md:hidden">
      <button @click="menu">
        ☰
      </button>
    </div>
    <div class="hidden fixed top-16 left-0 w-full bg-white shadow-md z-50 flex flex-col space-y-2 p-4" id="mobile-menu">
      <button class="w-full text-left px-4 py-2 rounded hover:bg-blue-100">Home</button>
      <button class="w-full text-left px-4 py-2 rounded hover:bg-blue-100">Features</button>
      <button class="w-full text-left px-4 py-2 rounded hover:bg-blue-100">Pricing</button>
      <button class="w-full text-left px-4 py-2 rounded hover:bg-blue-100">About Us</button>
    </div>
  </nav>
  <div class="h-[90vh] w-screen">
    <img :src="Background" alt="bg" class="w-full h-full object-cover">
  </div>
</template>
