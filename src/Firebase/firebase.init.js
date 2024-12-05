// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmfmImtI8rjFIW7H7LLy5bMUU4hSxOQEE",
  authDomain: "my-new-assingment-10.firebaseapp.com",
  projectId: "my-new-assingment-10",
  storageBucket: "my-new-assingment-10.firebasestorage.app",
  messagingSenderId: "591787303228",
  appId: "1:591787303228:web:dda6c217225a873ab97e39",
  measurementId: "G-PTV0QDP33Z"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);