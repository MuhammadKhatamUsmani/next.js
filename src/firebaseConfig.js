// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAT_ZsNxN5_xHWr-ctlR8owGJ6KH1UdJXY",
  authDomain: "islamic-match.firebaseapp.com",
  projectId: "islamic-match",
  storageBucket: "islamic-match.firebasestorage.app",
  messagingSenderId: "814055313535",
  appId: "1:814055313535:web:d890bb6a88220fccb0af4a",
  measurementId: "G-M5JVNN7FRY"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
