// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4E9V3vO_H8es1Hrg5mHtg2JmpIEqzlKA",
  authDomain: "onlygains-4be8f.firebaseapp.com",
  projectId: "onlygains-4be8f",
  storageBucket: "onlygains-4be8f.appspot.com",
  messagingSenderId: "727227269443",
  appId: "1:727227269443:web:7198b9572b3913c65caff6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()