import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLaDYPhRmn6Chy0oqWgUk3odRBlh9n6YM",
  authDomain: "shopco-ecommerce-0000.firebaseapp.com",
  projectId: "shopco-ecommerce-0000",
  messagingSenderId: "xxxxxx",
  appId: "xxxxxx",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
