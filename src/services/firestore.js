// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBndbgxN48303gGzX1-daMInD0XoNcc9nc",
  authDomain: "michaelkors-21d3.firebaseapp.com",
  projectId: "michaelkors-21d3",
  storageBucket: "michaelkors-21d3.appspot.com",
  messagingSenderId: "63563631462",
  appId: "1:63563631462:web:429cae5631fc4d0acc16a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

function getProducts(){
    
}

export default firestore