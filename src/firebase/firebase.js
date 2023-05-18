// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqkaWYKnCIofq9SlVd1rIE83Pzbqgwg5A",
  authDomain: "movieplanner-d1a83.firebaseapp.com",
  projectId: "movieplanner-d1a83",
  storageBucket: "movieplanner-d1a83.appspot.com",
  messagingSenderId: "1092214718032",
  appId: "1:1092214718032:web:4a036473a29953f52f5b55",
  measurementId: "G-NX1B1LSG26",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const InitializeFirebase = () => {
  return app;
};
export default InitializeFirebase;
