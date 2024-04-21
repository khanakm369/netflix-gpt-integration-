// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDG-e8n0YPqh96Isz44iAOPNFR5les5gtY",
  authDomain: "netflixgptintegration.firebaseapp.com",
  projectId: "netflixgptintegration",
  storageBucket: "netflixgptintegration.appspot.com",
  messagingSenderId: "142882694682",
  appId: "1:142882694682:web:7b78613d1a2e9276d693a3",
  measurementId: "G-3WSQ3DYCT5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();