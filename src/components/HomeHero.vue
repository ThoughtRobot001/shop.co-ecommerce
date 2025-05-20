<template>
  <section class="bg-[#F2F0F1] pt-10 lg:py-0">
    <div
      class="max-w-7xl mx-auto flex flex-col md:flex-row items-center h-full w-full"
    >
      <!-- Left Content -->
      <div
        class="w-full md:w-1/2 flex flex-col gap-5 justify-center items-center md:items-start mb-8 md:mb-0"
      >
        <div class="flex flex-col gap-5">
          <h1
            class="text-4xl md:text-5xl lg:text-6xl font-black text-center md:text-left w-full md:max-w-[545px]"
          >
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p
            class="text-gray-500 text-sm md:text-base text-center md:text-left w-full md:max-w-[545px]"
          >
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
        </div>
        <router-link to="/products">
          <button
            class="bg-black text-white py-4 md:py-3 px-6 rounded-full w-full md:w-[210px] hover:bg-gray-800 transition-colors btn-animate"
          >
            Shop Now
          </button>
        </router-link>
        <div
          class="flex flex-wrap sm:flex-nowrap gap-6 sm:gap-8 lg:gap-8 mt-6 w-full justify-center lg:justify-start"
        >
          <div class="flex flex-col items-center sm:items-start">
            <span class="text-2xl sm:text-3xl lg:text-[40px] font-semibold"
              >200+</span
            >
            <span class="text-gray-500 text-xs sm:text-sm lg:text-base"
              >International Brands</span
            >
          </div>
          <div class="flex flex-col items-center sm:items-start">
            <span class="text-2xl sm:text-3xl lg:text-[40px] font-semibold"
              >2,000+</span
            >
            <span class="text-gray-500 text-xs sm:text-sm lg:text-base"
              >High Quality Products</span
            >
          </div>
          <div class="flex flex-col items-center sm:items-start">
            <span class="text-2xl sm:text-3xl lg:text-[40px] font-semibold"
              >30,000+</span
            >
            <span class="text-gray-500 text-xs sm:text-sm lg:text-base"
              >Happy Customers</span
            >
          </div>
        </div>
      </div>

      <!-- Right Image -->
      <div class="w-full md:w-1/2">
        <img
          class="w-full h-full object-cover rounded-lg"
          src="../assets/images/heroImage.png"
          alt="Hero Image"
          loading="eager"
        />
      </div>
    </div>
    <div class="flex items-center justify-center">
      <img src="../assets/images/brands.png" alt="brands" />
    </div>
  </section>
</template>
