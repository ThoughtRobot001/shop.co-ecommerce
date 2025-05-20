<template>
  <div
    v-if="loading"
    class="fixed inset-0 bg-white bg-opacity-80 z-50 flex items-center justify-center"
  >
    <div class="flex flex-col items-center">
      <div
        class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-black"
      ></div>
      <p class="mt-4 text-lg font-medium text-gray-700">Loading...</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  loading: {
    type: Boolean,
    required: true,
  },
});
</script>
