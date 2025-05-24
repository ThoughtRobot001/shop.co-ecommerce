<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 text-center">
      <!-- 404 Icon -->
      <div class="flex justify-center">
        <box-icon
          name="error-circle"
          size="lg"
          class="text-gray-400"
          style="width: 120px; height: 120px;"
        ></box-icon>
      </div>

      <!-- Error Message -->
      <div>
        <h2 class="mt-6 text-9xl font-extrabold text-gray-900">404</h2>
        <h3 class="mt-2 text-3xl font-bold text-gray-900">Page Not Found</h3>
        <p class="mt-2 text-sm text-gray-600">
          Oops! The page you're looking for doesn't exist or has been moved.
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

      <!-- Helpful Links -->
      <div class="mt-8">
        <p class="text-sm text-gray-500">You might want to check out:</p>
        <div class="mt-4 flex justify-center space-x-4">
          <router-link
            to="/products"
            class="text-sm text-gray-600 hover:text-black transition-colors duration-200"
          >
            Products
          </router-link>
          <router-link
            to="/brands"
            class="text-sm text-gray-600 hover:text-black transition-colors duration-200"
          >
            Brands
          </router-link>
          <router-link
            to="/onsale"
            class="text-sm text-gray-600 hover:text-black transition-colors duration-200"
          >
            On Sale
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
  router.back();
};
</script> 