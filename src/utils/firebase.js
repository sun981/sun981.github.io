// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from 'firebase/database'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDoU9wn4JYzCtcJSsq_klyQIvI4MxOPsjI",
  authDomain: "wep-app-crud.firebaseapp.com",
  projectId: "wep-app-crud",
  storageBucket: "wep-app-crud.appspot.com",
  messagingSenderId: "592832490913",
  appId: "1:592832490913:web:883de0e4949b4dee676fe0",
  measurementId: "G-96YRDT4RND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)
