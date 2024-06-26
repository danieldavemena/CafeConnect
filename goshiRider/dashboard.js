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
  signInWithEmailAndPassword,
  signOut,
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { long, lat } from "./geo.js";

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
const riderID = sessionStorage.getItem("riderID");
let rating, deliveries, income, name, user, creds, email, dataID;

// Deciding with element to load if riderID exists -- unwanted user access prevention
window.onload = function () {
  if (!riderID) {
    window.location.href = "loggedOut.html";
  }
};

// Getting and displaying data from firebase in accordance to the riderID
onSnapshot(
  query(collection(db, "goshiRiders"), where("uid", "==", riderID)),
  (rider) => {
    rider.docs.forEach((riders) => {
      rating = riders.data().rating;
      deliveries = riders.data().deliveries;
      income = riders.data().earnings;
      name = riders.data().name;
      email = riders.data().email;
      dataID = riders.id;

      creds = EmailAuthProvider.credential(
        riders.data().email,
        riders.data().password
      );

      document.querySelector(".id").innerHTML =
        name +
        '<img width="25" height="25" src="https://img.icons8.com/fluency-systems-regular/96/56774a/coffee-beans-.png" alt="coffee-beans-"/>';
      document.querySelector(".rating").innerHTML =
        rating +
        '<img width="15" height="15" src="https://img.icons8.com/forma-regular/96/FFFFFF/star.png" alt="star"/>';
      document.querySelector(".deliveries").innerHTML =
        deliveries +
        '<img width="20" height="20" src="https://img.icons8.com/ios/100/FFFFFF/motorcycle.png" alt="motorcycle"/>';
      document.querySelector(".income").innerHTML =
        income +
        '<img width="15" height="15" src="https://img.icons8.com/fluency-systems-regular/96/FFFFFF/peso-symbol.png" alt="peso-symbol"/>';

      document.querySelector(
        ".idName"
      ).innerHTML = `${name} <img class="nameBarBean" width="25" height="25" src="https://img.icons8.com/fluency-systems-regular/96/56774a/coffee-beans-.png" alt="coffee-beans-"/> `;

      document.querySelector(
        ".userID"
      ).innerHTML = `<h3><b>Name:</b></h3><p>${riderID}</p>`;
      document.querySelector(
        ".password"
      ).innerHTML = `<h3><b>Password:</b></h3><p><img width="20" height="20" src="https://img.icons8.com/fluency-systems-regular/96/0d0b0a/hand-with-pen.png" alt="hand-with-pen"/>${
        riders.data().password
      }</p>`;
      document.querySelector(
        ".birthday"
      ).innerHTML = `<h3><b>Birthday:</b></h3><p>${riders.data().birthday}</p>`;
      document.querySelector(
        ".address"
      ).innerHTML = `<h3><b>Address:</b></h3><p>${riders.data().address}</p>`;
    });
  }
);

// Displaying unclaimed orders
onSnapshot(
  query(collection(db, "goshiOrders"), where("riderID", "==", "none")),
  (waitingOrder) => {
    waitingOrder.docChanges().forEach((order) => {
      let element = document.querySelector(".order");

      if (order.type === "added") {
        element.innerHTML += `<div class="id-${
          order.doc.id
        }"><img class="bean" width="30" height="30" src="https://img.icons8.com/fluency-systems-regular/96/FFFFFF/coffee-beans-.png" alt="coffee-beans-"/><p><b>Quantity:</b> ${
          order.doc.data().quantity
        }</p> <p><b>Price:</b> ${
          order.doc.data().price
        }</p><button onclick="seeItem('${order.doc.id}', '${
          order.doc.data().items
        }', ${order.doc.data().price}, ${
          order.doc.data().quantity
        })" class="seeItem">ITEMS</button></div>`;
      } else if (order.type == "modified") {
        document.querySelector(
          `.id-${order.doc.id}`
        ).innerHTML = `<img class="bean" width="30" height="30" src="https://img.icons8.com/fluency-systems-regular/96/FFFFFF/coffee-beans-.png" alt="coffee-beans-"/><p><b>Quantity:</b> ${
          order.doc.data().quantity
        }</p> <p><b>Price:</b> ${
          order.doc.data().price
        }</p><button onclick="seeItem('${order.doc.id}', '${
          order.doc.data().items
        }', ${order.doc.data().price}, ${
          order.doc.data().quantity
        })" class="seeItem">ITEMS</button>`;
      } else if (order.type === "removed") {
        document
          .querySelector(`.id-${order.doc.id}`)
          .parentNode.removeChild(
            document.querySelector(`.id-${order.doc.id}`)
          );
      }
    });
  }
);

// Take order from notifications
document.querySelector(".takeOrder").addEventListener("click", (e) => {
  updateDoc(doc(db, "goshiOrders", window.orderID), {
    riderID: riderID,
    sendingLoc: "ok",
  });
  document.body.style["overflow"] = "auto";
  document.querySelector(".items").style["display"] = "none";
});

