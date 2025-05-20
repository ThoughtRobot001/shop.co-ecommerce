<template>
  <section class="my-20 min-h-[700px]">
    <div
      class="max-w-7xl mx-auto my-20 flex flex-col items-center justify-center"
    >
      <h2 class="text-5xl font-black">New Arrivals</h2>
      <div
        class="flex items-center mt-10 gap-4 md:justify-center justify-start md:overflow-x-visible overflow-x-scroll scrollbar-hide w-7/8 md:w-full"
      >
        <router-link
          v-for="product in newArrivals"
          :key="product.id"
          :to="'/productpage/' + product.id"
          class="group"
        >
          <div class="relative overflow-hidden rounded-lg">
            <img
              :src="product.imgUrl"
              alt="Product"
              class="w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <button
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
                  <box-icon name="star" type="solid" color="#FFD700"></box-icon>
                  <box-icon name="star" type="solid" color="#FFD700"></box-icon>
                  <box-icon name="star" type="solid" color="#FFD700"></box-icon>
                  <box-icon name="star" type="solid" color="#FFD700"></box-icon>
                  <box-icon name="star" type="solid" color="#FFD700"></box-icon>
                </div>

                <div class="text-gray-500">5/5</div>
              </div>
              <div class="flex items-center gap-2">
                <p class="mt-1 font-bold">${{ product.price }}</p>
                <p class="mt-1 text-gray-500 line-through">
                  ${{ product.price + product.price * 0.2 }}
                </p>
                <span class="text-red-500 bg-red-100 rounded-full px-2 py-1"
                  >-20%</span
                >
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <div class="flex justify-center mt-10">
        <a href="/products">
          <button
            class="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition btn-animate"
          >
            View All
          </button>
        </a>
      </div>
    </div>

    <div class="border-b border-gray-200 w-full max-w-7xl mx-auto"></div>

    <div
      class="max-w-7xl mx-auto my-20 flex flex-col items-center justify-center"
    >
      <h2 class="text-5xl font-black">Top Selling</h2>
      <div
        class="flex items-center mt-10 gap-4 justify-start md:overflow-x-visible overflow-x-scroll scrollbar-hide w-7/8 md:w-full"
      >
        <router-link
          v-for="product in topSelling"
          :key="product.id"
          :to="'/productpage/' + product.id"
          class="group"
        >
          <div class="relative overflow-hidden rounded-lg">
            <img
              :src="product.imgUrl"
              alt="Product"
              class="w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <button
              class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-sm text-white px-6 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Add to Cart
            </button>
          </div>
          <div class="mb-4">
            <div class="flex flex-col gap-2 items-center">
              <h3 class="mt-4 font-semibold">{{ product.name }}</h3>
              <div class="flex gap-2 items-center">
                <div>
                  <box-icon name="star" type="solid" color="#FFD700"></box-icon>
                  <box-icon name="star" type="solid" color="#FFD700"></box-icon>
                  <box-icon name="star" type="solid" color="#FFD700"></box-icon>
                  <box-icon name="star" type="solid" color="#FFD700"></box-icon>
                  <box-icon name="star" type="solid" color="#FFD700"></box-icon>
                </div>

                <div class="text-gray-500">5/5</div>
              </div>
              <div class="flex items-center gap-2">
                <p class="mt-1 font-bold">${{ product.price }}</p>
                <p class="mt-1 text-gray-500 line-through">
                  ${{ product.price + product.price * 0.2 }}
                </p>
                <span class="text-red-500 bg-red-100 rounded-full px-2 py-1"
                  >-20%</span
                >
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <div class="flex justify-center mt-10">
        <a href="/products">
          <button
            class="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition btn-animate"
          >
            View all
          </button>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useLoadingStore } from "../stores/loading";

const loadingStore = useLoadingStore();
const newArrivals = ref([]);
const topSelling = ref([]);

const fetchProducts = async () => {
  try {
    loadingStore.startLoading();
    const querySnapshot = await getDocs(collection(db, "new arrivals"));
    const querySnapshot2 = await getDocs(collection(db, "top selling"));
    newArrivals.value = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    topSelling.value = querySnapshot2.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching products:", error);
  } finally {
    loadingStore.stopLoading();
  }
};

onMounted(() => {
  fetchProducts();
});
</script>
