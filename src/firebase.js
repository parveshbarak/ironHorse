import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBEDh38NmknI9jfDaU0I02zkKjkz7AYY0c",
  authDomain: "demoirohorse.firebaseapp.com",
  projectId: "demoirohorse",
  storageBucket: "demoirohorse.appspot.com",
  messagingSenderId: "881101606245",
  appId: "1:881101606245:web:ea8979d1ec5ddd77e0258c",
  measurementId: "G-CPV98VGZWY"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)