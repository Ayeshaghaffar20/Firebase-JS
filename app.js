import { getAuth, createUserWithEmailAndPassword, } from './firebase.js';
// import Swal from 'https://cdn.jsdelivr.net/npm/sweetalert2@11.14.4/dist/sweetalert2.all.min.js';



const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('signInButton');
const signInForm = document.getElementById('submitSignIn');
const signUpForm = document.getElementById('signup');

signUpButton.addEventListener('click', function () {
    console.log('signUpButton');
    // Swal.fire("Account Created Successfully");

    signInForm.style.display = "none";
    signUpForm.style.display = "block";
})
signInButton.addEventListener('click', function () {
    console.log('signInButton');
    signInForm.style.display = "block";
    signUpForm.style.display = "none";
})


let fName = document.getElementById('fName');
let lName = document.getElementById('lName');
let rEmail = document.getElementById('rEmail');
let rPassword = document.getElementById('rPassword');

export function showMessage(message, divId) {
    let signUpMessage = document.getElementById('signUpMessage')
    // signUpMessage.style.display = "block"
    signUpMessage.innerHTML = message
    signUpMessage.style.opacity = 1
    setTimeout(function () {
        signUpMessage.style.opacity = 0
    }, 5000)

}





signUpForm.addEventListener('click', (e) => {
    e.preventDefault()
    // console.log(e);

    if (rEmail.value.trim() && rPassword.value.trim()) {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, rEmail.value, rPassword.value)
            .then((userCredential) => {
                // Signed up
                const user = userCredential.user;

                console.log(user);
                signUpForm.style.display = "none";
                signInForm.style.display = "block";
                showMessage("Account Created Successfully", "signUpMessage")

            })
            .catch((error) => {
                const errorCode = error.code;
                if ("auth/email-already-in-use") {
                    showMessage("Email Address Already Exit !!! ", "signUpMessage")
                }
                // ..
                else {
                    showMessage("Enable to create user", "signUpMessage")
                }
            });
    }
}
);





