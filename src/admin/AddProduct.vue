<template>
  <div class="max-w-xl mx-auto space-y-4 px-4">
    <h2 class="text-2xl font-bold mb-4">Add New Product</h2>
    <p class="text-gray-600 mt-1">
      Complete the form below to add a new product to your inventory
    </p>
    <form class="flex flex-col justify-between gap-8">
      <div>
        <label>Name</label>
        <input
          v-model="name"
          placeholder="Product Name"
          class="w-full border p-2 rounded"
          required
        />
      </div>

      <div>
        <label>Price</label>
        <input
          v-model.number="price"
          type="number"
          step="0.01"
          placeholder="Price"
          class="w-full border p-2 rounded"
          required
        />
      </div>

      <!-- <div>
        <label>Available Colors</label>
        <div class="flex flex-wrap gap-4">
          <div
            v-for="option in availableColors"
            :key="option"
            class="flex items-center gap-2"
          >
            <input
              type="text"
              :value="option"
              v-model="colors"
              id="color-{{ option }}"
              class="w-4 h-4"
            />
            <label :for="'color-' + option" class="text-sm">{{ option }}</label>
          </div>
        </div>
      </div> -->

      <div class="w-full flex flex-col gap-2">
        <label for="">Available Colors</label>
        <div class="flex flex-col gap-2 border p-2 rounded">
          <div class="flex gap-2 w-full justify-between">
            <input
              type="text"
              v-model="color"
              placeholder="Colors"
              class="w-9/12 focus:outline-none focus:ring-0"
            />
            <button
              class="bg-black text-white px-4 py-2 rounded w-3/12"
              @click="addColor"
            >
              Add Color
            </button>
          </div>
          <ul class="flex flex-wrap gap-4">
            <li
              title="Click to remove this color"
              class="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300 flex gap-2 items-center"
              v-for="(colors, index) in availableColors"
              :key="index"
            >
              {{ colors }}
              <box-icon
                name="X"
                size="30px"
                color="red"
                class="cursor-pointer hover:bg-white rounded-full transition-all duration-300"
                @click="removeColor(index)"
              ></box-icon>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <label>Available Sizes</label>
        <div class="flex flex-wrap gap-4">
          <div
            v-for="option in availableSizes"
            :key="option"
            class="flex items-center gap-2"
          >
            <input
              type="checkbox"
              :value="option"
              v-model="sizes"
              id="size-{{ option }}"
              class="w-4 h-4"
            />
            <label :for="'size-' + option" class="text-sm">{{ option }}</label>
          </div>
        </div>
      </div>

      <div>
        <label>Product Image</label>
        <div
          @dragover.prevent
          @drop.prevent="handleDrop"
          class="border-2 border-dashed p-4 rounded mb-4 text-center"
        >
          <p class="text-gray-500">Drag and drop images here (max 4)</p>
          <p class="text-sm text-gray-400">or</p>
          <label
            class="inline-block my-2 w-full py-2 rounded bg-black text-white cursor-pointer text-center"
          >
            Click below to Upload Images
            <input
              type="file"
              multiple
              accept="image/*"
              @change="handleImageUpload"
              class="sr-only"
            />
          </label>

          <div class="flex flex-wrap gap-4">
            <div
              v-for="(img, index) in imgPreviews"
              :key="index"
              class="relative w-24 h-24 border rounded overflow-hidden"
            >
              <img :src="img" class="w-full h-full object-cover" />
              <button
                @click="removeImage(index)"
                class="absolute top-1 right-1 bg-red-500 text-white text-xs px-1 rounded"
              >
                ✕
              </button>
            </div>
          </div>

          <p class="mt-4 text-sm text-green-600" v-if="imgFiles.length > 0">
            {{ imgFiles.length }} image(s) ready for upload.
          </p>
        </div>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1"
          >Product Description</label
        >
        <textarea
          v-model="description"
          placeholder="Product Description"
          class="w-full px-4 py-2 h-50 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      <button
        @click.prevent="handleSubmit"
        type="submit"
        :disabled="loading"
        class="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
      >
        {{ loading ? "Uploading..." : "Add Product" }}
      </button>
    </form>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

const name = ref("");
const price = ref("");
const description = ref("");
const sizes = ref([]);
const availableColors = ref([]);
const color = ref("");
const imgFiles = ref([]);
const imgPreviews = ref([]);
const loading = ref(false);

const addColor = () => {
  if (color.value.trim() !== "") {
    availableColors.value.push(color.value);
    color.value = "";
  }
};

const removeColor = (index) => {
  availableColors.value.splice(index, 1);
};

const availableSizes = ["XS", "S", "M", "L", "XL", "XXL"];

const handleImageUpload = (e) => {
  addFiles(e.target.files);
};

const handleDrop = (e) => {
  addFiles(e.dataTransfer.files);
};

const addFiles = (fileList) => {
  const files = Array.from(fileList);

  const total = imgFiles.value.length + files.length;
  if (total > 4) {
    alert("You can upload only 4 images total.");
    return;
  }

  files.forEach((file) => {
    imgFiles.value.push(file);

    const reader = new FileReader();
    reader.onload = (e) => {
      imgPreviews.value.push(e.target.result);
    };
    reader.readAsDataURL(file);
  });
};

const removeImage = (index) => {
  imgFiles.value.splice(index, 1);
  imgPreviews.value.splice(index, 1);
};

const handleSubmit = async () => {
  if (imgFiles.value.length === 0) {
    alert("Please select at least one image");
    return;
  }

  loading.value = true;

  const uploadedUrls = [];

  try {
    for (const file of imgFiles.value) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "unsigned_preset");

      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dtinutbv3/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      uploadedUrls.push(data.secure_url);
    }

    const imgUrl = uploadedUrls[0]; 
    const additionalImgUrl = uploadedUrls.slice(1); 

    
    await addDoc(collection(db, "products"), {
      name: name.value,
      price: parseFloat(price.value),
      description: description.value,
      imgUrl: imgUrl,
      additionalImgUrl: additionalImgUrl,
      sizes: sizes.value,
      colors: availableColors.value,
      createdAt: new Date(),
    });

    alert("Product uploaded successfully!");
    resetForm();
  } catch (error) {
    console.error("Upload failed", error);
    alert("Upload failed. Please try again.");
  } finally {
    loading.value = false;
  }
};

const resetForm = () => {
  name.value = "";
  price.value = "";
  description.value = "";
  sizes.value = [];
  availableColors.value = [];
  color.value = "";
  imgFiles.value = [];
  imgPreviews.value = [];
};
</script>
