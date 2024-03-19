// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
        apiKey: "AIzaSyCZ9c7jiRLyIefRFIq47cqCC8y1X4XURkI",
        authDomain: "react-chat-app-7f3b2.firebaseapp.com",
        projectId: "react-chat-app-7f3b2",
        storageBucket: "react-chat-app-7f3b2.appspot.com",
        messagingSenderId: "138652041147",
        appId: "1:138652041147:web:ccba1480ba427a17ab0e9e",
        measurementId: "G-91FX6CPS1W"
      };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()//authentication
export const storage = getStorage() //file storage
export const db = getFirestore() //database


  