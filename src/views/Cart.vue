<template>
  <section class="max-w-7xl mx-auto py-8 px-4">
    <Loader :loading="loadingStore.isLoading" />
    <h1 class="text-3xl font-bold mb-8">Shopping Cart</h1>

    <div v-if="cartStore.items.length === 0" class="text-center py-12">
      <box-icon name="cart" size="lg" class="mb-4"></box-icon>
      <p class="text-gray-500">Your cart is empty</p>
      <router-link
        to="/products"
        class="text-black underline mt-4 inline-block"
      >
        Continue Shopping
      </router-link>
    </div>

    <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Cart Items -->
      <div class="lg:col-span-2">
        <div class="space-y-4">
          <div
            v-for="item in cartStore.items"
            :key="item.id"
            class="flex items-center gap-4 p-4 border rounded-lg"
          >
            <img
              :src="item.imgUrl"
              :alt="item.name"
              class="w-24 h-24 object-cover rounded-lg"
            />

            <div class="flex-grow">
              <h3 class="font-semibold">{{ item.name }}</h3>
              <p class="text-gray-600">${{ item.price }}</p>
              <div class="flex gap-2 mt-1">
                <span v-if="item.selectedSize" class="text-sm text-gray-600">
                  Size: {{ item.selectedSize }}
                </span>
                <span v-if="item.selectedColor" class="text-sm text-gray-600">
                  Color: {{ item.selectedColor }}
                </span>
              </div>

              <div class="flex items-center gap-4 mt-2">
                <div class="flex items-center border rounded">
                  <button
                    @click="
                      updateQuantity(
                        item.id,
                        item.quantity - 1,
                        item.selectedSize,
                        item.selectedColor
                      )
                    "
                    class="px-3 py-1 hover:bg-gray-100"
                    :disabled="item.quantity <= 1"
                  >
                    -
                  </button>
                  <span class="px-3 py-1">{{ item.quantity }}</span>
                  <button
                    @click="
                      updateQuantity(
                        item.id,
                        item.quantity + 1,
                        item.selectedSize,
                        item.selectedColor
                      )
                    "
                    class="px-3 py-1 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>

                <button
                  @click="
                    removeItem(item.id, item.selectedSize, item.selectedColor)
                  "
                  class="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            </div>

            <div class="text-right">
              <p class="font-semibold">
                ${{ (item.price * item.quantity).toFixed(2) }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Order Summary -->
      <div class="lg:col-span-1">
        <div class="border rounded-lg p-6">
          <h2 class="text-xl font-semibold mb-4">Order Summary</h2>

          <div class="space-y-2 mb-4">
            <div class="flex justify-between">
              <span>Subtotal</span>
              <span>${{ cartStore.cartTotal.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div class="border-t pt-2 mt-2">
              <div class="flex justify-between font-semibold">
                <span>Total</span>
                <span>${{ cartStore.cartTotal.toFixed(2) }}</span>
              </div>
            </div>
          </div>

          <div class="flex justify-between items-center my-4 gap-2">
            <div class="w-3/4 flex items-center gap-2 relative">
              <input
                type="text"
                placeholder="Add a Coupon Code"
                class="border rounded-lg py-3 px-10 w-full"
              />
              <box-icon
                name="tag"
                color="gray"
                class="absolute left-2 top-1/2 -translate-y-1/2 -rotate-[-45deg] text-xl"
              ></box-icon>
            </div>

            <button
              class="w-1/4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors btn-animate"
            >
              Apply
            </button>
          </div>

          <button
            @click="checkout"
            class="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors btn-animate"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useCartStore } from "../stores/cart";
import { toast } from "vue3-toastify";
import { useLoadingStore } from "../stores/loading";

const cartStore = useCartStore();
const loadingStore = useLoadingStore();

const updateQuantity = (productId, quantity, selectedSize, selectedColor) => {
  if (quantity > 0) {
    cartStore.updateQuantity(productId, quantity, selectedSize, selectedColor);
  }
  toast.success("Quantity updated");
};

const removeItem = (productId, selectedSize, selectedColor) => {
  cartStore.removeFromCart(productId, selectedSize, selectedColor);
  toast.success("Item removed from cart");
};

const handleCheckout = async () => {
  try {
    loadingStore.startLoading();
    // Your checkout logic here
  } catch (error) {
    console.error("Error during checkout:", error);
    toast.error("Checkout failed");
  } finally {
    loadingStore.stopLoading();
  }
};

const checkout = () => {
  // Implement checkout logic here
  if (cartStore.items.length === 0) {
    toast.error("Your cart is empty");
    return;
  }
  handleCheckout();
};
</script>
