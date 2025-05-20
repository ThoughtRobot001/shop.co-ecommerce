<template>
  <div>
    <Loader :loading="isLoading" />
    <HomeHero />
    <FeaturedProducts />
    <CategoryGrid />
    <CallToAction />
    <Testimonial />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Loader from "../components/Loader.vue";
import HomeHero from "../components/HomeHero.vue";
import FeaturedProducts from "../components/FeaturedProducts.vue";
import CategoryGrid from "../components/CategoryGrid.vue";
// import CallToAction from "../components/CallToAction.vue";
import Testimonial from "../components/testimonial.vue";

const isLoading = ref(true);

onMounted(async () => {
  try {
    // Your existing data fetching logic here
    isLoading.value = true;
    // ... your data fetching code ...
  } catch (error) {
    console.error("Error loading home page data:", error);
    toast.error("Failed to load home page data");
  } finally {
    isLoading.value = false;
  }
});
</script>
