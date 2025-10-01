<script setup>

</script>

<template>
<h1 class="mt-9 mx-12 text-[40px] font-normal">Welcome Back !</h1>
  <table class="mx-12 mt-8 w-[80%] shadow-md border-separate border-spacing-0 rounded-t-lg overflow-hidden">
    <thead class="bg-gray-100">
    <tr>
      <th class="px-6 py-3 text-left rounded-tl-lg font-normal">
        <div class="flex items-center gap-3 text-blue-500">
          <span>Tasks</span>
          <i class="pi pi-plus cursor-pointer"></i>
        </div>
      </th>
       <th class="px-6 py-3 text-left font-normal">
         <div class="flex items-center gap-3 text-red-600">
           <i class="pi pi-calendar-clock"></i>
           <span>Deadline</span>
         </div>
      </th>
      <th class="px-6 py-3 text-left font-normal">
        <div class="flex items-center gap-3 text-yellow-500">
          <i class="pi pi-folder"></i>
          <span>Projects</span>
        </div>
      </th>
      <th class="px-6 py-3 text-left font-normal text-orange-500">Actions</th>
    </tr>
    </thead>
  </table>
</template>
