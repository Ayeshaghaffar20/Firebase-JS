
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";


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

console.log(app);


export { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged }