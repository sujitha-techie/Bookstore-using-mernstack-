// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBb-oNR6I90M_25nM7HNfxRaqEUIlUJZp0",
  authDomain: "mern-book-store-fb9fe.firebaseapp.com",
  projectId: "mern-book-store-fb9fe",
  storageBucket: "mern-book-store-fb9fe.appspot.com",
  messagingSenderId: "270592011108",
  appId: "1:270592011108:web:8d54c4142b534d6bbae871"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;