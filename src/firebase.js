// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFi-VCH5Cb60FQIWsaC-YF5C2VMjtLxDc",
  authDomain: "realtor-clone-react-4b5f0.firebaseapp.com",
  projectId: "realtor-clone-react-4b5f0",
  storageBucket: "realtor-clone-react-4b5f0.appspot.com",
  messagingSenderId: "550711919502",
  appId: "1:550711919502:web:25538da9baf4b7492c5adf",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
