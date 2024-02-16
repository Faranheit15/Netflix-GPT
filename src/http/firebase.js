// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHJvUorOQrCTZaFiQKe_8haKqBQmwaVIA",
  authDomain: "netflixgpt-2a41a.firebaseapp.com",
  projectId: "netflixgpt-2a41a",
  storageBucket: "netflixgpt-2a41a.appspot.com",
  messagingSenderId: "526759664963",
  appId: "1:526759664963:web:0dcc188a85eb014304a3f6",
  measurementId: "G-KCNY6SBJR4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
