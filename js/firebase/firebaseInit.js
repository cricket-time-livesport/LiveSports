// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDd9HRMo58f8lg3vysPZTsCS18tOr5qNz4",
  authDomain: "cricketlive-e61c8.firebaseapp.com",
  databaseURL: "https://cricketlive-e61c8-default-rtdb.firebaseio.com",
  projectId: "cricketlive-e61c8",
  storageBucket: "cricketlive-e61c8.appspot.com",
  messagingSenderId: "137047518182",
  appId: "1:137047518182:web:8010bb14cea003db7c0427",
  measurementId: "G-5R68V0PNYP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);