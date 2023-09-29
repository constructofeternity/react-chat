// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlTy8AQH3j0bKTJ1sEK45nKJiAJvQqlLg",
  authDomain: "react-chat-db0f7.firebaseapp.com",
  projectId: "react-chat-db0f7",
  storageBucket: "react-chat-db0f7.appspot.com",
  messagingSenderId: "310139660467",
  appId: "1:310139660467:web:6a4c5f6639d5113626e8c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);