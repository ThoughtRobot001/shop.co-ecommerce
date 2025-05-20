<template>
  <section class="max-w-7xl mx-auto py-8">
    <Loader :loading="isLoading" />
    <div class="flex flex-row gap-2">
      <router-link
        to="/"
        class="text-normal font-medium mb-8 text-gray-500 cursor-pointer link-animate"
      >
        Home
      </router-link>
      <h4 class="text-normal font-medium mb-8 text-gray-500 cursor-pointer">
        >
      </h4>
      <h4 class="text-normal font-medium mb-8 text-gray-500 cursor-pointer">
        Products
      </h4>
    </div>

    <div
      class="flex flex-col md:flex-row items-center md:items-start w-full gap-2"
    >
      <!-- Filters and Sort Section -->
      <div
        class="flex flex-row md:flex-col justify-start gap-4 items-center mb-6 w-full md:w-2/12 border border-gray-200 rounded-[20px] p-4 flex-wrap md:flex-nowrap"
      >
        <div
          class="flex flex-row justify-between items-center w-full cursor-pointer"
          @click="isFilterCollapsed = !isFilterCollapsed"
        >
          <p class="text-[20px] font-medium">Filter</p>
          <box-icon
            :name="isFilterCollapsed ? 'chevron-up' : 'chevron-down'"
            class="text-gray-500"
          ></box-icon>
        </div>

        <div v-show="isFilterCollapsed" class="w-full">
          <div class="flex flex-col gap-4 px-4 py-4 text-sm">
            <label class="flex items-center gap-2">
              <input
                type="checkbox"
                class="form-checkbox h-4 w-4 appearance-none rounded-full border border-black checked:bg-black flex items-center justify-center"
              />
              <span>All Categories</span>
            </label>
            <label class="flex items-center gap-2">
              <input
                type="checkbox"
                class="form-checkbox h-4 w-4 appearance-none rounded-full border border-black checked:bg-black flex items-center justify-center"
              />
              <span>Men</span>
            </label>
            <label class="flex items-center gap-2">
              <input
                type="checkbox"
                class="form-checkbox h-4 w-4 appearance-none rounded-full border border-black checked:bg-black flex items-center justify-center"
              />
              <span>Women</span>
            </label>
            <label class="flex items-center gap-2">
              <input
                type="checkbox"
                class="form-checkbox h-4 w-4 appearance-none rounded-full border border-black checked:bg-black flex items-center justify-center"
              />
              <span>Accessories</span>
            </label>
          </div>
          <div class="w-full px-4 py-2 flex flex-col gap-2">
            <label class="text-sm text-gray-600">Price Range</label>

            <div class="relative h-2 bg-gray-200 rounded">
              <!-- Range highlight -->
              <div
                class="absolute h-2 bg-black rounded"
                :style="{
                  left: `${((minPrice - min) / (max - min)) * 100}%`,
                  width: `${((maxPrice - minPrice) / (max - min)) * 100}%`,
                }"
              ></div>

              <!-- Min Thumb -->
              <input
                type="range"
                :min="min"
                :max="max"
                v-model="minPrice"
                @input="handleMin"
                class="absolute w-full h-2 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black"
              />

              <!-- Max Thumb -->
              <input
                type="range"
                :min="min"
                :max="max"
                v-model="maxPrice"
                @input="handleMax"
                class="absolute w-full h-2 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black"
              />
            </div>

            <div class="flex justify-between text-sm text-gray-600">
              <span>${{ minPrice }}</span>
              <span>${{ maxPrice }}</span>
            </div>
          </div>

          <!-- COLOR FILTER -->
          <div class="flex flex-col gap-4 px-2 py-4 text-sm w-full">
            <h4 class="text-lg text-black font-bold">Color</h4>
            <div class="flex flex-wrap gap-3">
              <label
                v-for="(color, index) in colors"
                :key="index"
                class="relative w-8 h-8 rounded-full cursor-pointer transition-transform hover:scale-110"
                :class="color.class"
                @click.prevent="handleSelect(color.value)"
              >
                <input
                  type="radio"
                  name="color"
                  :value="color.value"
                  :checked="selectedColor === color.value"
                  class="peer sr-only"
                  readonly
                />
                <span
                  class="absolute inset-0 rounded-full outline-2 outline-offset-2 outline-gray-200 peer-checked:outline-black"
                ></span>
              </label>
            </div>
            <p class="text-sm mt-2 text-gray-500">
              Selected: {{ selectedColor || "None" }}
            </p>
          </div>

          <!-- SIZE FILTER -->
          <div class="flex flex-col gap-4 px-2 py-4 text-sm w-full">
            <h4 class="text-lg text-black font-bold">Size</h4>
            <select
              class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
            >
              <option value="">Select Size</option>
              <option value="xs">XS</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
              <option value="xxl">XXL</option>
            </select>
          </div>

          <!-- DRESS STYLE FILTER -->
          <div class="flex flex-col gap-4 px-2 py-4 text-sm w-full">
            <h4 class="text-lg text-black font-bold">Dress Style</h4>
            <select
              class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
            >
              <option value="">Select Style</option>
              <option value="casual">Casual</option>
              <option value="formal">Formal</option>
              <option value="party">Party</option>
              <option value="gym">Gym</option>
            </select>
          </div>

          <!-- APPLY FILTERS BUTTON -->
          <button
            class="bg-black text-white px-4 py-2 rounded-full w-full btn-animate"
          >
            Apply Filters
          </button>
        </div>
      </div>
      <!-- FILTERS END -->

      <!-- PRODUCTS -->
      <div class="w-10/12">
        <div class="w-full flex flex-row justify-end items-end gap-4">
          <h4 class="text-lg text-black font-bold">Sort by</h4>
          <div class="flex flex-row gap-2">
            <button
              class="bg-black text-white px-4 py-2 rounded-full w-full btn-animate"
            >
              Price: Low to High
            </button>
            <button
              class="bg-black text-white px-4 py-2 rounded-full w-full btn-animate"
            >
              Price: High to Low
            </button>
          </div>
        </div>
        <!-- Products Grid -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <!-- Product Card Template -->
          <router-link
            v-for="product in paginatedProducts"
            :key="product.id"
            :to="'/productpage/' + product.id"
            class="group"
          >
            <div class="relative overflow-hidden rounded-lg">
              <img
                :src="product.imgUrl"
                alt="Product"
                class="w-full h-[270px] w-[260px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <button
                @click.prevent="AddToCart(product)"
                class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-sm text-white px-6 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 btn-animate"
              >
                Add to Cart
              </button>
            </div>
            <div class="mb-4">
              <div class="flex flex-col gap-2 items-center">
                <h3 class="mt-4 font-semibold">{{ product.name }}</h3>
                <div class="flex gap-2 items-center">
                  <div>
                    <box-icon
                      name="star"
                      type="solid"
                      color="#FFD700"
                    ></box-icon>
                    <box-icon
                      name="star"
                      type="solid"
                      color="#FFD700"
                    ></box-icon>
                    <box-icon
                      name="star"
                      type="solid"
                      color="#FFD700"
                    ></box-icon>
                    <box-icon
                      name="star"
                      type="solid"
                      color="#FFD700"
                    ></box-icon>
                    <box-icon
                      name="star"
                      type="solid"
                      color="#FFD700"
                    ></box-icon>
                  </div>

                  <div class="text-gray-500">5/5</div>
                </div>
                <div class="flex items-center gap-2">
                  <p class="mt-1 font-bold">${{ product.price.toFixed(2) }}</p>
                  <p class="mt-1 text-gray-500 line-through">
                    ${{ (product.price + product.price * 0.2).toFixed(2) }}
                  </p>
                  <span class="text-red-500 bg-red-100 rounded-full px-2 py-1"
                    >-20%</span
                  >
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <!-- Pagination -->
        <div class="flex justify-center mt-12">
          <div class="flex gap-2">
            <button
              @click="goToPage(currentPage - 1)"
              :disabled="currentPage === 1"
              class="px-4 py-2 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed btn-animate"
            >
              Previous
            </button>

            <button
              v-for="page in totalPages"
              :key="page"
              @click="goToPage(page)"
              :class="[
                'px-4 py-2 border rounded-md btn-animate',
                currentPage === page
                  ? 'bg-black text-white'
                  : 'hover:bg-gray-100',
              ]"
            >
              {{ page }}
            </button>

            <button
              @click="goToPage(currentPage + 1)"
              :disabled="currentPage === totalPages"
              class="px-4 py-2 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed btn-animate"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useCartStore } from "../stores/cart";
