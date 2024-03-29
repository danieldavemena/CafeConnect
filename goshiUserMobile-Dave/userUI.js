// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
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
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
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
const customerID = sessionStorage.getItem("customerID");
let rating, deliveries, income, name, user, creds, email, dataID;

// Deciding with element to load if riderID exists -- unwanted user access prevention
window.onload = function () {};

// Getting and displaying data from firebase in accordance to the riderID
onSnapshot(
  query(collection(db, "goshiCustomer"), where("uid", "==", customerID)),
  (customer) => {
    customer.docs.forEach((customers) => {
      name = customers.data().name;
      email = customers.data().email;
      dataID = customers.id;

      creds = EmailAuthProvider.credential(
        customers.data().email,
        customers.data().password
      );
    });
  }
);

// Displaying unclaimed orders
onSnapshot(
  query(collection(db, "goshiMessages"), orderBy("createdAt", "asc")),
  (messages) => {
    messages.docChanges().forEach((message) => {
      console.log(message.doc.data());

      if (message.type === "added") {
        if (
          message.doc.data().sender == "nvswvZRJDaQygJVpoOUBgijH6St2" &&
          message.doc.data().customer == customerID
        ) {
          document.querySelector(".bubble").innerHTML += `<div class="id-${
            message.doc.id
          } textBubble left">${message.doc.data().message}</div>`;
          document.querySelector(".bubble").scrollIntoView({ block: "end" });
        } else if (
          message.doc.data().sender == customerID &&
          message.doc.data().customer == customerID
        ) {
          document.querySelector(".bubble").innerHTML += `<div class="id-${
            message.doc.id
          } textBubble right">${message.doc.data().message}</div>`;
          document.querySelector(".bubble").scrollIntoView({ block: "end" });
        }
      } else if (message.type == "modified") {
      } else if (message.type === "removed") {
      }
    });
  }
);

document.querySelector(".messageHolder").addEventListener("submit", (e) => {
  e.preventDefault();

  let message = document.querySelector(".messageHolder").message.value;
  document.querySelector(".messageHolder").reset();

  if (message != "") {
    addDoc(collection(db, "goshiMessages"), {
      createdAt: serverTimestamp(),
      receiver: "nvswvZRJDaQygJVpoOUBgijH6St2",
      message: message,
      sender: customerID,
      customer: customerID,
    });
  }
});

// // Take order from notifications
// document.querySelector(".takeOrder").addEventListener("click", (e) => {
//   updateDoc(doc(db, "goshiOrders", window.orderID), {
//     riderID: riderID,
//   });
//   document.body.style["overflow"] = "auto";
//   document.querySelector(".items").style["display"] = "none";
// });

// // Displaying claimed orders
// onSnapshot(
//   query(collection(db, "goshiOrders"), where("riderID", "==", riderID)),
//   (waitingOrder) => {
//     waitingOrder.docChanges().forEach((order) => {
//       let element = document.querySelector(".takenOrder");
//       console.log(order.doc.data().items);
//       console.log(order.type);

//       if (order.type === "added") {
//       } else if (order.type == "modified") {
//       } else if (order.type === "removed") {
//       }
//     });
//   }
// );

// // Change password process
// document.querySelector(".password").addEventListener("click", (e) => {
//   document.querySelector(".changePassword").style["display"] = "flex";
// });

// document.querySelector(".credentialChange").addEventListener("submit", (e) => {
//   e.preventDefault();

//   let form = document.querySelector(".credentialChange");
//   if (
//     form.newPassword.value === form.confirmPassword.value &&
//     form.newPassword.value != "" &&
//     form.confirmPassword.value != ""
//   ) {
//     signInWithEmailAndPassword(auth, email, form.oldPassword.value).then(() => {
//       user = auth.currentUser;

//       reauthenticateWithCredential(user, creds)
//         .then(() => {
//           updatePassword(user, form.newPassword.value);
//           alert("Password changed successfully");
//           updateDoc(doc(db, "goshiRiders", dataID), {
//             password: form.newPassword.value,
//           }).then(() => {
//             form.reset();
//             document.querySelector(".changePassword").style["display"] = "none";
//           });
//         })
//         .catch(() => {
//           form.reset();
//           alert("Incorrect old password");
//         });
//     });
//   } else {
//     form.reset();
//     alert("Password does not match");
//   }
// });

// // Logging Out
// document.querySelector(".logout").addEventListener("click", (e) => {
//   e.preventDefault();

//   window.sessionStorage.clear();
//   window.location.href = "index.html";
// });
