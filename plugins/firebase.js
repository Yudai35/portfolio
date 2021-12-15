// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkxzvG-_MwCrkx4OzJ6h3pYKozhvK7Rfo",
  authDomain: "newself-80137.firebaseapp.com",
  projectId: "newself-80137",
  storageBucket: "newself-80137.appspot.com",
  messagingSenderId: "838221730471",
  appId: "1:838221730471:web:60991c613f934f7959c182",
  measurementId: "G-RY7Y78EGJQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);