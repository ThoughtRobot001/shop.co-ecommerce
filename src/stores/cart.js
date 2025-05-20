import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: JSON.parse(localStorage.getItem("cart")) || [],
  }),
  actions: {
    addToCart(product) {
      // Create a unique identifier for this product variant
      const variantId = `${product.id}-${product.selectedSize}-${product.selectedColor}`;

      const existingItem = this.items.find(
        (item) =>
          item.id === product.id &&
          item.selectedSize === product.selectedSize &&
          item.selectedColor === product.selectedColor
      );

      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({
          id: product.id,
          name: product.name,
          price: product.price,
          imgUrl: product.imgUrl,
          quantity: 1,
          selectedSize: product.selectedSize,
          selectedColor: product.selectedColor,
          variantId: variantId,
        });
      }
      this.saveCart();
    },
    removeFromCart(productId, selectedSize, selectedColor) {
      const index = this.items.findIndex(
        (item) =>
          item.id === productId &&
          item.selectedSize === selectedSize &&
          item.selectedColor === selectedColor
      );
      if (index > -1) {
        this.items.splice(index, 1);
      }
    },
    updateQuantity(productId, quantity, selectedSize, selectedColor) {
      const item = this.items.find(
        (item) =>
          item.id === productId &&
          item.selectedSize === selectedSize &&
          item.selectedColor === selectedColor
      );
      if (item) {
        item.quantity = quantity;
      }
      this.saveCart();
    },
    clearCart() {
      this.items = [];
      this.saveCart();
    },
    saveCart() {
      localStorage.setItem("cart", JSON.stringify(this.items));
    },
  },
  getters: {
    cartTotal: (state) => {
      return state.items.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    },
    cartItemsCount: (state) => {
      return state.items.reduce((count, item) => count + item.quantity, 0);
    },
  },
});
