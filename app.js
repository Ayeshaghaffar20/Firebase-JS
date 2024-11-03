import { getAuth, createUserWithEmailAndPassword, } from './firebase.js';
// import Swal from 'https://cdn.jsdelivr.net/npm/sweetalert2@11.14.4/dist/sweetalert2.all.min.js';
// import Swal from 'https://cdn.jsdelivr.net/npm/sweetalert2@11.14.4/dist/sweetalert2.all.min.js';





const signUpButton = document.getElementById('signUpButton');
const submitSignUp = document.getElementById('submitSignUp');
const signInButton = document.getElementById('signInButton');
const signInForm = document.getElementById('submitSignIn');
const signUpForm = document.getElementById('signup');
const signIndiv = document.getElementById('signIn');
signUpButton.addEventListener('click', function () {
    // console.log('signUpButton');
    // Swal.fire("Account Created Successfully");

    signIndiv.style.display = "none";
    signUpForm.style.display = "block";
})
signInButton.addEventListener('click', function () {
    console.log('signInButton');
    signIndiv.style.display = "block";
    signUpForm.style.display = "none";
})
// export function showMessages(message) {
//     Swal.fire({
//         title: "Notification",
//         text: message,
//         icon: "success",
//         timer: 5000,
//         showConfirmButton: false
//     });
// }

let fName = document.getElementById('fName');
let lName = document.getElementById('lName');
let rEmail = document.getElementById('rEmail');
let rPassword = document.getElementById('rPassword');

export function showMessage(message, divId) {
    let signUpMessage = document.getElementById('signUpMessage')
    signUpMessage.style.display = "block"
    signUpMessage.innerHTML = message
    signUpMessage.style.opacity = 1
    setTimeout(function () {
        signUpMessage.style.opacity = 0
    }, 5000)

}





submitSignUp.addEventListener('click', (e) => {
    e.preventDefault()
    // console.log(e);

    if (rEmail.value.trim() && rPassword.value.trim()) {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, rEmail.value, rPassword.value)
            .then((userCredential) => {
                // Signed up
                const user = userCredential.user;
                // Swal.fire({
                //     title: "Sweet!",
                //     text: "Modal with a custom image.",
                //     imageUrl: "https://unsplash.it/400/200",
                //     imageWidth: 400,
                //     imageHeight: 200,
                //     imageAlt: "Custom image"
                // });
                rEmail.value = ""
                rPassword.value = ""


                console.log(user);
                signUpForm.style.display = "none";
                signIndiv.style.display = "block";
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







