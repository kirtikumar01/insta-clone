// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "@firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD0rrz_7eCb178mnkmWxVIqXLwL8U6DGY",
  authDomain: "insta-clone-2ee5f.firebaseapp.com",
  projectId: "insta-clone-2ee5f",
  storageBucket: "insta-clone-2ee5f.appspot.com",
  messagingSenderId: "622313594520",
  appId: "1:622313594520:web:7dd9f7aeeb6c21e70cfaed"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app, db, storage};