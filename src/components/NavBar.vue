<template>
  <nav class="shadow-md py-5 bg-white sticky top-0 z-50">
    <div class="px-4 lg:px-24">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <!-- Logo -->
        <div
          class="text-2xl md:text-[32px] mr-auto sm:mr-0 font-black order-2 md:order-none hover:text-gray-600 transition-colors duration-200 cursor-pointer"
        >
          <router-link to="/">SHOP.CO</router-link>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden order-1 md:order-none mr-2 sm:mr-0">
          <button
            class="flex items-center hover:opacity-70 transition-opacity duration-200"
            @click="toggleMobileMenu"
          >
            <box-icon
              :name="isMobileMenuOpen ? 'x' : 'menu'"
              color="black"
              class="font-black"
            ></box-icon>
          </button>
        </div>

        <!-- Navigation links -->
        <ul class="hidden md:flex space-x-4 text-black-700 text-base">
          <li
            class="flex items-center hover:text-gray-600 transition-colors duration-200"
          >
            <router-link to="/" class="index hover:text-black"
              >Shop</router-link
            >
            <box-icon name="chevron-down"></box-icon>
          </li>
          <li>
            <router-link
              to="/OnSale"
              class="hover:text-black transition-colors duration-200 text-gray-500"
            >
              On Sale</router-link
            >
          </li>
          <li>
            <router-link
              to="/NewArrivals"
              class="hover:text-black transition-colors duration-200 text-gray-500"
              >New Arrivals</router-link
            >
          </li>
          <li>
            <router-link
              to="/Brands"
              class="hover:text-black transition-colors duration-200 text-gray-500"
              >Brands</router-link
            >
          </li>
        </ul>

        <!-- Search and User Actions -->
        <div class="flex items-center gap-4 order-3 md:order-none">
          <!-- Search Bar -->
          <div class="relative hidden lg:block max-w-[500px] xl:w-[500px]">
            <input
              v-model="searchStore.query"
              class="search-bar rounded-full py-2 md:py-3 pl-12 pr-4 w-full bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 transition-colors duration-200"
              type="text"
              placeholder="Search for products..."
            />
            <box-icon
              name="search"
              color="black"
              class="absolute left-3 top-1/2 transform -translate-y-1/2 opacity-40"
            ></box-icon>
          </div>

          <!-- Mobile Search Icon -->
          <button
            @click="toggleSearch"
            class="lg:hidden cursor-pointer flex items-center hover:opacity-70 transition-opacity duration-200"
          >
            <box-icon name="search" color="black"></box-icon>
          </button>

          <!-- Mobile Search Input -->
          <div
            v-if="isSearchOpen"
            class="fixed top-0 left-0 w-full h-full bg-white z-50 transform transition-transform duration-300"
            :class="isSearchOpen ? 'translate-y-0' : '-translate-y-full'"
          >
            <div class="p-4 flex items-center gap-4">
              <button @click="toggleSearch" class="hover:opacity-70">
                <box-icon name="x" color="black"></box-icon>
              </button>
              <div class="relative flex-grow">
                <input
                  v-model="searchStore.query"
                  class="search-bar rounded-full py-3 pl-12 pr-4 w-full bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 transition-colors duration-200"
                  type="text"
                  placeholder="Search for products..."
                  autofocus
                />
                <box-icon
                  name="search"
                  color="black"
                  class="absolute left-3 top-1/2 transform -translate-y-1/2 opacity-40"
                ></box-icon>
              </div>
            </div>
          </div>

          <!-- User actions -->
          <div class="flex items-center space-x-4">
            <router-link to="/cart">
              <button
                class="relative flex items-center hover:opacity-70 transition-opacity duration-200"
              >
                <box-icon name="cart" class="text-2xl"></box-icon>
                <span
                  v-if="cartStore.cartItemsCount > 0"
                  class="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                >
                  {{ cartStore.cartItemsCount }}
                </span>
              </button>
            </router-link>

            <button
              @click="handleUserLoginClick"
              class="relative flex items-center hover:opacity-70 transition-opacity duration-200"
            >
              <box-icon name="user-circle" class="text-2xl"></box-icon>
              <span
                v-if="user"
                class="absolute -bottom-[3px] -right-[3px] bg-green-500 rounded-full w-[13px] h-[13px] flex items-center justify-center"
              >
                <box-icon
                  class="absolute transform -translate-x-(-1/2) -translate-y-2/5 z-100"
                  name="check"
                  size="xs"
                  color="white"
                ></box-icon>
              </span>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu -->
      <div
        ref="menuRef"
        class="fixed top-0 left-0 w-full h-full md:hidden transform transition-all duration-300"
        :class="isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'"
      >
        <!-- Blurred background overlay -->
        <div
          class="absolute inset-0 bg-black/30 backdrop-blur-sm"
          @click="toggleMobileMenu"
        ></div>

        <!-- Menu content -->
        <div
          class="relative bg-white h-full w-4/5 max-w-sm shadow-lg transform transition-transform duration-300"
          :class="isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'"
        >
          <!-- Close button -->
          <button
            @click="toggleMobileMenu"
            class="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <box-icon name="x" color="black" class="w-6 h-6"></box-icon>
          </button>

          <div class="pt-20 px-4">
            <ul class="flex flex-col space-y-4">
              <li
                class="flex items-center justify-between py-2 hover:text-gray-600 transition-colors duration-200"
              >
                <router-link to="/" class="text-lg font-medium hover:text-black"
                  >Shop</router-link
                >
                <box-icon name="chevron-down"></box-icon>
              </li>
              <li class="py-2">
                <router-link
                  to="/OnSale"
                  class="text-lg font-medium hover:text-black transition-colors duration-200"
                  >On Sale</router-link
                >
              </li>
              <li class="py-2">
                <router-link
                  to="/NewArrivals"
                  class="text-lg font-medium hover:text-black transition-colors duration-200"
                  >New Arrivals</router-link
                >
              </li>
              <li class="py-2">
                <router-link
                  to="/Brands"
                  class="text-lg font-medium hover:text-black transition-colors duration-200"
                  >Brands</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import { useCartStore } from "../stores/cart";
import { useRouter } from "vue-router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useSearchStore } from "../stores/searchStore";

const isMobileMenuOpen = ref(false);
const menuRef = ref(null);
const cartStore = useCartStore();
const isSearchOpen = ref(false);
const router = useRouter();
const user = ref(null);
const searchStore = useSearchStore();

// Watch for changes in the search query
watch(
  () => searchStore.query,
  (newQuery) => {
    if (newQuery) {
      router.push("/products");
    }
  }
);

onAuthStateChanged(auth, (currentUser) => {
  user.value = currentUser;
});

const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value;
  // Prevent body scrolling when search is open
  document.body.style.overflow = isSearchOpen.value ? "hidden" : "";
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  // Prevent body scrolling when menu is open
  document.body.style.overflow = isMobileMenuOpen.value ? "hidden" : "";
};

const handleClickOutside = (event) => {
  // Check if the click target is not the menu toggle button
  const isMenuButton =
    event.target.closest("[data-menu-button]") ||
    event.target.closest("button");
  if (isMenuButton) return;

  if (
    isMobileMenuOpen.value &&
    menuRef.value &&
    !menuRef.value.contains(event.target)
  ) {
    isMobileMenuOpen.value = false;
    document.body.style.overflow = "";
  }
};

const handleUserLoginClick = () => {
  if (user.value) {
    router.push("/profile");
  } else {
    router.push("/userlogin");
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside, true);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside, true);
});
</script>