import { toast } from "vue3-toastify";
import { useRouter } from "vue-router";
import Loader from "../components/Loader.vue";
import { useLoadingStore } from "../stores/loading";

const cartStore = useCartStore();
const loadingStore = useLoadingStore();
const products = ref([]);
const minPrice = ref(0);
const maxPrice = ref(500);
const min = ref(0);
const max = ref(1000);
const selectedColor = ref("");
const isFilterCollapsed = ref(false);
const router = useRouter();
const currentPage = ref(1);
const itemsPerPage = 8;

const colors = [
  { value: "Black", class: "bg-black" },
  { value: "White", class: "bg-white border border-gray-200" },
  { value: "Gray", class: "bg-gray-300" },
  { value: "Dark Gray", class: "bg-gray-700" },
  { value: "Beige", class: "bg-[#f5f5dc]" },
  { value: "Red", class: "bg-red-500" },
  { value: "Blue", class: "bg-blue-500" },
  { value: "Green", class: "bg-green-500" },
  { value: "Yellow", class: "bg-yellow-400" },
  { value: "Purple", class: "bg-purple-500" },
  { value: "Pink", class: "bg-pink-400" },
  { value: "Orange", class: "bg-orange-500" },
];

function handleSelect(color) {
  selectedColor.value = selectedColor.value === color ? null : color;
}

const handleMin = () => {
  if (minPrice.value > maxPrice.value) {
    minPrice.value = maxPrice.value;
  }
};

const handleMax = () => {
  if (maxPrice.value < minPrice.value) {
    maxPrice.value = minPrice.value;
  }
};

const fetchProducts = async () => {
  try {
    loadingStore.startLoading();
    const querySnapshot = await getDocs(collection(db, "products"));
    products.value = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching products:", error);
    toast.error("Failed to load products");
  } finally {
    loadingStore.stopLoading();
  }
};

const AddToCart = (product) => {
  router.push(`/productpage/${product.id}`);
};

// Computed properties for pagination
const totalPages = computed(() =>
  Math.ceil(products.value.length / itemsPerPage)
);

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return products.value.slice(start, end);
});

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    // Scroll to top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};

onMounted(() => {
  fetchProducts();
});
</script>

<style scoped>
input[type="range"]::-webkit-slider-thumb {
  transition: all 0.2s ease;
}

.pagination-button {
  transition: all 0.2s ease;
}

.pagination-button:hover:not(:disabled) {
  background-color: #f3f4f6;
}
</style>
