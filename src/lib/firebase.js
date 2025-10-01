// src/lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// ✅ Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAT_ZsNxN5_xHWr-ctlR8owGJ6KH1UdJXY",
  authDomain: "islamic-match.firebaseapp.com",
  projectId: "islamic-match",
  storageBucket: "islamic-match.appspot.com",
  messagingSenderId: "814055313535",
  appId: "1:814055313535:web:d890bb6a88220fccb0af4a",
  measurementId: "G-M5JVNN7FRY",
};

// ✅ Agar app pehle se bana hai to use karo warna naya banao
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// ✅ Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
