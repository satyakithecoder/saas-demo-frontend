<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({

  label: {
    type: String,
    default: 'Back'
  },

  customClass: {
    type: String,
    default: ''
  },
  onClick: {
    type: Function,
    default: null
  },

  to: {
    type: [String, Object],
    default: null
  },

  replace: {
    type: Boolean,
    default: false
  },

  activeClass: {
    type: String,
    default: 'router-link-active'
  },
  exactActiveClass: {
    type: String,
    default: 'router-link-exact-active'
  }
})

const emit = defineEmits(['click'])

const router = useRouter()

const handleClick = () => {
  emit('click')

  if (props.onClick) {
    props.onClick()
  }
}

const handleBack = () => {
  emit('click')

  if (props.onClick) {
    props.onClick()
    return
  }

  // Default behavior: go back in history
  if (window.history.length > 1) {
    router.back()
  } else {
    // If no history, go to a default route
    router.push('/')
  }
}
</script>
<template>
  <router-link
      v-if="to"
      :to="to"
      @click="handleClick"
      class="group inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-800 bg-white/70 hover:bg-white/90 backdrop-blur-sm border border-gray-200/50 hover:border-gray-300/50 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 no-underline"
      :class="customClass"
  >
    <svg
        class="w-4 h-4 transition-transform group-hover:-translate-x-0.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
    >
      <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
      />
    </svg>
    <span>{{ label }}</span>
  </router-link>

  <button
      v-else
      @click="handleBack"
      class="group inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-800 bg-white/70 hover:bg-white/90 backdrop-blur-sm border border-gray-200/50 hover:border-gray-300/50 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
      :class="customClass"
  >
    <svg
        class="w-4 h-4 transition-transform group-hover:-translate-x-0.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
    >
      <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
      />
    </svg>
    <span>{{ label }}</span>
  </button>
</template>



<style scoped>
.router-link-active,
.router-link-exact-active {
  text-decoration: none;
}

.router-link-active {
  @apply bg-white/90 border-gray-300/60;
}
</style>