// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDwGbTfRWQu4Pdfnx4-mln1rajS9Rk60XE",
  authDomain: "chitchat-a9a21.firebaseapp.com",
  projectId: "chitchat-a9a21",
  storageBucket: "chitchat-a9a21.appspot.com",
  messagingSenderId: "704211428773",
  appId: "1:704211428773:web:0a8fcb94981473b056744c",
  measurementId: "G-4LSP967RLC"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()