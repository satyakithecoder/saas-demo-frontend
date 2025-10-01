<script setup>
import {computed, onMounted, ref} from 'vue';
import {supabase} from "@/lib/supabase.js";
import Fliant from "@/assets/img/fliant.png"
import FreelancerView from "@/views/dashboard-freelancer.vue"
import Messages from "@/views/Messages.vue"
import Clients from "@/views/Clients.vue"
import TaskList from "@/views/TaskList.vue";

const first_name = ref('')
const last_name = ref('')
const activeView = ref('tasks')
const viewComponents = {
  dashboard: FreelancerView,
  messages: Messages,
  clients: Clients,
  tasks: TaskList,
}

onMounted(async () => {
  const {data: {user}} = await supabase.auth.getUser();
  first_name.value = user.user_metadata.first_name;
  last_name.value = user.user_metadata.last_name;
});

const activeViewComponent = computed(() => viewComponents[activeView.value])

const project = (e) => {
  const icon = e.currentTarget.firstElementChild;
  icon.classList.toggle('pi-folder')
}
</script>

<template>
  <div class="w-screen h-screen flex flex-row">
    <nav class="m-0 h-full w-1/4 bg-gray-100 flex flex-col items-center space-y-5">
      <div class="flex flex-row items-center justify-around mt-6 w-full h-auto">
        <img :src="Fliant" alt="logo" class="h-12 w-2/5"/>
        <p class="text-white w-10 text-center p-2 rounded-3xl font-medium bg-gradient-to-r from-green-600 to-emerald-500">
          {{ first_name.charAt(0) }} {{ last_name.charAt(0) }} </p>
      </div>
      <div class="w-full h-auto flex flex-col items-center justify-center space-y-3">
        <button
            class="w-[80%] p-2 flex items-center gap-2 hover:bg-gray-200 rounded-lg text-sm font-medium hover:shadow-md transition-all duration-300 ease-in-out hover:translate-x-4 hover:scale-110 active:scale-105">
          <i class="pi pi-th-large"></i>
          <span>Dashboard</span>
        </button>
        <button
            class="w-[80%] p-2 flex items-center gap-2 hover:bg-gray-200 rounded-lg text-sm font-medium hover:shadow-md transition-all duration-300 ease-in-out hover:translate-x-4 hover:scale-110 active:scale-105">
          <i class="pi pi-user"></i>
          <span>Clients</span>
        </button>
        <button
            class="w-[80%] p-2 flex items-center gap-2 hover:bg-gray-200 rounded-lg text-sm font-medium hover:shadow-md transition-all duration-300 ease-in-out hover:translate-x-4 hover:scale-110 active:scale-105"
            @click="project">
          <i class="pi pi-folder pi-folder-open"></i>
          <span>Projects</span>
        </button>
        <button
            class="w-[80%] p-2 flex items-center gap-2 hover:bg-gray-200 rounded-lg text-sm font-medium hover:shadow-md transition-all duration-300 ease-in-out hover:translate-x-4 hover:scale-110 active:scale-105">
          <i class="pi pi-envelope"></i>
          <span>Messages</span>
        </button>
        <span class="text-left w-[75%] text-sm text-slate-600">Tools</span>
        <button
            class="w-[80%] p-2 flex items-center gap-2 hover:bg-gray-200 rounded-lg text-sm font-medium hover:shadow-md transition-all duration-300 ease-in-out hover:translate-x-4 hover:scale-110 active:scale-105">
          <i class="pi pi-file-edit"></i>
          <span>Proposals</span>
        </button>
        <button
            class="w-[80%] p-2 flex items-center gap-2 hover:bg-gray-200 rounded-lg text-sm font-medium hover:shadow-md transition-all duration-300 ease-in-out hover:translate-x-4 hover:scale-110 active:scale-105">
          <i class="pi pi-check-square"></i>
          <span>Tasks</span>
        </button>
        <span class="text-left w-[75%] text-sm text-slate-600">Finance</span>
        <button
            class="w-[80%] p-2 flex items-center gap-2 hover:bg-gray-200 rounded-lg text-sm font-medium hover:shadow-md transition-all duration-300 ease-in-out hover:translate-x-4 hover:scale-110 active:scale-105">
          <i class="pi pi-dollar"></i>
          <span>Invoice</span>
        </button>
        <button
            class="w-[80%] p-2 flex items-center gap-2 hover:bg-gray-200 rounded-lg text-sm font-medium hover:shadow-md transition-all duration-300 ease-in-out hover:translate-x-4 hover:scale-110 active:scale-105 text-blue-400">
          <i class="pi pi-cog"></i>
          <span>Settings</span>
        </button>
      </div>
    </nav>
    <main class="flex-1">
      <component :is="activeViewComponent"></component>
    </main>
  </div>
</template>