import { setDoc, getAuth, getFirestore, db, collection, addDoc, getDoc, doc, onAuthStateChanged, getDocs, query, where, signOut } from '../firebase.js';

const cloudName = "dxogrvwp7";
const unsignedUploadPreset = "zljybyzf";

const fname = document.getElementById('fname');
const bimg = document.getElementById('bimg');
const fimg = document.getElementById('fimg');
const fatherName = document.getElementById('fatherName')
const pnumber = document.getElementById('pnumber')
const email = document.getElementById('email');
const country = document.getElementById('country')
const gender = document.getElementsByName("gender")
const city = document.getElementById('city');
const postalCode = document.getElementById('postalCode')
const region = document.getElementById('region');
const dob = document.getElementById('dob')
const bio = document.getElementById("bio")
const designation = document.getElementById("designation")
const address = document.getElementById("address")
const profile_picture = document.getElementById("profile_picture")
const background_picture = document.getElementById("background_picture")
let front_image;
let bacground_image;
const formsubmition = document.getElementById("formsubmition")


if (localStorage.getItem("authLogin") !== null) {
    const authId = localStorage.getItem("authLogin");
    const q = query(collection(db, "users"), where("authId", "==", authId));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        // console.log(doc.data().fimg);

        document.getElementById("fname").value = doc.data().firstName
        // document.getElementById("bimg").style.backgroundImage = `url(${doc.data().bimg}?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)`
        // document.getElementById("fimg").src = doc.data().fimg
        document.getElementById("fatherName").value = doc.data().fathername
        document.getElementById("pnumber").value = doc.data().phone
        document.getElementById("email").value = doc.data().email
        // document.getElementById("country").value = doc.data().country
        // document.getElementsByName("gender").value = doc.data().gender
        document.getElementById("city").value = doc.data().city
        document.getElementById("postalCode").value = doc.data().postalcode
        document.getElementById("region").value = doc.data().region
        document.getElementById("dob").value = doc.data().dob
        document.getElementById("bio").value = doc.data().bio
        document.getElementById("designation").value = doc.data().designation
        document.getElementById("address").value = doc.data().address
    });


} else {
    console.log("Key does not exist in localStorage");
}


profile_picture.addEventListener("change", () => {
    let file = profile_picture.files[0];
    let url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

    let fd = new FormData();
    fd.append("upload_preset", unsignedUploadPreset);
    fd.append("file", file);

    fetch(url, {
        method: "POST",
        body: fd,
    })
        .then((response) => response.json())
        .then((data) => {
            let resourceURl = data.secure_url;

            let transformedUrl = resourceURl.replace(
                "upload/",
                "upload/h_200,w_200/r_max/c_crop,g_face"
            );
            console.log("uploaded succesfully", resourceURl);
            front_image = resourceURl;
            console.log(data);


        })
        .catch((e) => {
            console.log(e);
        });
});

background_picture.addEventListener("change", () => {
    let file = background_picture.files[0];
    let url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

    let fd = new FormData();
    fd.append("upload_preset", unsignedUploadPreset);
    fd.append("file", file);

    fetch(url, {
        method: "POST",
        body: fd,
    })
        .then((response) => response.json())
        .then((data) => {
            let resourceURl = data.secure_url;

            let transformedUrl = resourceURl.replace(
                "upload/",
                "upload/h_200,w_200/r_max/c_crop,g_face"
            );
            console.log("uploaded succesfully", resourceURl);
            bacground_image = resourceURl;
            console.log(data);


        })
        .catch((e) => {
            console.log(e);
        });
});
formsubmition.addEventListener("click", async (e) => {
    e.preventDefault()
    let gen;
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            gen = gender[i].value;
            // console.log(typeof(gen),gen);


        }

    }
    const authId = localStorage.getItem("authLogin");
    const q = query(collection(db, "users"), where("authId", "==", authId));
    const users = collection(db, "users");


    const querySnapshot = await getDocs(q);
    try {
        querySnapshot.forEach(async (docs) => {


            await setDoc(doc(users, docs.id), {
                firstName: fname.value,
                fathername: fatherName.value,
                email: email.value,
                address: address.value,
                phone: pnumber.value,
                authId: localStorage.getItem("authLogin"),
                bimg: bacground_image,
                fimg: front_image,
                bio: bio.value,
                dob: dob.value,
                gender: gen,
                country: country.value,
                city: city.value,
                region: region.value,
                postalcode: postalCode.value,
                designation: designation.value



            });
        });

        Swal.fire({
            title: "Success!",
            text: "You have successfully !",
            icon: "success",
            confirmButtonText: "OK"
        })
            .then(() => {
                setTimeout(() => {
                    window.location.href = "profile.html";
                }, 0);
            });


    } catch (error) {
        console.log(error);
    }





})