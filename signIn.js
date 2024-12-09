import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './firebase.js';
import { showMessage } from "./app.js"


const signInForm = document.getElementById('submitSignIn');
const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('signInButton');
const signUpForm = document.getElementById('signup');
const signIndiv = document.getElementById('signIn');


signUpButton.addEventListener('click', function () {
    console.log('signUpButton', "1");
    // Swal.fire("Account Created Successfully");

    signIndiv.style.display = "none";
    signUpForm.style.display = "block";
})
signInButton.addEventListener('click', function () {
    console.log('signInButton', "1");
    signIndiv.style.display = "block";
    signUpForm.style.display = "none";
})

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
                console.log(user);


                localStorage.setItem(`authLogin`, user.uid);
                // showMessage("Login Successfully", "SignInMessage")
                // window.location.href = '/pages/profile.html'
                Swal.fire({
                    title: "success!",
                    text: "You have successfully logged in!",
                    icon: "success",
                    confirmButtonText: "OK"
                })

                    .then(() => {
                        setTimeout(() => {

                            window.location.href = '/pages/profile.html'
                        }, 0);

                    })



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