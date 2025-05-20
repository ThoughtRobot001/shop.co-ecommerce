import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import { createPinia } from "pinia";
import "./style.css";
import "boxicons";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.mount("#app");
