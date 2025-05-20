<template>
  <section class="my-30">
    <div
      class="bg-[#F0F0F0] p-10 rounded-4xl max-w-7xl mx-auto flex flex-col items-center justify-center"
    >
      <h2 class="text-5xl font-black text-center">Browse By Dress Style</h2>
      <div class="grid grid-cols-1 md:grid-cols-5 gap-8 mt-10">
        <div
          class="relative overflow-hidden rounded-[20px] cursor-pointer group md:col-span-2"
        >
          <img
            src="../assets/images/casual.png"
            alt="Men's Fashion"
            class="w-full h-[300px] object-cover transition duration-300 group-hover:scale-110"
          />
          <div class="absolute top-8 left-8 text-black text-4xl font-black">
            Casual
          </div>
        </div>
        <div
          class="relative overflow-hidden rounded-[20px] cursor-pointer group md:col-span-3"
        >
          <img
            src="../assets/images/formal.png"
            alt="Women's Fashion"
            class="w-full h-[300px] object-cover transition duration-300 group-hover:scale-110"
          />
          <div class="absolute top-8 left-8 text-black text-4xl font-black">
            Formal
          </div>
        </div>
        <div
          class="relative overflow-hidden rounded-[20px] cursor-pointer group md:col-span-3"
        >
          <img
            src="../assets/images/party.png"
            alt="Accessories"
            class="w-full h-[300px] object-cover transition duration-300 group-hover:scale-110"
          />
          <div class="absolute top-8 left-8 text-black text-4xl font-black">
            Party
          </div>
        </div>
        <div
          class="relative overflow-hidden rounded-[20px] cursor-pointer group md:col-span-2"
        >
          <img
            src="../assets/images/gym.png"
            alt="Footwear"
            class="w-full h-[300px] object-cover transition duration-300 group-hover:scale-110"
          />
          <div class="absolute top-8 left-8 text-black text-4xl font-black">
            Gym
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
