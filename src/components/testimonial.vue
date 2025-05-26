<template>
  <div class="w-full px-4 my-20">
    <swiper
      class="h-[225px]"
      :modules="[Navigation, Pagination, Autoplay]"
      :slides-per-view="3"
      :space-between="30"
      :centered-slides="true"
      :initial-slide="1"
      :loop="true"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }"
      :pagination="{
        clickable: true,
        el: '.swiper-pagination',
      }"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
      :breakpoints="{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }"
    >
      <swiper-slide>
        <div
          class="flex flex-col justify-center items-center p-6 bg-gray-50 rounded-lg h-full"
        >
          <div class="flex gap-1 mb-4">
            <box-icon name="star" type="solid" color="#FFD700"></box-icon>
            <box-icon name="star" type="solid" color="#FFD700"></box-icon>
            <box-icon name="star" type="solid" color="#FFD700"></box-icon>
            <box-icon name="star" type="solid" color="#FFD700"></box-icon>
            <box-icon name="star" type="solid" color="#FFD700"></box-icon>
          </div>
          <p
            class="text-sm md:text-base text-gray-700 text-center mb-4 flex-grow w-11/12"
          >
            "Amazing quality clothes! The fit is perfect and the fabric feels
            luxurious. Will definitely be shopping here again!"
          </p>
          <p class="font-semibold mb-4">Sarah Johnson</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="flex flex-col items-center p-6 bg-gray-50 rounded-lg h-full"
        >
          <div class="flex gap-1 mb-4">
            <box-icon name="star" type="solid" color="#FFD700"></box-icon>
            <box-icon name="star" type="solid" color="#FFD700"></box-icon>
            <box-icon name="star" type="solid" color="#FFD700"></box-icon>
            <box-icon name="star" type="solid" color="#FFD700"></box-icon>
            <box-icon name="star-half" type="solid" color="#FFD700"></box-icon>
          </div>
          <p
            class="text-sm md:text-base text-gray-700 text-center mb-4 flex-grow w-11/12"
          >
            "The customer service is outstanding and the shipping was super
            fast. The clothes are trendy and comfortable!"
          </p>
          <p class="font-semibold mb-4">Michael Chen</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="flex flex-col items-center p-6 bg-gray-50 rounded-lg h-full"
        >
          <div class="flex gap-1 mb-4">
            <box-icon name="star" type="solid" color="#FFD700"></box-icon>
            <box-icon name="star" type="solid" color="#FFD700"></box-icon>
            <box-icon name="star" type="solid" color="#FFD700"></box-icon>
            <box-icon name="star" type="solid" color="#FFD700"></box-icon>
            <box-icon name="star" type="regular" color="#FFD700"></box-icon>
          </div>
          <p
            class="text-sm md:text-base text-gray-700 text-center mb-4 flex-grow w-11/12"
          >
            "Great selection of styles and sizes. The prices are reasonable for
            the quality you get. Very satisfied with my purchases!"
          </p>
          <p class="font-semibold mb-4">Emily Rodriguez</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="flex flex-col items-center p-6 bg-gray-50 rounded-lg h-full"
        >
          <div class="flex gap-1 mb-4">
            <box-icon name="star" type="solid" color="#FFD700"></box-icon>
            <box-icon name="star" type="solid" color="#FFD700"></box-icon>
            <box-icon name="star" type="solid" color="#FFD700"></box-icon>
            <box-icon name="star" type="solid" color="#FFD700"></box-icon>
            <box-icon name="star" type="solid" color="#FFD700"></box-icon>
          </div>
          <p
            class="text-sm md:text-base text-gray-700 text-center mb-4 flex-grow w-11/12"
          >
            "The attention to detail in every piece is remarkable. I've received
            so many compliments on my outfits. This is now my go-to fashion
            store!"
          </p>
          <p class="font-semibold mb-4">David Thompson</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="flex flex-col items-center p-6 bg-gray-50 rounded-lg h-full"
        >
          <div class="flex gap-1 mb-4">
            <box-icon name="star" type="solid" color="#FFD700"></box-icon>
            <box-icon name="star" type="solid" color="#FFD700"></box-icon>
            <box-icon name="star" type="solid" color="#FFD700"></box-icon>
            <box-icon name="star" type="solid" color="#FFD700"></box-icon>
            <box-icon name="star-half" type="solid" color="#FFD700"></box-icon>
          </div>
          <p
            class="text-sm md:text-base text-gray-700 text-center mb-4 flex-grow w-11/12"
          >
            "Love the sustainable practices and eco-friendly packaging. The
            clothes are not only stylish but also durable. Worth every penny!"
          </p>
          <p class="font-semibold mb-4">Sofia Martinez</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="flex flex-col items-center p-6 bg-gray-50 rounded-lg h-full"
        >
          <div class="flex gap-1 mb-4">
            <box-icon name="star" type="solid" color="#FFD700"></box-icon>
            <box-icon name="star" type="solid" color="#FFD700"></box-icon>
            <box-icon name="star" type="solid" color="#FFD700"></box-icon>
            <box-icon name="star" type="solid" color="#FFD700"></box-icon>
            <box-icon name="star" type="solid" color="#FFD700"></box-icon>
          </div>
          <p class="text-sm md:text-base text-gray-700 text-center mb-4 flex-grow w-11/12">
            "The variety of styles is impressive. From casual to formal wear,
            they have it all. The size guide is spot on too!"
          </p>
          <p class="font-semibold mb-4">James Wilson</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="flex flex-col items-center p-6 bg-gray-50 rounded-lg h-full"
        >
          <div class="flex gap-1 mb-4">
            <box-icon name="star" type="solid" color="#FFD700"></box-icon>
            <box-icon name="star" type="solid" color="#FFD700"></box-icon>
            <box-icon name="star" type="solid" color="#FFD700"></box-icon>
            <box-icon name="star" type="solid" color="#FFD700"></box-icon>
            <box-icon name="star" type="solid" color="#FFD700"></box-icon>
          </div>
          <p
            class="text-sm md:text-base text-gray-700 text-center mb-4 flex-grow w-11/12"
          >
            "The variety of styles is impressive. From casual to formal wear,
            they have it all. The size guide is spot on too!"
          </p>
          <p class="font-semibold mb-4">James Wilson</p>
        </div>
      </swiper-slide>
      <div
        class="swiper-button-prev !w-10 !h-10 !bg-black !rounded-full !text-white after:!text-xl"
      ></div>
      <div
        class="swiper-button-next !w-10 !h-10 !bg-black !rounded-full !text-white after:!text-xl"
      ></div>
      <div class="swiper-pagination"></div>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// The register() is already imported and called in main.js
</script>

<style>
.swiper-button-next,
.swiper-button-prev {
  color: white !important;
  position:absolute;
  z-index: 10;

}
.swiper-button-next{
  right: 0;
}
.swiper-button-prev{
  left: 0;
}

.swiper-button-next:after,
.swiper-button-prev:after {
  font-size: 20px !important;
}

.swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  background: #d1d5db;
  opacity: 0.5;
}

.swiper-pagination-bullet-active {
  background: #000;
  opacity: 1;
}
</style>
