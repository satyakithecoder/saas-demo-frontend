<script setup>
</script>

<template>
  <div class="flex flex-row items-center justify-center h-full w-full">
    <nav class="w-80 px-5 py-7 flex flex-col border-r-2 border-gray-300 h-full">
      <div
          class="flex items-center w-full border-[3px] border-gray-400 rounded-lg
           bg-white focus-within:border-slate-900 transition-colors mb-2">
      <span class="px-3 text-gray-400">
      <i class="pi pi-search"></i>
    </span>
        <input
            type="text"
            placeholder="Search..."
            class="w-full py-2 pr-3 bg-transparent text-gray-700
             placeholder-gray-400 focus:outline-none" />
      </div>
      <div class="w-full border rounded-lg flex flex-col items-center p-2
            transition-all duration-300 ease-in-out transform
            hover:scale-[1.03] hover:shadow-lg hover:-translate-y-1 hover:bg-blue-50 hover:border-blue-300">
        <div class="w-full h-auto flex flex-row items-center space-x-3">
          <p class="text-md font-semibold rounded-full bg-blue-500 p-2 text-white w-10 text-center
              transition-transform duration-300 group-hover:rotate-6">
            B
          </p>
          <p class="text-center font-semibold text-sm text-gray-600">
            Brooklyn Harper [Cl-20457]
          </p>
          <span class="w-3 h-3 bg-green-600 rounded-full transition-transform duration-300 hover:scale-125"></span>
        </div>
        <div class="w-full text-sm font-normal overflow-hidden text-justify p-4 text-slate-700
              transition-colors duration-300 hover:text-blue-700">
          Hey there! I wanted to reach out and see how the project is coming along.
        </div>
      </div>
    </nav>
    <main class="flex-1 flex flex-col h-full bg-gray-50">
      <div class="w-full border-b-2 border-gray-300 bg-white px-6 py-4 flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <p class="text-md font-semibold rounded-full bg-blue-500 p-2 text-white w-10 h-10 flex items-center justify-center">
            B
          </p>
          <div class="flex flex-col">
            <p class="font-semibold text-gray-800">Brooklyn Harper</p>
            <p class="text-xs text-gray-500">Cl-20457</p>
          </div>
          <span class="w-2 h-2 bg-green-600 rounded-full"></span>
        </div>
        <button class="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
          Clear Chat
        </button>
      </div>

      <div class="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        <div class="flex items-start space-x-3">
          <div class="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
            B
          </div>
          <div class="flex flex-col max-w-md">
            <div class="bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-sm">
              <p class="text-sm text-gray-700">Hey there! I wanted to reach out and see how the project is coming along.</p>
            </div>
            <span class="text-xs text-gray-400 mt-1 ml-2">10:30 AM</span>
          </div>
        </div>

        <div class="flex items-start space-x-3 justify-end">
          <div class="flex flex-col max-w-md items-end">
            <div class="bg-blue-500 rounded-lg px-4 py-3 shadow-sm">
              <p class="text-sm text-white">Hi Brooklyn! The project is going well. We're on track to meet the deadline.</p>
            </div>
            <span class="text-xs text-gray-400 mt-1 mr-2">10:32 AM</span>
          </div>
        </div>

        <div class="flex items-start space-x-3">
          <div class="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
            B
          </div>
          <div class="flex flex-col max-w-md">
            <div class="bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-sm">
              <p class="text-sm text-gray-700">That's great to hear! Let me know if you need any help.</p>
            </div>
            <span class="text-xs text-gray-400 mt-1 ml-2">10:35 AM</span>
          </div>
        </div>
      </div>

      <div class="border-t-2 border-gray-300 bg-white px-6 py-4">
        <div class="flex items-center space-x-3">
          <button class="text-gray-400 hover:text-gray-600 transition-colors">
            <i class="pi pi-paperclip text-xl"></i>
          </button>
          <div class="flex-1 flex items-center border-2 border-gray-300 rounded-lg bg-gray-50 focus-within:border-blue-500 transition-colors">
            <input
                type="text"
                placeholder="Type a message..."
                class="flex-1 py-3 px-4 bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none"
            />
            <button class="text-gray-400 hover:text-gray-600 transition-colors px-3">
              <i class="pi pi-smile text-xl"></i>
            </button>
          </div>
          <button class="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-5 py-3 font-medium transition-colors">
            Send
          </button>
        </div>
      </div>
    </main>
  </div>
</template>