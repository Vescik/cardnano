// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdf4RyVCAwR0ZyYY5kiCO8tpQaFkj-xvo",
  authDomain: "cardnano-b068f.firebaseapp.com",
  projectId: "cardnano-b068f",
  storageBucket: "cardnano-b068f.appspot.com",
  messagingSenderId: "964540951191",
  appId: "1:964540951191:web:853cb62d731d471b3297d2",
  measurementId: "G-44CG83ZDRF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export{auth}