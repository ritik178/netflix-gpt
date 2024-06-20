// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcaShtTxO7HYagSHeMS-B04Dnqyfxq4SM",
  authDomain: "netflixgpt-8cf63.firebaseapp.com",
  projectId: "netflixgpt-8cf63",
  storageBucket: "netflixgpt-8cf63.appspot.com",
  messagingSenderId: "830683054850",
  appId: "1:830683054850:web:f11a802d73b304eaaa781b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();