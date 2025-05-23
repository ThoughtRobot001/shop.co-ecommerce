<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside class="w-64 bg-white shadow-md hidden md:block">
      <div class="p-6 font-bold text-xl text-blue-600">Admin Panel</div>
      <nav class="mt-6">
        <ul>
          <li
            class="px-6 py-2 hover:bg-blue-100 cursor-pointer"
            :class="{ 'bg-blue-200': activeSection === 'Dashboard' }"
            @click="activeSection = 'Dashboard'"
          >
            Dashboard
          </li>
          <li
            class="px-6 py-2 hover:bg-blue-100 cursor-pointer"
            :class="{ 'bg-blue-200': activeSection === 'users' }"
            @click="activeSection = 'users'"
          >
            Users
          </li>
          <li
            class="px-6 py-2 hover:bg-blue-100 cursor-pointer"
            :class="{ 'bg-blue-200': activeSection === 'Add Product' }"
            @click="activeSection = 'Add Product'"
          >
            Product Management
          </li>
          <li
            class="px-6 py-2 hover:bg-blue-100 cursor-pointer"
            :class="{ 'bg-blue-200': activeSection === 'settings' }"
            @click="activeSection = 'settings'"
          >
            Settings
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col">
      <header class="bg-white p-4 shadow-md flex justify-between items-center">
        <div class="text-lg font-semibold capitalize">{{ activeSection }}</div>
        <div class="text-sm text-gray-600">Welcome, Admin</div>
      </header>

      <!-- Conditional Views -->
      <main class="p-6 flex-1 overflow-y-auto">
        <Dashboard v-if="activeSection === 'Dashboard'" />
        <UsersView v-else-if="activeSection === 'users'" />
        <AddProduct v-else-if="activeSection === 'Add Product'" />
        <SettingsView v-else-if="activeSection === 'settings'" />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Dashboard from "./Dashboard.vue";
import AddProduct from "./AddProduct.vue";

const activeSection = ref("Dashboard");
</script>
