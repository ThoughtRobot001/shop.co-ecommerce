<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8 text-center">
      <!-- Coming Soon Icon -->
      <div class="flex justify-center">
        <box-icon
          name="time"
          size="lg"
          class="text-gray-400"
          style="width: 120px; height: 120px"
        ></box-icon>
      </div>

      <!-- Main Content -->
      <div>
        <h2 class="mt-6 text-4xl font-extrabold text-gray-900">
          Brands Coming Soon
        </h2>
        <p class="mt-2 text-lg text-gray-600">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
      </div>

      <!-- Action Buttons -->
      <div class="mt-8 space-y-4">
        <router-link
          to="/"
          class="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors duration-200"
        >
          <box-icon name="home" class="mr-2"></box-icon>
          Back to Home
        </router-link>

        <button
          @click="goBack"
          class="w-full flex justify-center py-3 px-4 border border-gray-300 rounded-full shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors duration-200"
        >
          <box-icon name="arrow-back" class="mr-2"></box-icon>
          Go Back
        </button>
      </div>

      <!-- Social Links -->
      <div class="mt-8">
        <p class="text-sm text-gray-500">Follow us for updates:</p>
        <div class="mt-4 flex justify-center space-x-4">
          <a
            href="#"
            class="text-gray-600 hover:text-black transition-colors duration-200"
          >
            <box-icon name="facebook" type="logo"></box-icon>
          </a>
          <a
            href="#"
            class="text-gray-600 hover:text-black transition-colors duration-200"
          >
            <box-icon name="twitter" type="logo"></box-icon>
          </a>
          <a
            href="#"
            class="text-gray-600 hover:text-black transition-colors duration-200"
          >
            <box-icon name="instagram" type="logo"></box-icon>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const progress = ref(0);

const goBack = () => {
  router.back();
};

// Animate progress bar
onMounted(() => {
  const interval = setInterval(() => {
    if (progress.value < 100) {
      progress.value += 1;
    } else {
      clearInterval(interval);
    }
  }, 50);
});
</script>

<style scoped></style>
