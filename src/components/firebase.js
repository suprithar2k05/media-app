// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHWRUx45yMtjrDe2OyuzTBp2NSIV60NqA",
  authDomain: "media-app-54d58.firebaseapp.com",
  projectId: "media-app-54d58",
  storageBucket: "media-app-54d58.firebasestorage.app",
  messagingSenderId: "1047595528849",
  appId: "1:1047595528849:web:d2a3f054dde118f5564530"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;