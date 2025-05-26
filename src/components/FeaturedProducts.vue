<template>
  <section class="max-w-7xl mx-auto min-h-[700px]">
    <div class="my-10 flex flex-col items-center justify-center">
      <h2 class="text-3xl md:text-5xl font-black">New Arrivals</h2>
      <div class="relative w-9/10 mx-auto px-0">
        <swiper
          :modules="[Navigation]"
          :slides-per-view="4"
          :space-between="16"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }"
          :breakpoints="{
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
          }"
          class="w-full mt-10"
        >
          <swiper-slide
            v-for="product in products.slice(0, limit || products.length)"
            :key="product.id"
          >
            <router-link
              :to="'/productpage/' + product.id"
              class="group block border border-gray-200 rounded-lg"
            >
              <div
                class="relative overflow-hiddenh-[250px] lg:h-auto"
              >
                <img
                  :src="product.imgUrl"
                  alt="Product"
                  class="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                <button
                  class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-sm text-white px-6 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 btn-animate"
                >
                  Add to Cart
                </button>
              </div>
              <div class="mb-4">
                <div class="flex flex-col gap-2 items-center">
                  <h3 class="mt-4 md:mt-2 font-semibold">
                    {{
                      screenWidth <= 1024 && product.name.length > 15
                        ? product.name.substring(0, 15) + "..."
                        : product.name
                    }}
                  </h3>
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
          </swiper-slide>
          <div
            class="swiper-button-prev !w-10 !h-10 !bg-black !rounded-full !text-white after:!text-xl"
          ></div>
          <div
            class="swiper-button-next !w-10 !h-10 !bg-black !rounded-full !text-white after:!text-xl"
          ></div>
        </swiper>
      </div>
      <div class="flex justify-center mt-10">
        <router-link to="/products">
          <button
            class="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition btn-animate"
          >
            View All
          </button>
        </router-link>
      </div>
    </div>

    <div class="border-b border-gray-200 w-full max-w-7xl mx-auto"></div>

    <div class="my-10 flex flex-col items-center justify-center">
      <h2 class="text-3xl md:text-5xl font-black">Top Selling</h2>
      <div class="relative w-9/10 mx-auto px-0">
        <swiper
          :modules="[Navigation]"
          :slides-per-view="4"
          :space-between="16"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }"
          :breakpoints="{
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
          }"
          class="w-full mt-10"
        >
          <swiper-slide
            v-for="product in products.slice(-(limit || products.length))"
            :key="product.id"
          >
            <router-link
              :to="'/productpage/' + product.id"
              class="group block border border-gray-200 rounded-lg"
            >
              <div
                class="relative overflow-hidden rounded-lg h-[250px] lg:h-auto"
              >
                <img
                  :src="product.imgUrl"
                  alt="Product"
                  class="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                <button
                  class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-sm text-white px-6 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 btn-animate"
                >
                  Add to Cart
                </button>
              </div>
              <div class="mb-4">
                <div class="flex flex-col gap-2 items-center">
                  <h3 class="mt-4 md:mt-2 font-semibold">
                    {{
                      screenWidth <= 1024 && product.name.length > 15
                        ? product.name.substring(0, 15) + "..."
                        : product.name
                    }}
                  </h3>
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
                    <p class="mt-1 font-bold">
                      ${{ product.price.toFixed(2) }}
                    </p>
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
          </swiper-slide>
          <div
            class="swiper-button-prev !w-10 !h-10 !bg-black !rounded-full !text-white after:!text-xl"
          ></div>
          <div
            class="swiper-button-next !w-10 !h-10 !bg-black !rounded-full !text-white after:!text-xl"
          ></div>
        </swiper>
      </div>
      <div class="flex justify-center mt-10">
        <router-link to="/products">
          <button
            class="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition btn-animate"
          >
            View All
          </button>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useLoadingStore } from "../stores/loading";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const loadingStore = useLoadingStore();
const products = ref([]);
const screenWidth = ref(window.innerWidth);

const handleResize = () => {
  screenWidth.value = window.innerWidth;
};

defineProps({
  limit: Number,
});

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
  } finally {
    loadingStore.stopLoading();
  }
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
  handleResize();
  fetchProducts();
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style>
.swiper-button-next,
.swiper-button-prev {
  color: white !important;
}

.swiper-button-next:after,
.swiper-button-prev:after {
  font-size: 20px !important;
}
</style>
