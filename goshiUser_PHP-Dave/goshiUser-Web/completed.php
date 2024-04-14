<?php

    $server = "DESKTOP-9F21P1I";
    $database = "CafeConnect";
    $connectionInfo = array( "Database" => $database );

    $conn = sqlsrv_connect($server, $connectionInfo);

    if(isset($_GET['received'])) {
        $orderID = $_GET['orderID'];
        $quantity = $_GET['quantity'];
        $price = $_GET['price'];
        $items = $_GET['items'];
        $userID = $_GET['userID'];

        $query = "INSERT INTO transactions(transactionID, items, itemAmount, totalPrice, transactionType, userID) VALUES ('$orderID', '$items', $quantity, $price, 'online', '$userID')";
        sqlsrv_query($conn, $query);
    }

?>
<script type="module">
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
  deleteDoc,
  orderBy,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";

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
let orderID = '<?php echo $orderID?>';

getDoc(doc(db, 'goshiOrders', orderID)).then((item) => {
    console.log(item.data())

    addDoc(collection(db, 'goshiHistory'), {
        createdAt: serverTimestamp(),
        itemID: item.id,
        items: item.data().items,
        quantity: item.data().quantity,
        price: item.data().price,
        userID: item.data().customerID,
        riderID: item.data().riderID
    }).then(() => {
        deleteDoc(doc(db, 'goshiOrders', orderID)).then(() => {
            window.location.href = 'index.php';
        })
    })
})



</script>