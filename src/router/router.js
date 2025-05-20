import { createRouter, createWebHistory } from "vue-router";

import AdminLayout from "../AdminLayout.vue";
import PublicLayout from "../PublicLayout.vue";

import Home from "../views/Home.vue";
import Products from "../views/Products.vue";
import UserLogin from "../views/UserLogin.vue";
import OnSale from "../views/OnSale.vue";
import NewArrivals from "../views/NewArrivals.vue";
import Brands from "../views/Brands.vue";
import ProductPage from "../views/ProductPage.vue";
import Cart from "../views/Cart.vue";
import SignUp from "../views/SignUp.vue";
import Profile from "../views/profile.vue";
import AdminDashboard from "../admin/AdminDashboard.vue";
import Admin from "../admin/Admin.vue";
import AddProduct from "../admin/AddProduct.vue";

const routes = [
  {
    path: "/",
    component: PublicLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
      {
        path: "/products",
        name: "Products",
        component: Products,
      },
      {
        path: "/userlogin",
        name: "UserLogin",
        component: UserLogin,
      },
      {
        path: "/onsale",
        name: "OnSale",
        component: OnSale,
      },
      {
        path: "/newarrivals",
        name: "NewArrivals",
        component: NewArrivals,
      },
      {
        path: "/brands",
        name: "Brands",
        component: Brands,
      },
      {
        path: "/productpage/:id",
        name: "ProductPage",
        component: ProductPage,
      },
      {
        path: "/cart",
        name: "Cart",
        component: Cart,
      },
      {
        path: "/userlogin",
        name: "UserLogin",
        component: UserLogin,
      },
      {
        path: "/signup",
        name: "SignUp",
        component: SignUp,
      },
      {
        path: "/profile",
        name: "Profile",
        component: Profile,
      },
    ],
  },

  {
    path: "/admin",
    component: AdminLayout,
    children: [
      {
        path: "/admindashboard",
        name: "AdminDashboard",
        component: AdminDashboard,
      },
      {
        path: "/admin",
        name: "Admin",
        component: Admin,
      },
      {
        path: "/addproduct",
        name: "AddProduct",
        component: AddProduct,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
