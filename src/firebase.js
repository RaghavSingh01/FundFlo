
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAafmV0D3w-Z8pASP6AeQ-4czwEJdsTA-M",
  authDomain: "fundflo-8c935.firebaseapp.com",
  projectId: "fundflo-8c935",
  storageBucket: "fundflo-8c935.firebasestorage.app",
  messagingSenderId: "14913520688",
  appId: "1:14913520688:web:b0555e23ef64689493d9f5",
  measurementId: "G-MP8K0E7MDL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
