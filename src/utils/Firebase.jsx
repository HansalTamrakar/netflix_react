// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDiU2l7t9oXlZoEspZS5deLZvr4MxI6akU",
//   authDomain: "netflixapp-9b1bc.firebaseapp.com",
//   projectId: "netflixapp-9b1bc",
//   storageBucket: "netflixapp-9b1bc.appspot.com",
//   messagingSenderId: "586861069352",
//   appId: "1:586861069352:web:e2f222c331fc07b967a11d",
//   measurementId: "G-1NSLJXXD3P",
// };
const firebaseConfig = {
  apiKey: "AIzaSyBED8UKuDfwRReflN3rGas2fou1D3U7dbI",
  authDomain: "netflix-147df.firebaseapp.com",
  projectId: "netflix-147df",
  storageBucket: "netflix-147df.appspot.com",
  messagingSenderId: "36315369436",
  appId: "1:36315369436:web:6bdc084aaf2ef8f54b0919",
  measurementId: "G-FSS6SHC3E1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
