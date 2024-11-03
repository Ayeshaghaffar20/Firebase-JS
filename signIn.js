import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './firebase.js';
import { showMessage } from "./app.js"



const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('signInButton');
const signUpForm = document.getElementById('signup');

signUpButton.addEventListener('click', function () {
    console.log('signUpButton');
    // Swal.fire("Account Created Successfully");

    signInForm.style.display = "none";
    signUpForm.style.display = "block";
})
const signInForm = document.getElementById('submitSignIn');
signInForm.addEventListener("click", (e) => {
    e.preventDefault()
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    // console.log(email, password);
    if (email.trim() && password.trim()) {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                // Signed in 
                const user = userCredential.user;

                localStorage.setItem(`${user.email}_loginId`, user.uid);
                showMessage("Login Successfully", "SignInMessage")
                window.location.href = 'dashboard.html'
                // console.log("welcome");


            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
    else {
        console.log("Vlaue should not be empty");

    }



})