
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import {
    GoogleAuthProvider, signInWithPopup, getAuth, createUserWithEmailAndPassword,
    signInWithEmailAndPassword, signOut, onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore, collection, addDoc, getDoc, doc, getDocs, query, where,setDoc  } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPl_nRR7kTMWHnKXJSXD1w3Wti7h_0h28",
    authDomain: "email-authentication-a9dbf.firebaseapp.com",
    projectId: "email-authentication-a9dbf",
    storageBucket: "email-authentication-a9dbf.firebasestorage.app",
    messagingSenderId: "572361577161",
    appId: "1:572361577161:web:f033f2c2757d837ea7f318"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
console.log(db);



export {
    getFirestore, db, collection, addDoc, getDoc, doc,
    getAuth, provider, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword,
    signInWithEmailAndPassword, onAuthStateChanged, getDocs, query, where, signOut,setDoc 
}