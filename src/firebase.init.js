// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw6bHFURoEdlRTqBuFSF0ibSIW2RhO_AI",
  authDomain: "fakeshop-b5cf6.firebaseapp.com",
  projectId: "fakeshop-b5cf6",
  storageBucket: "fakeshop-b5cf6.appspot.com",
  messagingSenderId: "718086469922",
  appId: "1:718086469922:web:9656943c612815ed2dcd7b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
