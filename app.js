import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, provider } from './firebase.js';
// import Swal from 'https://cdn.jsdelivr.net/npm/sweetalert2@11.14.4/dist/sweetalert2.all.min.js';
// import Swal from 'https://cdn.jsdelivr.net/npm/sweetalert2@11.14.4/dist/sweetalert2.all.min.js';




// ids section start 
const signUpButton = document.getElementById('signUpButton');
const submitSignUp = document.getElementById('submitSignUp');
const signInButton = document.getElementById('signInButton');
const signInForm = document.getElementById('submitSignIn');
const signUpForm = document.getElementById('signup'); // div signUP button to navigate to sign In 
const signIndiv = document.getElementById('signIn'); // div signIn button to navigate back to sign up
const loginWithGoogle = document.getElementById("loginWithGoogle")
// ids section end



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



// factionallity start 

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

loginWithGoogle.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("working");
    const auth = getAuth();
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });






})







