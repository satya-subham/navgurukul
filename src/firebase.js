// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBP2WSMXpB5-g-AooPdm_4xStdXnPSsTX8",
  authDomain: "react-authentication-e9ff7.firebaseapp.com",
  projectId: "react-authentication-e9ff7",
  storageBucket: "react-authentication-e9ff7.appspot.com",
  messagingSenderId: "774394600205",
  appId: "1:774394600205:web:c4994e0435427aaf9cee44",
  measurementId: "G-BMQHKL4E1H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);