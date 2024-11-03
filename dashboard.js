// import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from './firebase.js';



// const auth = getAuth();
// let userProfile = document.getElementById("userProfile")
// let fName = document.getElementById('fName');
// let lName = document.getElementById('lName');
// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         const uid = user.uid;

//         userProfile.innerHTML = `  <img id="userProfilePic" src="assets/image/profile.png" alt="">
//         <p id="userName">${fName.value} ${lName.value}</p>
//         <p id="userEmailId">${user.email}</p>
//         <div class="btn">
//             <button class="homePageBtn" id="VerifyBtn">Verify your email</button>
//             <button class="homePageBtn" id="logOutBtn">Logout</button>
//             <button class="homePageBtn" id="upDateProfiletBtn">Update your profile</button>`
//     } else {
//         // User is signed out
//         // ...
//     }
// });


let userEmail = document.getElementById('userEmail');

userEmail.innerHTML = localStorage.getItem('loginEmail')





