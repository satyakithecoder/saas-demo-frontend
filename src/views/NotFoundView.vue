<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goHome = () => {
  router.push('/');
};
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-blue-700">
    <div class="text-center px-6">
      <h1 class="text-9xl font-bold text-white mb-4">404</h1>
      <h2 class="text-3xl font-semibold text-white mb-6">Page Not Found</h2>
      <p class="text-lg text-white opacity-90 mb-8 max-w-md mx-auto">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <button
          @click="goHome"
          class="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
      >
        Go Back Home
      </button>
    </div>
  </div>
</template>