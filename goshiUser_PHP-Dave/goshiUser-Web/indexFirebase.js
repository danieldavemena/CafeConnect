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
let userID = sessionStorage.getItem("userID");
let userName;

getDocs(
  query(collection(db, "goshiCustomer"), where("uid", "==", userID))
).then((userInfos) => {
  userInfos.docs.forEach((info) => {
    userName = info.data().name;
  });
});

document.querySelector(".checkout").addEventListener("click", () => {
  if (window.itemArray != undefined) {
    let items = window.itemArray;
    let itemList = "";
    let totalQuantity = 0;
    let totalPrice = 0;

    items.forEach((item) => {
      itemList += `${item.itemID}: ${item.quantity}pcs, `;
      totalQuantity += item.quantity;
      totalPrice += item.price;
    });

    addDoc(collection(db, "goshiOrders"), {
      createdAt: serverTimestamp(),
      customerID: userID,
      items: itemList,
      name: userName,
      price: totalPrice,
      quantity: totalQuantity,
      riderID: "none",
    });

    document.querySelector(".price").innerHTML = `Total Price: Php 0`;

    document.querySelectorAll(".listing").forEach((list) => {
      list.parentNode.removeChild(list);
    });

    window.itemArray = undefined;
  } else {
    alert("Add items to your cart");
  }
});

onSnapshot(
  query(collection(db, "goshiOrders"), where("customerID", "==", userID)),
  (myOrders) => {
    myOrders.docChanges().forEach((order) => {
      if (order.type == "added") {
        document.querySelector(".receiveItems").innerHTML += `<div class="id-${
          order.doc.id
        } receiveList"><div class="itemsInfo"><div class="idLabel">Order ID: ${
          order.doc.id
        }</div><div>Rider: ${
          order.doc.data().riderID
        }</div><div class="item"><div class="itemPrice">Price: Php ${
          order.doc.data().price
        }</div><button onclick="seeOrder('${order.doc.id}', '${
          order.doc.data().items
        }', ${order.doc.data().price}, ${order.doc.data().quantity}, '${
          order.doc.data().riderID
        }', '${
          order.doc.data().sendingLoc
        }')" class="seeOrder">Items</button></div></div></div>`;
      } else if (order.type == "modified") {
        document.querySelector(
          `.id-${order.doc.id}`
        ).innerHTML = `<div class="itemsInfo"><div class="idLabel">Order ID: ${
          order.doc.id
        }</div><div>Rider: ${
          order.doc.data().riderID
        }</div><div class="item"><div class="itemPrice">Price: Php ${
          order.doc.data().price
        }</div><button onclick="seeOrder('${order.doc.id}', '${
          order.doc.data().items
        }', ${order.doc.data().price}, ${order.doc.data().quantity}, '${
          order.doc.data().riderID
        }', '${
          order.doc.data().sendingLoc
        }')" class="seeOrder">Items</button></div></div>`;
      }
    });
  }
);

setInterval(() => {
  let riderID = window.riderID;

  if (riderID != undefined) {
    getDocs(
      query(collection(db, "goshiRiders"), where("uid", "==", riderID))
    ).then((loc) => {
      loc.docs.forEach((geo) => {
        window.lat = geo.data().lat;
        window.long = geo.data().long;
      });
    });
  }
}, 10000);

let oldState = undefined;

setInterval(() => {
  let newState = window.riderID;

  if (newState != oldState) {
    getDocs(
      query(
        collection(db, "goshiMessages"),
        where("customer", "==", userID),
        orderBy("createdAt", "asc")
      )
    ).then((messages) => {
      messages.docs.forEach((message) => {
        if (
          message.data().sender == userID &&
          message.data().rider == riderID
        ) {
          document.querySelector(
            ".chats"
          ).innerHTML += `<div class='chatBubble right'>${
            message.data().message
          }</div>`;
        } else if (
          message.data().sender == riderID &&
          message.data().rider == riderID
        ) {
          document.querySelector(
            ".chats"
          ).innerHTML += `<div class='chatBubble left'>${
            message.data().message
          }</div>`;
        }
      });
    });

    oldState = newState;
  }
}, 10);

onSnapshot(
  query(
    collection(db, "goshiMessages"),
    where("customer", "==", userID),
    orderBy("createdAt", "asc")
  ),
  (messages) => {
    messages.docChanges().forEach((message) => {
      if (message.type == "added") {
        if (
          message.doc.data().sender == userID &&
          message.doc.data().rider == riderID
        ) {
          document.querySelector(
            ".chats"
          ).innerHTML += `<div class='chatBubble right'>${
            message.doc.data().message
          }</div>`;
          document.querySelector(".chats").scrollIntoView({ block: "end" });
        } else if (
          message.doc.data().sender == riderID &&
          message.doc.data().rider == riderID
        ) {
          document.querySelector(
            ".chats"
          ).innerHTML += `<div class='chatBubble left'>${
            message.doc.data().message
          }</div>`;
          document.querySelector(".chats").scrollIntoView({ block: "end" });
        }
      }
    });
  }
);

onSnapshot(
  query(collection(db, "goshiHistory"), where("userID", "==", userID)),
  (histories) => {
    histories.docChanges().forEach((history) => {
      if (history.type == "added") {
        document.querySelector(
          ".completedItems"
        ).innerHTML += `<div class="id-${
          history.doc.id
        } completedList"><div class="itemsInfo"><div class="idLabel">Order ID: ${
          history.doc.data().itemID
        }</div><div>Rider: ${
          history.doc.data().riderID
        }</div><div class="item"><div class="itemPrice">Price: Php ${
          history.doc.data().price
        }</div></div></div></div>`;

        document.querySelector(
          ".transacHistory"
        ).innerHTML += `<div class="id-${
          history.doc.id
        } completedList"><div class="itemsInfo"><div class="idLabel">Order ID: ${
          history.doc.data().itemID
        }</div><div>Rider: ${
          history.doc.data().riderID
        }</div><div class="item"><div class="itemPrice">Price: Php ${
          history.doc.data().price
        }</div></div></div></div>`;
      }
    });
  }
);

document.querySelector(".sendMessage").addEventListener("submit", (e) => {
  e.preventDefault();

  let message = document.querySelector(".sendMessage").message.value;
  document.querySelector(".sendMessage").reset();

  addDoc(collection(db, "goshiMessages"), {
    createdAt: serverTimestamp(),
    customer: userID,
    rider: riderID,
    message: message,
    receiver: riderID,
    sender: userID,
  });
});

document.querySelector(".openChat").addEventListener("click", () => {
  getDocs(query(collection(db, "goshiRiders"))).then((riderNames) => {
    riderNames.docs.forEach((riderName) => {
      if (riderName.data().uid == window.riderID) {
        document.querySelector(".riderName").innerHTML = `${
          riderName.data().name
        }`;
      } else {
        document.querySelector(".riderName").innerHTML = "";
      }
    });
  });
});
