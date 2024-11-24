import { getAuth, getFirestore, db, collection, addDoc, getDoc, doc, onAuthStateChanged, getDocs, query, where, signOut } from '../firebase.js';

const fname = document.getElementById('fname');
const bimg = document.getElementById('bimg');
const fimg = document.getElementById('fimg');
const fatherName = document.getElementById('fatherName')
const pnumber = document.getElementById('pnumber')
console.log("profile");

if (localStorage.getItem("authLogin") !== null) {
    const authId = localStorage.getItem("authLogin");
    const q = query(collection(db, "users"), where("authId", "==", authId));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        console.log(doc.data().fimg);

        document.getElementById("fname").innerHTML = doc.data().firstName
        document.getElementById("bimg").style.backgroundImage = `url(${doc.data().bimg}?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)`
        document.getElementById("fimg").src = doc.data().fimg
        document.getElementById("fatherName").innerHTML = doc.data().firstName
        document.getElementById("pnumber").innerHTML = doc.data().phone

        // document.getElementById("fName").innerHTML = doc.data().firstName
        // document.getElementById("lName").innerHTML = doc.data().lastName
        // document.getElementById("rEmail").innerHTML = doc.data().email
        // document.getElementById("UserPhone").innerHTML = doc.data().phone
        // document.getElementById("userAddress").innerHTML = doc.data().address
    });
} else {
    console.log("Key does not exist in localStorage");
}