// Displaying claimed orders
onSnapshot(
  query(collection(db, "goshiOrders"), where("riderID", "==", riderID)),
  (waitingOrder) => {
    waitingOrder.docChanges().forEach((order) => {
      let element = document.querySelector(".takenOrder");

      if (order.type === "added") {
        element.innerHTML += `<div class="id-${
          order.doc.id
        }-${riderID}"><img class="bean" width="30" height="30" src="https://img.icons8.com/fluency-systems-regular/96/FFFFFF/coffee-beans-.png" alt="coffee-beans-"/><p><b>${
          order.doc.data().name
        }</b></p><button onclick="chat('${order.doc.data().customerID}', '${
          order.doc.id
        }', '${order.doc.data().name}')" class="chat">CHAT</button></div>`;
      } else if (order.type == "modified") {
        document.querySelector(
          `.id-${order.doc.id}-${riderID}`
        ).innerHTML = `<img class="bean" width="30" height="30" src="https://img.icons8.com/fluency-systems-regular/96/FFFFFF/coffee-beans-.png" alt="coffee-beans-"/><b>${
          order.doc.data().name
        }</b></p><button onclick="chat('${order.doc.data().customerID}', '${
          order.doc.id
        }', '${order.doc.data().name}')" class="chat">CHAT</button></div>`;
      } else if (order.type === "removed") {
        document
          .querySelector(`.id-${order.doc.id}-${riderID}`)
          .parentNode.removeChild(
            document.querySelector(`.id-${order.doc.id}-${riderID}`)
          );
      }
    });
  }
);

// Change password process
document.querySelector(".password").addEventListener("click", (e) => {
  document.querySelector(".changePassword").style["display"] = "flex";
});

document.querySelector(".credentialChange").addEventListener("submit", (e) => {
  e.preventDefault();

  let form = document.querySelector(".credentialChange");
  if (
    form.newPassword.value === form.confirmPassword.value &&
    form.newPassword.value != "" &&
    form.confirmPassword.value != ""
  ) {
    signInWithEmailAndPassword(auth, email, form.oldPassword.value).then(() => {
      user = auth.currentUser;

      reauthenticateWithCredential(user, creds)
        .then(() => {
          updatePassword(user, form.newPassword.value);
          alert("Password changed successfully");
          updateDoc(doc(db, "goshiRiders", dataID), {
            password: form.newPassword.value,
          }).then(() => {
            form.reset();
            document.querySelector(".changePassword").style["display"] = "none";
          });
        })
        .catch(() => {
          form.reset();
          alert("Incorrect old password");
        });
    });
  } else {
    form.reset();
    alert("Password does not match");
  }
});

let oldState = undefined;
let ready;

setInterval(() => {
  let newState = window.customerID;

  if (oldState != newState) {
    document.querySelector(".bubble").innerHTML = "";

    getDocs(
      query(collection(db, "goshiMessages"), orderBy("createdAt", "asc"))
    ).then((messages) => {
      messages.docs.forEach((message) => {
        if (
          message.data().sender == newState &&
          message.data().customer == newState
        ) {
          document.querySelector(".bubble").innerHTML += `<div class="id-${
            message.id
          } textBubble left">${message.data().message}</div>`;
          document.querySelector(".bubble").scrollIntoView({ block: "end" });
        } else if (
          message.data().sender == riderID &&
          message.data().customer == newState
        ) {
          document.querySelector(".bubble").innerHTML += `<div class="id-${
            message.id
          } textBubble right">${message.data().message}</div>`;
          document.querySelector(".bubble").scrollIntoView({ block: "end" });
        }
      });
    });
    ready = riderID;
    oldState = newState;
  }
}, 10);

setInterval(() => {
  updateDoc(doc(db, "goshiRiders", dataID), {
    long: long,
    lat: lat,
  });
}, 10000);

onSnapshot(
  query(collection(db, "goshiMessages"), orderBy("createdAt", "asc")),
  (messages) => {
    messages.docChanges().forEach((message) => {
      if (message.type === "added") {
        if (
          message.doc.data().sender == window.customerID &&
          message.doc.data().customer == window.customerID
        ) {
          document.querySelector(".bubble").innerHTML += `<div class="id-${
            message.doc.id
          } textBubble left">${message.doc.data().message}</div>`;
          document.querySelector(".bubble").scrollIntoView({ block: "end" });
        } else if (
          message.doc.data().sender == ready &&
          message.doc.data().customer == window.customerID
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
      receiver: window.customerID,
      message: message,
      sender: riderID,
      customer: window.customerID,
      rider: riderID,
    });
  }
});

// Logging Out
document.querySelector(".logout").addEventListener("click", (e) => {
  e.preventDefault();

  window.sessionStorage.clear();
  window.location.href = "index.html";
});
