<template>
  <div class="max-w-7xl mx-auto px-4 py-8">
    <div class="max-w-4xl mx-auto">
      <!-- Welcome Section -->
      <div class="bg-[#f0f0f0] rounded-lg p-8 mb-8">
        <div class="flex items-center gap-4 mb-6">
          <div
            class="w-20 h-20 bg-black rounded-full flex items-center justify-center"
          >
            <box-icon name="user" color="white" size="lg"></box-icon>
          </div>
  <div>
            <h1 class="text-3xl font-bold mb-1">
              Welcome, {{ user?.displayName || "User" }}
            </h1>
            <p class="text-gray-600">{{ user?.email }}</p>
          </div>
        </div>
        <button
          @click="handleSignOut"
          class="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800 transition-colors flex items-center gap-2"
        >
          <box-icon name="log-out" color="white"></box-icon>
          Sign Out
        </button>
      </div>

      <!-- Account Sections -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- My Account -->
        <div
          class="bg-[#f0f0f0] rounded-lg p-6 hover:shadow-lg transition-shadow"
        >
          <div class="flex items-center gap-3 mb-4">
            <box-icon name="user-circle" color="black" size="lg"></box-icon>
            <h2 class="text-xl font-bold">My Account</h2>
          </div>
          <ul class="space-y-3">
            <li
              class="flex items-center gap-2 text-gray-600 hover:text-black transition-colors cursor-pointer"
            >
              <box-icon name="user-pin" color="black"></box-icon>
              Personal Information
            </li>
            <li
              class="flex items-center gap-2 text-gray-600 hover:text-black transition-colors cursor-pointer"
            >
              <box-icon name="lock-alt" color="black"></box-icon>
              Password & Security
            </li>
          </ul>
        </div>

        <!-- My Orders -->
        <div
          class="bg-[#f0f0f0] rounded-lg p-6 hover:shadow-lg transition-shadow"
        >
          <div class="flex items-center gap-3 mb-4">
            <box-icon name="package" color="black" size="lg"></box-icon>
            <h2 class="text-xl font-bold">My Orders</h2>
          </div>
          <ul class="space-y-3">
            <li
              class="flex items-center gap-2 text-gray-600 hover:text-black transition-colors cursor-pointer"
            >
              <box-icon name="time" color="black"></box-icon>
              Order History
            </li>
            <li
              class="flex items-center gap-2 text-gray-600 hover:text-black transition-colors cursor-pointer"
            >
              <box-icon name="truck" color="black"></box-icon>
              Track Orders
            </li>
          </ul>
        </div>

        <!-- My Addresses -->
        <div
          class="bg-[#f0f0f0] rounded-lg p-6 hover:shadow-lg transition-shadow"
        >
          <div class="flex items-center gap-3 mb-4">
            <box-icon name="map" color="black" size="lg"></box-icon>
            <h2 class="text-xl font-bold">My Addresses</h2>
          </div>
          <ul class="space-y-3">
            <li
              class="flex items-center gap-2 text-gray-600 hover:text-black transition-colors cursor-pointer"
            >
              <box-icon name="plus-circle" color="black"></box-icon>
              Add New Address
            </li>
            <li
              class="flex items-center gap-2 text-gray-600 hover:text-black transition-colors cursor-pointer"
            >
              <box-icon name="list-ul" color="black"></box-icon>
              Manage Addresses
            </li>
          </ul>
        </div>

        <!-- My Payment Methods -->
        <div
          class="bg-[#f0f0f0] rounded-lg p-6 hover:shadow-lg transition-shadow"
        >
          <div class="flex items-center gap-3 mb-4">
            <box-icon name="credit-card" color="black" size="lg"></box-icon>
            <h2 class="text-xl font-bold">Payment Methods</h2>
          </div>
          <ul class="space-y-3">
            <li
              class="flex items-center gap-2 text-gray-600 hover:text-black transition-colors cursor-pointer"
            >
              <box-icon name="plus-circle" color="black"></box-icon>
              Add New Card
            </li>
            <li
              class="flex items-center gap-2 text-gray-600 hover:text-black transition-colors cursor-pointer"
            >
              <box-icon name="list-ul" color="black"></box-icon>
              Manage Cards
            </li>
          </ul>
        </div>

        <!-- My Reviews -->
        <div
          class="bg-[#f0f0f0] rounded-lg p-6 hover:shadow-lg transition-shadow"
        >
          <div class="flex items-center gap-3 mb-4">
            <box-icon name="star" color="black" size="lg"></box-icon>
            <h2 class="text-xl font-bold">My Reviews</h2>
          </div>
          <ul class="space-y-3">
            <li
              class="flex items-center gap-2 text-gray-600 hover:text-black transition-colors cursor-pointer"
            >
              <box-icon name="edit" color="black"></box-icon>
              Write a Review
            </li>
            <li
              class="flex items-center gap-2 text-gray-600 hover:text-black transition-colors cursor-pointer"
            >
              <box-icon name="list-ul" color="black"></box-icon>
              My Reviews
            </li>
          </ul>
        </div>

        <!-- My Wishlist -->
        <div
          class="bg-[#f0f0f0] rounded-lg p-6 hover:shadow-lg transition-shadow"
        >
          <div class="flex items-center gap-3 mb-4">
            <box-icon name="heart" color="black" size="lg"></box-icon>
            <h2 class="text-xl font-bold">My Wishlist</h2>
          </div>
          <ul class="space-y-3">
            <li
              class="flex items-center gap-2 text-gray-600 hover:text-black transition-colors cursor-pointer"
            >
              <box-icon name="list-ul" color="black"></box-icon>
              View Wishlist
            </li>
            <li
              class="flex items-center gap-2 text-gray-600 hover:text-black transition-colors cursor-pointer"
            >
              <box-icon name="share" color="black"></box-icon>
              Share Wishlist
            </li>
          </ul>
        </div>
    </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

const user = ref(null);
const router = useRouter();

onAuthStateChanged(auth, (currentUser) => {
  user.value = currentUser;
  console.log("Current user:", currentUser);
  if (currentUser) {
    console.log("User display name:", currentUser.displayName);
  }
});

const handleSignOut = () => {
  signOut(auth);
  router.push("/");
};
</script>
