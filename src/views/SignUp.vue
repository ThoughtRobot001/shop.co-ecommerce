<template>
  <div class="max-w-7xl mx-auto px-4 py-8">
    <div class="max-w-md mx-auto bg-[#f0f0f0] rounded-lg p-8">
      <h1 class="text-3xl text-center font-bold mb-2">Create an account</h1>
      <p class="text-gray-500 text-center mb-8">
        Create an account to continue shopping and get access to exclusive
        offers
      </p>
      <form @submit.prevent="handleSignUp" class="space-y-6">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700"
            >Name</label
          >
          <input
            type="text"
            id="name"
            v-model="name"
            class="bg-white mt-1 py-2 px-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Name"
          />
        </div>
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
          Sign Up
        </button>
        <h2 class="text-center text-gray-500">OR</h2>
        <div class="flex flex-row items-center justify-center gap-2">
          <button
            type="button"
            class="bg-black text-white flex items-center justify-center gap-2 py-2 px-4 rounded-full hover:bg-gray-800 transition-colors"
            @click="handleGoogleSignUp"
          >
            <box-icon type="logo" name="google" color="white"></box-icon>
            <span>Google</span>
          </button>

          <button
            type="button"
            class="bg-black text-white flex items-center justify-center gap-2 py-2 px-4 rounded-full hover:bg-gray-800 transition-colors"
            @click="handleAppleSignUp"
          >
            <box-icon type="logo" name="apple" color="white"></box-icon>
            <span>Apple</span>
          </button>

          <button
            type="button"
            class="bg-black text-white flex items-center justify-center gap-2 py-2 px-4 rounded-full hover:bg-gray-800 transition-colors"
            @click="handleFacebookSignUp"
          >
            <box-icon type="logo" name="facebook" color="white"></box-icon>
            <span>Facebook</span>
          </button>
        </div>

        <p class="text-gray-500 text-center">
          Already have an account?
          <a href="/userlogin" class="text-blue-500">Login</a>
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
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { toast } from "vue3-toastify";

const name = ref("");
const email = ref("");
const password = ref("");
const isAdmin = ref(true);
const router = useRouter();

const handleSignUp = async () => {
  try {
    if (!name.value || !email.value || !password.value) {
      toast.error("Please fill in all fields");
      return;
    }

    if (password.value.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );

    // Update user profile with name
    if (userCredential.user) {
      await updateProfile(userCredential.user, {
        displayName: name.value,
      });
      console.log("Profile updated with name:", name.value);
    }

    router.push("/");
    toast.success("Sign up successful");
  } catch (error) {
    toast.error(error.message);
    console.error(error);
  }
};

const handleGoogleSignUp = async () => {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    router.push("/");
    toast.success("Sign up successful");
  } catch (error) {
    toast.error(error.message);
    console.error(error);
  }
};

const handleAppleSignUp = () => {
  toast.info("Apple sign up coming soon!");
};

const handleFacebookSignUp = () => {
  toast.info("Facebook sign up coming soon!");
};
</script>
