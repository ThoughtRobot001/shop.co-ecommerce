<template>
  <section class="my-30">
    <div
      class="bg-[#F0F0F0] p-10 rounded-4xl max-w-7xl mx-auto flex flex-col items-center justify-center"
    >
      <h2 class="text-5xl font-black text-center">Browse By Dress Style</h2>
      <div class="grid grid-cols-1 md:grid-cols-5 gap-8 mt-10">
        <router-link
          to="/products"
          class="relative overflow-hidden rounded-[20px] cursor-pointer group md:col-span-2"
        >
          <img
            src="../assets/images/image_fx_(14).jpg"
            alt="Casual Fashion"
            class="w-full h-[300px] object-cover transition duration-300 group-hover:scale-110"
          />
          <div
            class="bg-white-200 absolute top-8 left-8 p-3 rounded-full shadow-lg"
          >
            <h1 class="text-black text-4xl font-black">Casual</h1>
          </div>
        </router-link>
        <router-link
          to="/products"
          class="relative overflow-hidden rounded-[20px] cursor-pointer group md:col-span-3"
        >
          <img
            src="../assets/images/image_fx_(16).jpg"
            alt="Business Fashion"
            class="w-full h-[300px] object-cover transition duration-300 group-hover:scale-110"
          />
          <div
            class="bg-white-200 absolute top-8 left-8 p-3 rounded-full shadow-lg"
          >
            <h1 class="text-black text-4xl font-black">Formal</h1>
          </div>
        </router-link>
        <router-link
          to="/products"
          class="relative overflow-hidden rounded-[20px] cursor-pointer group md:col-span-3"
        >
          <img
            src="../assets/images/image_fx_(18).jpg"
            alt="Party clothes"
            class="w-full h-[300px] object-cover transition duration-300 group-hover:scale-110"
          />
          <div
            class="bg-white-200 absolute top-8 left-8 p-3 rounded-full shadow-lg"
          >
            <h1 class="text-black text-4xl font-black">Party</h1>
          </div>
        </router-link>
        <router-link
          to="/products"
          class="relative overflow-hidden rounded-[20px] cursor-pointer group md:col-span-2"
        >
          <img
            src="../assets/images/image_fx_(19).jpg"
            alt="Gym wears"
            class="w-full h-[300px] object-cover transition duration-300 group-hover:scale-110"
          />
          <div
            class="bg-white-200 absolute top-8 left-8 p-3 rounded-full shadow-lg"
          >
            <h1 class="text-black text-4xl font-black">Gym</h1>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>
