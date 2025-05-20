<template>
  <div>
    <h1>On Sale</h1>
    <div class="container mx-auto px-4 py-8">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        <div v-for="i in 12" :key="i" class="group">
          <div class="relative overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Product"
              class="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>
