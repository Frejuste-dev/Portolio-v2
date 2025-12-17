// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdWokb9XY9ywj_uYcjwT3ZbG_zdcBtfRs",
  authDomain: "frejuste-dev-portfolio.firebaseapp.com",
  projectId: "frejuste-dev-portfolio",
  storageBucket: "frejuste-dev-portfolio.firebasestorage.app",
  messagingSenderId: "148959210628",
  appId: "1:148959210628:web:833a1a0beec74f7a7526d1",
  measurementId: "G-KX2SPGEL1F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);