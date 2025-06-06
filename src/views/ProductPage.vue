<template>
  <div v-if="product" class="max-w-7xl mx-auto py-4 px-4">
    <Loader :loading="loadingStore.isLoading" />
    <div class="flex flex-row gap-2">
      <router-link
        to="/"
        class="text-normal font-medium mb-8 text-gray-500 cursor-pointer link-animate"
      >
        Home
      </router-link>
      <h4 class="text-normal font-medium mb-4 text-gray-500 cursor-pointer">
        >
      </h4>
      <router-link
        to="/products"
        class="text-normal font-medium mb-4 text-gray-500 cursor-pointer"
      >
        Products
      </router-link>
      <h4 class="text-normal font-medium mb-4 text-gray-500 cursor-pointer">
        >
      </h4>
      <h4 class="text-normal font-medium mb-4 text-gray-500 cursor-pointer">
        {{ product.name }}
      </h4>
    </div>

    <!-- Product Image Gallery -->
    <div
      class="w-10/12 mx-auto my-4 flex flex-col md:flex-row gap-12 items-start justify-center"
    >
      <div class="w-full md:w-5/10 flex flex-col md:flex-row px-4 md:px-0">
        <swiper
          :style="{
            '--swiper-navigation-color': '#000',
            '--swiper-pagination-color': '#000',
            '--swiper-navigation-size': '20px',
            '--swiper-navigation-sides-offset': '0px',
          }"
          :loop="true"
          :spaceBetween="10"
          :navigation="true"
          :freeMode="true"
          :thumbs="{ swiper: thumbsSwiper }"
          :modules="[FreeMode, Navigation, Thumbs]"
          class="w-full md:w-9/12 rounded-lg mb-4 order-1 md:order-2 main-swiper"
        >
          <swiper-slide>
            <img
              :src="product.imgUrl"
              class="w-full object-fit object-center"
            />
          </swiper-slide>

          <swiper-slide
            v-for="(img, index) in product.additionalImgUrl"
            :key="index"
          >
            <img :src="img" class="w-full object-fit object-center" />
          </swiper-slide>
        </swiper>

        <swiper
          @swiper="setThumbsSwiper"
          :loop="true"
          :spaceBetween="5"
          :slidesPerView="4"
          :watchSlidesProgress="true"
          :modules="[FreeMode, Navigation, Thumbs]"
          :direction="screenWidth < 768 ? 'horizontal' : 'vertical'"
          :style="{
            '--swiper-navigation-color': '#000',
            '--swiper-navigation-size': '20px',
            '--swiper-navigation-sides-offset': '0px',
          }"
          :navigation="true"
          class="w-full md:w-2/12 thumbs-swiper md:h-[320px] lg:h-[450px] order-2 md:order-1"
        >
          <swiper-slide class="flex flex-col items-center">
            <img
              :src="product.imgUrl"
              class="w-full h-24 md:h-19 lg:h-24 object-cover rounded-lg cursor-pointer"
            />
          </swiper-slide>

          <swiper-slide
            v-for="(img, index) in product.additionalImgUrl"
            :key="index"
          >
            <img
              :src="img"
              class="w-full h-24 md:h-19 lg:h-24 object-cover rounded-lg cursor-pointer"
            />
          </swiper-slide>
        </swiper>
      </div>

      <!-- Product Details -->
      <div
        class="w-full md:w-5/10 px-4 md:px-0 flex flex-col justify-start gap-6"
      >
        <div>
          <h1 class="text-3xl font-bold mb-2">{{ product.name }}</h1>
          <div class="flex items-center gap-2">
            <p class="text-2xl font-semibold">${{ product.price }}</p>
            <p class="text-xl text-gray-500 line-through">
              ${{ product.price + product.price * 0.2 }}
            </p>
            <span class="text-red-500 bg-red-100 rounded-full px-2 py-1"
              >-20%</span
            >
          </div>
        </div>

        <!-- Color Selection -->
        <div>
          <h3 class="text-lg font-medium mb-3">Color</h3>
          <div class="flex gap-3">
            <!-- If colors are available -->
            <template v-if="product.colors && product.colors.length">
              <button
                v-for="(color, index) in product.colors"
                :key="index"
                class="w-10 h-10 rounded-full border-2 transition-all flex items-center justify-center"
                :class="
                  selectedColor === color
                    ? 'border-black'
                    : 'border-gray-300 hover:border-black'
                "
                @click="selectedColor = color"
              >
                <div
                  class="w-8 h-8 rounded-full"
                  :style="{ backgroundColor: color }"
                ></div>
              </button>
            </template>

            <!-- If no colors, fallback to showing pattern (main image) -->
            <template v-else>
              <button
                class="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-black transition-all flex items-center justify-center overflow-hidden"
                @click="selectedColor = 'pattern'"
              >
                <div
                  class="w-[200px] h-[200px] rounded-full bg-cover bg-center"
                  :style="{ backgroundImage: `url(${product.imgUrl})` }"
                ></div>
              </button>
            </template>
          </div>
        </div>

        <!-- Size Selection -->
        <div>
          <h3 class="text-lg font-medium mb-3">Size</h3>
          <div class="flex gap-3">
            <button
              v-for="(size, index) in product.sizes"
              :key="index"
              class="px-4 py-2 border rounded transition-all"
              :class="
                selectedSize === size
                  ? 'border-black bg-black text-white'
                  : 'border-gray-300 hover:border-black'
              "
              @click="selectedSize = size"
            >
              {{ size }}
            </button>
          </div>
        </div>

        <!-- Add to Cart -->
        <button
          class="bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 btn-animate"
          @click.prevent="AddToCart"
        >
          Add to Cart
        </button>

        <!-- Product Description -->
        <div>
          <h3 class="text-lg font-medium mb-2">Description</h3>
          <p class="text-gray-600">{{ product.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { toast } from "vue3-toastify";
import { useRoute } from "vue-router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useCartStore } from "../stores/cart";
import Loader from "../components/Loader.vue";
import { useLoadingStore } from "../stores/loading";

const route = useRoute();
const product = ref(null);
const thumbsSwiper = ref(null);
const selectedColor = ref(null);
const selectedSize = ref(null);
const cartStore = useCartStore();
const loadingStore = useLoadingStore();
const screenWidth = ref(window.innerWidth);

// Add window resize listener
const handleResize = () => {
  screenWidth.value = window.innerWidth;
};

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

const fetchProduct = async () => {
  try {
    loadingStore.startLoading();
    const docRef = doc(db, "products", route.params.id);
    const docRef2 = doc(db, "new arrivals", route.params.id);
    const docRef3 = doc(db, "top selling", route.params.id);
    const docSnap = await getDoc(docRef);
    const docSnap2 = await getDoc(docRef2);
    const docSnap3 = await getDoc(docRef3);

    if (docSnap.exists()) {
      product.value = {
        id: docSnap.id,
        ...docSnap.data(),
      };
    } else if (docSnap2.exists()) {
      product.value = {
        id: docSnap2.id,
        ...docSnap2.data(),
      };
    } else if (docSnap3.exists()) {
      product.value = {
        id: docSnap3.id,
        ...docSnap3.data(),
      };
    } else {
      console.error("No such product!");
      toast.error("Product not found");
    }
  } catch (error) {
    console.error("Error fetching product:", error);
    toast.error("Failed to load product");
  } finally {
    loadingStore.stopLoading();
  }
};

const AddToCart = () => {
  if (!selectedSize.value) {
    toast("Please select a size", {
      autoClose: 2000,
      type: "error",
    });
    return;
  }

  if (!selectedColor.value) {
    toast("Please select a color", {
      autoClose: 2000,
      type: "error",
    });
    return;
  }

  const productWithSelections = {
    ...product.value,
    selectedSize: selectedSize.value,
    selectedColor: selectedColor.value,
  };

  cartStore.addToCart(productWithSelections);

  toast("Added to Cart!", {
    autoClose: 1000,
  });
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
  // Scroll to top of the page
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  fetchProduct().then(() => {
    // Set default color if available, otherwise set a fallback
    selectedColor.value = product.value?.colors?.[0] || "pattern";
    selectedSize.value = product.value?.sizes?.[0] || null;
  });
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

console.log(selectedColor.value);
</script>

<style scoped>
.main-swiper :deep(.swiper-button-next),
.main-swiper :deep(.swiper-button-prev) {
  background-color: rgba(0, 0, 0, 0.8);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.main-swiper :deep(.swiper-button-next:hover),
.main-swiper :deep(.swiper-button-prev:hover) {
  background-color: rgba(255, 255, 255, 0.95);
}

.thumbs-swiper :deep(.swiper-button-next),
.thumbs-swiper :deep(.swiper-button-prev) {
  background-color: rgba(255, 255, 255, 0.8);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.thumbs-swiper :deep(.swiper-button-next:hover),
.thumbs-swiper :deep(.swiper-button-prev:hover) {
  background-color: rgba(255, 255, 255, 0.95);
}

.thumbs-swiper :deep(.swiper-button-next) {
  transform: rotate(90deg);
}

.thumbs-swiper :deep(.swiper-button-prev) {
  transform: rotate(90deg);
}
</style>
