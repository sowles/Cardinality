// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSwvfXaJpyOpfqO-Q8DhJNTYx11lin12Y",
  authDomain: "cardinality-cards.firebaseapp.com",
  projectId: "cardinality-cards",
  storageBucket: "cardinality-cards.appspot.com",
  messagingSenderId: "878482571281",
  appId: "1:878482571281:web:3b804c7ff3a61d855d31b0",
  measurementId: "G-ZCZ0RDQQ1C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);