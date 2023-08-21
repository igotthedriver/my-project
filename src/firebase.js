// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app'
import "firebase/compat/auth";
import "firebase/compat/firestore";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRCTPCwLhrwIZtqQbFuK1MWMKizbBeS0U",
  authDomain: "my-project-c7ff4.firebaseapp.com",
  projectId: "my-project-c7ff4",
  storageBucket: "my-project-c7ff4.appspot.com",
  messagingSenderId: "543343405931",
  appId: "1:543343405931:web:ced76d144d5a1d4c037a2e",
  measurementId: "G-EMPX7GKB0Z"
};

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)

export default firebase
