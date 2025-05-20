<template>
  <section class="relative mt-20">
    <div
      class="relative bg-black max-w-7xl mx-auto py-10 px-5 md:px-15 rounded-[20px] z-10"
    >
      <!-- Newsletter Section -->
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="flex flex-col md:flex-row w-full">
          <h2 class="text-white text-5xl text-center font-black md:text-left">
            STAY UP TO DATE ABOUT OUR LATEST OFFERS
          </h2>
        </div>
        <div class="flex flex-col items-center md:items-end gap-4 w-full my-5">
          <div class="relative w-9/10 flex justify-center md:justify-end">
            <input
              type="email"
              placeholder="Enter your email address"
              class="bg-white text-black px-15 py-2 w-full rounded-4xl md:w-[350px]"
            />
            <box-icon
              name="envelope"
              color="black"
              class="absolute left-3 top-1/2 transform -translate-y-1/2 opacity-40"
            ></box-icon>
          </div>

          <button
            class="bg-white text-black px-4 py-2 rounded-4xl md:w-[350px] w-9/10 hover:bg-gray-200 transition-colors"
          >
            Subscribe to our Newsletter
          </button>
        </div>
      </div>
    </div>
    <!-- Footer Links -->
    <div
      class="absolute top-85 md:top-25 left-0 w-full h-full bg-[#F0F0F0] z-0 grid grid-cols-1 md:grid-cols-5 gap-8 text-black p-10 min-h-[1050px] md:min-h-[400px] items-end"
    >
      <!-- Brand Column -->
      <div class="flex flex-col gap-4">
        <div class="text-2xl md:text-[32px] mr-auto sm:mr-0 font-black">
          SHOP.CO
        </div>
        <p class="text-gray-700">
          We have clothes that suits your style and which you’re proud to wear.
          From women to men.
        </p>
        <div class="flex gap-4">
          <a href="#" class="hover:opacity-80">
            <box-icon type="logo" background="white"  name="facebook" color="black"></box-icon>
          </a>
          <a href="#" class="hover:opacity-80">
            <box-icon type="logo" background="white" name="instagram" color="black"></box-icon>
          </a>
          <a href="#" class="hover:opacity-80">
            <box-icon type="logo" background="white" name="twitter" color="black"></box-icon>
          </a>
        </div>
      </div>

      <!-- Company Column -->
      <div class="flex flex-col gap-3">
        <h3 class="text-xl font-bold mb-2">Company</h3>
        <a href="#" class="text-gray-700 hover:text-black transition-colors"
          >About</a
        >
        <a href="#" class="text-gray-700 hover:text-black transition-colors"
          >Features</a
        >
        <a href="#" class="text-gray-700 hover:text-black transition-colors"
          >Works</a
        >
        <a href="#" class="text-gray-700 hover:text-black transition-colors"
          >Career</a
        >
      </div>

      <!-- Help Column -->
      <div class="flex flex-col gap-3">
        <h3 class="text-xl font-bold mb-2">Help</h3>
        <a href="#" class="text-gray-700 hover:text-black transition-colors"
          >Customer Support</a
        >
        <a href="#" class="text-gray-700 hover:text-black transition-colors"
          >Delivery Details</a
        >
        <a href="#" class="text-gray-700 hover:text-black transition-colors"
          >Terms & Conditions</a
        >
        <a href="#" class="text-gray-700 hover:text-black transition-colors"
          >Privacy Policy</a
        >
      </div>

      <!-- FAQ Column -->
      <div class="flex flex-col gap-3">
        <h3 class="text-xl font-bold mb-2">FAQ</h3>
        <a href="#" class="text-gray-700 hover:text-black transition-colors"
          >Account</a
        >
        <a href="#" class="text-gray-700 hover:text-black transition-colors"
          >Manage Deliveries</a
        >
        <a href="#" class="text-gray-700 hover:text-black transition-colors"
          >Orders</a
        >
        <a href="#" class="text-gray-700 hover:text-black transition-colors"
          >Payments</a
        >
      </div>

      <!-- Resources Column -->
      <div class="flex flex-col gap-3">
        <h3 class="text-xl font-bold mb-2">Resources</h3>
        <a href="#" class="text-gray-700 hover:text-black transition-colors"
          >Free eBooks</a
        >
        <a href="#" class="text-gray-700 hover:text-black transition-colors"
          >Development Tutorial</a
        >
        <a href="#" class="text-gray-700 hover:text-black transition-colors"
          >How to - Blog</a
        >
        <a href="#" class="text-gray-700 hover:text-black transition-colors"
          >Youtube Playlist</a
        >
      </div>
    </div>
  </section>
</template>
