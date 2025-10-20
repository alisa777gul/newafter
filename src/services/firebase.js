import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "newafter-51828.firebaseapp.com",
  databaseURL: "https://newafter-51828-default-rtdb.firebaseio.com",
  projectId: "newafter-51828",
  storageBucket: "newafter-51828.firebasestorage.app",
  messagingSenderId: "70966262605",
  appId: "1:70966262605:web:8c5ccf4e4d7db8324dd504",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);
