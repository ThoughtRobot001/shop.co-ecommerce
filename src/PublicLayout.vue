<template>
  <div class="font-sans bg-white text-black">
    <NavBar />
    <RouterView />
    <Footer />
  </div>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import { RouterView } from "vue-router";
</script>
