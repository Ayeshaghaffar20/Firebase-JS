import { getAuth, getFirestore, db, collection, addDoc, getDoc, doc, onAuthStateChanged } from './firebase.js';




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

const auth = getAuth();
// const db = getFirestore(app);


onAuthStateChanged(auth, (user) => {
    const loginId = localStorage.getItem("loginId");
    if (loginId) {
        const docRef = doc(db, "user", loginId);
        getDoc(docRef)
            .then((docSnap) => {
                if (docSnap.exists()) {
                    const userData = docSnap.data();
                    document.getElementById("fName").innerHTML = userData.firstName
                    document.getElementById("lName").innerHTML = userData.lastNmae
                    document.getElementById("rEmail").innerHTML = userData.email
                    document.getElementById("UserPhone").innerHTML = userData.userPhone
                    document.getElementById("userAddress").innerHTML = userData.userAddress
                }
                else {
                    // docSnap.data() will be undefined in this case
                    console.log("No such document!");
                }
            })
            .catch((error) => {
                console.log("error getting document");


            })
    }
    else {
        console.log("user id not found in local storage");

    }
})


// let userEmail = document.getElementById('userEmail');

// // userEmail.innerHTML = localStorage.getItem('loginEmail')





