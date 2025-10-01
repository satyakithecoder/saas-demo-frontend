<script setup>
import {ref} from "vue";
import {supabase} from "@/lib/supabase.js";
import countries from "@/lib/countries.json";

const showPopup = ref(false);
const selectedCountry = ref(countries[0]);
const openDropdown = ref(false);
const name = ref('')
const email = ref('')
const phone = ref('')

function selectCountry(country) {
  selectedCountry.value = country;
  openDropdown.value = false;
}

async function addClient(){
  const { error } = await supabase.from('Clients List').insert({
    Names: name.value,
    Emails: email.value,
    Phone: `${selectedCountry.value.dial_code} (${phone.value})`,
  })
  showPopup.value = false;
  if(error) console.log(error);
}

</script>

<template>
  <h1 class="mt-9 mx-12 text-[45px] font-semibold flex flex-row gap-4 items-center">
    <i class="pi pi-user text-[35px]"></i>
    <span>Client Management</span>
  </h1>

  <teleport to="body">
    <div
        v-if="showPopup"
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div class="bg-white p-6 rounded-xl shadow-lg w-96">
        <h2 class="text-2xl font-semibold mb-4">Add New Client</h2>

        <div class="space-y-4">
          <input
              class="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter name"
              v-model="name"
              type="text"
          />

          <input
              class="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter email"
              v-model="email"
              type="email"
          />

          <div class="flex relative">
            <div
                class="flex items-center border rounded-l-lg p-2 bg-white cursor-pointer"
                @click="openDropdown = !openDropdown"
            >
              <img
                  :alt="selectedCountry.name"
                  :src="`https://flagcdn.com/16x12/${selectedCountry.code.toLowerCase()}.png`"
                  class="mr-2"
              />
              <span>{{ selectedCountry.dial_code }}</span>
              <i class="pi pi-chevron-down ml-2"></i>
            </div>

            <input
                class="flex-1 border-t border-b border-r rounded-r-lg p-2 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter phone number"
                v-model="phone"
                type="tel"
            />
            <ul
                v-if="openDropdown"
                class="absolute top-full left-0 w-full max-h-40 overflow-auto bg-white border rounded-lg mt-1 z-10"
            >
              <li
                  v-for="country in countries"
                  :key="country.code"
                  class="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                  @click="selectCountry(country)"
              >
                <img
                    :alt="country.name"
                    :src="`https://flagcdn.com/16x12/${country.code.toLowerCase()}.png`"
                    class="mr-2"
                />
                <span>{{ country.dial_code }} - {{ country.name }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="flex justify-end space-x-3 mt-6">
          <button
              class="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
              @click="showPopup = false"
          >
            Cancel
          </button>

          <button
              class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              @click="addClient"
          >
            Add Client
          </button>
        </div>
      </div>
    </div>
  </teleport>

  <button
      class="mt-6 mx-12 p-2 border-2 border-gray-300 rounded-lg text-md font-medium"
      @click="showPopup = true"
  >
    + Add Client
  </button>
  <table class="mx-12 mt-8 w-[95%] shadow-md border-separate border-spacing-0 rounded-t-lg overflow-hidden">
    <thead class="bg-gray-200">
    <tr>
      <th class="px-6 py-3 text-left rounded-tl-lg">Names</th>
      <th class="px-6 py-3 text-left">
        <div class="flex items-center gap-2"><i class="pi pi-envelope"></i> <span>Emails</span></div>
      </th>
      <th class="px-6 py-3 text-left">
        <div class="flex items-center gap-2"><i class="pi pi-phone"></i> <span>Phone Numbers</span></div>
      </th>
      <th class="px-6 py-3 text-left rounded-tr-lg">Actions</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td class="px-6 py-3">
        <div class="flex items-center gap-2">
          <p class="bg-orange-400 rounded-full p-1 w-[22%] text-center text-white">A</p>
          <span>Alice</span>
        </div>
      </td>
      <td class="px-6 py-3">alice@email.com</td>
      <td class="px-6 py-3">+91 12345 67890</td>
      <td class="px-6 py-3">
        <div class="flex items-center gap-4">
          <button class="text-blue-600 hover:text-blue-800">
            <i class="pi pi-user-edit"></i>
          </button>
          <button class="text-red-600 hover:text-red-800">
            <i class="pi pi-trash"></i>
          </button>
        </div>
      </td>
    </tr>
    </tbody>
  </table>
</template>