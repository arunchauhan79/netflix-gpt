// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvw7n2rRNyffi4u-NMPoweAqp6w3roOL4",
  authDomain: "netflixgpt-db1f0.firebaseapp.com",
  projectId: "netflixgpt-db1f0",
  storageBucket: "netflixgpt-db1f0.appspot.com",
  messagingSenderId: "530691815725",
  appId: "1:530691815725:web:0557c2441e19df352e7ba4",
  measurementId: "G-XNTMDQW00J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();