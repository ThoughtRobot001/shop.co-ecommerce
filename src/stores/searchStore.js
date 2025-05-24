import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useSearchStore = defineStore("search", () => {
  const query = ref("");
  const products = ref([]);

  // Temporary filter states (before applying)
  const tempCategory = ref("");
  const tempMinPrice = ref(0);
  const tempMaxPrice = ref(1000);
  const tempSelectedColor = ref("");
  const tempSelectedSize = ref("");
  const tempSortBy = ref("");

  // Active filter states (after applying)
  const activeCategory = ref("");
  const activeMinPrice = ref(0);
  const activeMaxPrice = ref(1000);
  const activeSelectedColor = ref("");
  const activeSelectedSize = ref("");
  const activeSortBy = ref("");

  const filteredProducts = computed(() => {
    let result = [...products.value];

    // Search by query
    if (query.value) {
      const searchQuery = query.value.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery) ||
          product.description?.toLowerCase().includes(searchQuery)
      );
    }

    // Filter by category
    if (activeCategory.value) {
      console.log("Filtering by category:", {
        activeCategory: activeCategory.value,
        productsBeforeFilter: result.length,
        productCategories: result.map((p) => p.category),
      });

      result = result.filter((product) => {
        const productCategory = product.category?.toLowerCase() || "";
        const activeCategoryLower = activeCategory.value.toLowerCase();
        const matches = productCategory === activeCategoryLower;

        console.log("Product category check:", {
          productId: product.id,
          productCategory,
          activeCategory: activeCategoryLower,
          matches,
        });

        return matches;
      });

      console.log("Products after category filter:", result.length);
    }

    // Filter by price range
    result = result.filter(
      (product) =>
        product.price >= activeMinPrice.value &&
        product.price <= activeMaxPrice.value
    );

    // Filter by color
    if (activeSelectedColor.value) {
      result = result.filter((product) =>
        product.colors?.includes(activeSelectedColor.value)
      );
    }

    // Filter by size
    if (activeSelectedSize.value) {
      result = result.filter((product) =>
        product.sizes?.includes(activeSelectedSize.value)
      );
    }

    // Sort products
    switch (activeSortBy.value) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }

    return result;
  });

  const applyFilters = () => {
    // Copy temporary values to active values
    activeCategory.value = tempCategory.value;
    activeMinPrice.value = tempMinPrice.value;
    activeMaxPrice.value = tempMaxPrice.value;
    activeSelectedColor.value = tempSelectedColor.value;
    activeSelectedSize.value = tempSelectedSize.value;
    activeSortBy.value = tempSortBy.value;

    // Debug log
    console.log("Applying filters:", {
      tempCategory: tempCategory.value,
      activeCategory: activeCategory.value,
      products: products.value.map((p) => ({ id: p.id, category: p.category })),
    });
  };

  const resetFilters = () => {
    query.value = "";
    tempCategory.value = "";
    tempMinPrice.value = 0;
    tempMaxPrice.value = 1000;
    tempSelectedColor.value = "";
    tempSelectedSize.value = "";
    tempSortBy.value = "";
    activeCategory.value = "";
    activeMinPrice.value = 0;
    activeMaxPrice.value = 1000;
    activeSelectedColor.value = "";
    activeSelectedSize.value = "";
    activeSortBy.value = "";
  };

  return {
    query,
    products,
    filteredProducts,
    // Temporary states
    tempCategory,
    tempMinPrice,
    tempMaxPrice,
    tempSelectedColor,
    tempSelectedSize,
    tempSortBy,
    // Active states
    activeCategory,
    activeMinPrice,
    activeMaxPrice,
    activeSelectedColor,
    activeSelectedSize,
    activeSortBy,
    // Actions
    applyFilters,
    resetFilters,
  };
});
