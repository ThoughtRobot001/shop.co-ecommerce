<template>
  <div class="max-w-7xl mx-auto px-4 py-8">
    <div class="max-w-md mx-auto bg-[#f0f0f0] rounded-lg p-8">
      <h1 class="text-3xl text-center font-bold mb-2">Welcome Back</h1>
      <p class="text-gray-500 text-center mb-8">
        Login to your account to continue shopping
      </p>
      <form @submit.prevent="handleLogin" class="space-y-8">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Email</label
          >
          <input
            type="email"
            id="email"
            v-model="email"
            class="bg-white mt-1 py-2 px-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Email"
          />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700"
            >Password</label
          >
          <input
            type="password"
            id="password"
            v-model="password"
            class="bg-white mt-1 py-2 px-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Password"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
        >
          Login
        </button>
        <h2 class="text-center text-gray-500">OR</h2>
        <div class="flex flex-row items-center justify-center gap-2">
          <button
            type="button"
            class="bg-black text-white flex items-center justify-center gap-2 py-2 px-4 rounded-full hover:bg-gray-800 transition-colors"
            @click="handleGoogleLogin"
          >
            <box-icon type="logo" name="google" color="white"></box-icon>
            <span>Google</span>
          </button>

          <button
            type="button"
            class="bg-black text-white flex items-center justify-center gap-2 py-2 px-4 rounded-full hover:bg-gray-800 transition-colors"
            @click="handleAppleLogin"
          >
            <box-icon type="logo" name="apple" color="white"></box-icon>
            <span>Apple</span>
          </button>

          <button
            type="button"
            class="bg-black text-white flex items-center justify-center gap-2 py-2 px-4 rounded-full hover:bg-gray-800 transition-colors"
            @click="handleFacebookLogin"
          >
            <box-icon type="logo" name="facebook" color="white"></box-icon>
            <span>Facebook</span>
          </button>
        </div>

        <p class="text-gray-500 text-center">
          Don't have an account?
          <a href="/signup" class="text-blue-500">Sign up</a>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { auth } from "../firebase/firebase";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { toast } from "vue3-toastify";

const email = ref("");
const password = ref("");
const router = useRouter();

const handleLogin = async () => {
  try {
    if (!email.value || !password.value) {
      toast.error("Please fill in all fields");
      return;
    }

    await signInWithEmailAndPassword(auth, email.value, password.value);
    router.push("/");
    toast.success("Login successful");
  } catch (error) {
    toast.error("Invalid email or password");
    console.error(error);
  }
};

const handleGoogleLogin = async () => {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    router.push("/");
    toast.success("Login successful");
  } catch (error) {
    toast.error("Account not found");
    console.error(error);
  }
};

const handleAppleLogin = () => {
  toast.info("Apple login coming soon!");
};

const handleFacebookLogin = () => {
  toast.info("Facebook login coming soon!");
};
</script>
