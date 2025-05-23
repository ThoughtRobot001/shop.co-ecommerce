<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Main Content -->
    <div class="flex-1 overflow-auto">
      <!-- Dashboard Content -->
      <main class="p-6">
        <!-- Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div class="bg-white rounded-lg shadow p-6">
            <div class="flex items-center">
              <div class="p-3 rounded-full bg-blue-100 text-blue-500">
                <i class="bx bxs-shopping-bag text-2xl"></i>
              </div>
              <div class="ml-4">
                <p class="text-gray-500">Total Sales</p>
                <p class="text-2xl font-semibold">$24,500</p>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow p-6">
            <div class="flex items-center">
              <div class="p-3 rounded-full bg-green-100 text-green-500">
                <i class="bx bxs-cart text-2xl"></i>
              </div>
              <div class="ml-4">
                <p class="text-gray-500">Total Orders</p>
                <p class="text-2xl font-semibold">1,250</p>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow p-6">
            <div class="flex items-center">
              <div class="p-3 rounded-full bg-purple-100 text-purple-500">
                <i class="bx bxs-user text-2xl"></i>
              </div>
              <div class="ml-4">
                <p class="text-gray-500">Total Customers</p>
                <p class="text-2xl font-semibold">850</p>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow p-6">
            <div class="flex items-center">
              <div class="p-3 rounded-full bg-yellow-100 text-yellow-500">
                <i class="bx bxs-star text-2xl"></i>
              </div>
              <div class="ml-4">
                <p class="text-gray-500">Average Rating</p>
                <p class="text-2xl font-semibold">4.8</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Recent Orders -->
        <div class="bg-white rounded-lg shadow">
          <div class="p-6">
            <h2 class="text-xl font-semibold text-gray-800 mb-4">
              Recent Orders
            </h2>
            <div class="overflow-x-auto">
              <table class="min-w-full">
                <thead>
                  <tr class="text-left text-gray-500 border-b">
                    <th class="pb-3">Order ID</th>
                    <th class="pb-3">Customer</th>
                    <th class="pb-3">Product</th>
                    <th class="pb-3">Amount</th>
                    <th class="pb-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="py-4">#ORD-001</td>
                    <td>John Doe</td>
                    <td>Premium Watch</td>
                    <td>$299.99</td>
                    <td>
                      <span
                        class="px-2 py-1 bg-green-100 text-green-600 rounded-full text-sm"
                        >Completed</span
                      >
                    </td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-4">#ORD-002</td>
                    <td>Jane Smith</td>
                    <td>Leather Bag</td>
                    <td>$199.99</td>
                    <td>
                      <span
                        class="px-2 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm"
                        >Pending</span
                      >
                    </td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-4">#ORD-003</td>
                    <td>Mike Johnson</td>
                    <td>Smart Watch</td>
                    <td>$399.99</td>
                    <td>
                      <span
                        class="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                        >Processing</span
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
// Add any necessary imports or logic here
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
