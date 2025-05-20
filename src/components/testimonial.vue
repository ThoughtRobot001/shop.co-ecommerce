<template>
  <div class="w-full px-4 my-20">
    <swiper-container
      :style="{
        '--swiper-navigation-color': '#000',
        '--swiper-navigation-size': '30px',
        '--swiper-pagination-color': '#000',
      }"
      class="h-[225px]"
      :slides-per-view="1"
      :space-between="30"
      :centered-slides="true"
      :initial-slide="1"
      :loop="true"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :breakpoints="{
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }"
    >
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
          <p class="text-gray-700 text-center mb-4 flex-grow">
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
          <p class="text-gray-700 text-center mb-4 flex-grow">
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
          <p class="text-gray-700 text-center mb-4 flex-grow">
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
          <p class="text-gray-700 text-center mb-4 flex-grow">
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
          <p class="text-gray-700 text-center mb-4 flex-grow">
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
          <p class="text-gray-700 text-center mb-4 flex-grow">
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
          <p class="text-gray-700 text-center mb-4 flex-grow">
            "The variety of styles is impressive. From casual to formal wear,
            they have it all. The size guide is spot on too!"
          </p>
          <p class="font-semibold mb-4">James Wilson</p>
        </div>
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<script setup>
// The register() is already imported and called in main.js
</script>
