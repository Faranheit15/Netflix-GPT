// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional.
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "netflix-gpt-70623.firebaseapp.com",
  projectId: "netflix-gpt-70623",
  storageBucket: "netflix-gpt-70623.appspot.com",
  messagingSenderId: "591100923561",
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: "G-WT35CGG8TR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
