import { getAuth, getFirestore, db, collection, addDoc, getDoc, doc, onAuthStateChanged, getDocs, query, where, signOut } from './firebase.js';




const auth = getAuth();
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

// const auth = getAuth();
// const db = getFirestore(app);



// import { collection, getDocs } from "firebase/firestore";

// const querySnapshot = await getDocs(collection(db, "users"));
// querySnapshot.forEach((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//     console.log(doc.id, " => ", doc.data());
// });

// const docRef = doc(db, "users", "9nG6fLLUgNHjVVhlFQxZ");
// const docSnap = await getDoc(docRef);

// if (docSnap.exists()) {
//     console.log("Document data:", docSnap.data());
//     document.getElementById("fName").innerHTML = docSnap.data().firstName
//     document.getElementById("lName").innerHTML = docSnap.data().lastName
//     document.getElementById("rEmail").innerHTML = docSnap.data().email
//     document.getElementById("UserPhone").innerHTML = docSnap.data().phone
//     document.getElementById("userAddress").innerHTML = docSnap.data().address
// } else {
//     // docSnap.data() will be undefined in this case
//     console.log("No such document!");
// }
// if (localStorage.getItem("authLogin") !== null) {
//     const authId = localStorage.getItem("authLogin");
//     const q = query(collection(db, "users"), where("authId", "==", authId));

//     const querySnapshot = await getDocs(q);
//     querySnapshot.forEach((doc) => {
//         // doc.data() is never undefined for query doc snapshots
//         console.log(doc.id, " => ", doc.data());
//         document.getElementById("fName").innerHTML = doc.data().firstName
//         document.getElementById("lName").innerHTML = doc.data().lastName
//         document.getElementById("rEmail").innerHTML = doc.data().email
//         document.getElementById("UserPhone").innerHTML = doc.data().phone
//         document.getElementById("userAddress").innerHTML = doc.data().address
//     });
// } else {
//     console.log("Key does not exist in localStorage");
// }


// let addPostbutton = document.getElementById("postButton")
// addPostbutton.addEventListener("click", (e) => {
//     e.preventDefault()

//     window.location.href = 'addPost.html'
//     console.log("working");



// })

// let logoutButton = document.getElementById("logOut")

// logOut.addEventListener("click", (e) => {
//     e.preventDefault()
//     signOut(auth)
//         .then(() => {
//             Swal.fire({
//                 title: "Success!",
//                 text: "You have successfully logged out!",
//                 icon: "success",
//                 confirmButtonText: "OK"
//             })
//                 .then(() => {
//                     setTimeout(() => {
//                         window.location.href = "signIn.html";
//                     }, 0);
//                 });

//         })
//     console.log("User signed out successfully");
//     // Optional: Redirect to login page or show a logout confirmation
//     // window.location.href = "signIn.html";
// })
// // .catch((error) => {
// //     console.error("Error signing out:", error);
// // });

// // })






