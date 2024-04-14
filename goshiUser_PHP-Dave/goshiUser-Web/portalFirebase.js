// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import {
  getFirestore,
  getDoc,
  updateDoc,
  getDocs,
  addDoc,
  doc,
  collection,
  onSnapshot,
  query,
  where,
  orderBy,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0L8VqqLfgJNa9F8UlSRX7-jCeoaqSt10",
  authDomain: "goshicafe-9513b.firebaseapp.com",
  projectId: "goshicafe-9513b",
  storageBucket: "goshicafe-9513b.appspot.com",
  messagingSenderId: "58279456066",
  appId: "1:58279456066:web:778a02a91eb6256b3d6cdb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const login = document.querySelector(".loginForm");

login.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = login.loginEmail.value;
  const password = login.loginPassword.value;
  let userID;

  getDocs(
    query(collection(db, "goshiCustomer"), where("email", "==", email))
  ).then((exist) => {
    let doesExist = [];
    let name;

    exist.docs.forEach((snapshot) => {
      doesExist.push(snapshot.data().email);
      name = snapshot.data().name;
    });

    if (doesExist.length != 0) {
      signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
          userID = user.user.uid;

          sessionStorage.setItem("userID", userID);
          window.location.href = "index.php";
        })
        .catch(() => {
          alert("Incorrect email or password");
        });
    } else {
      alert("User does not exist");
    }
  });
});
