// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  storageBucket: "gabe-summarist.firebasestorage.app",
  messagingSenderId: "181737401783",
  appId: "1:181737401783:web:7a58a37e804acb86580c32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);