<template>
  <div class="font-sans bg-white text-black">
    <Loader :loading="loadingStore.isLoading" />
    <RouterView />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Loader from "./components/Loader.vue";
import { RouterView } from "vue-router";
import { useLoadingStore } from "./stores/loading";

const loadingStore = useLoadingStore();

onMounted(() => {
  // Initial loading state
  loadingStore.startLoading();
  setTimeout(() => {
    loadingStore.stopLoading();
  }, 1000);
});
</script>
