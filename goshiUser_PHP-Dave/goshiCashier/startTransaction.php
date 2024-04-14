<?php
    session_start();

    
    $server = "DESKTOP-9F21P1I";
    $database = "CafeConnect";
    $connectionInfo = array( "Database" => $database );

    $conn = sqlsrv_connect($server, $connectionInfo);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Kufam:ital,wght@0,400..900;1,400..900&family=Russo+One&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
<?php if (isset($_SESSION['id'])) { 
    $userID = $_SESSION["id"]; 
    
    $sql = "SELECT username FROM accounts WHERE userID='$userID'";
    $stmt = sqlsrv_query($conn, $sql);
    
    ?>
        <!-- ================================NAVBAR=========================================================================== -->
    <div class="topBar">
        <img class="logo" width="35px" height="35px" src="./img/338566216_238085462011670_4297809382489699544_n-removebg-preview.png" alt="">

      <div class="menus">
          <img class="logOutBtn" width="30px" height="30px" src="https://img.icons8.com/ios-glyphs/90/000000/logout-rounded--v1.png" alt="">
      </div>
    </div>
<!-- ===============================CONTENT============================================================================== -->

<div class="container">
    <div class="cashier">
        <div class="details">
            <h3><?php while($object = sqlsrv_fetch_object($stmt)){echo $object->username;} ?> <img src="img/coffee-beans (1).png" alt=""></h3>
            <H3>Account Type: Cashier</H3>
        </div>
        <!-- TABLE -->
        <div class="container-table">
            <div class="head">
                <h5>Transaction ID: <div class="orderID"></div></h5>
                <h5 class="datetime" id="datetime"> MM DD YYYY</h5>
            </div>
            <div class="table-content">
                <div class="table">
                    <!-- table section!!!!!!!!!!-->
                    <input type="text" id="" name="Amount">
                </div>
                <div class="table-info">
                   <div class="list-container">
                    <ul>
                        <li><h5>Name:</h5></li>
                        <li><h5>Rider ID:</h5></li>
                        <li><h5>Quantity:</h5></li>
                        <li><h5>Price:</h5></li>
                    </ul>
                    <ul>
                        <li><h5 class="holder orderName"></h5></li>
                        <li><h5 class="holder riderID"></h5></li>
                        <li><h5 class="holder quantity"></h5></li>
                        <li><h5 class="holder price"></h5></li>
                    </ul>
                   </div>
                   <label for="Amount"><h5>Amount:</h5><input type="text" id="Amount" name="amount"></label>
                    <button id="Confirmbtn">Confirm</button>
                    <div class="transactionPrompt" style="display: none;">
                        <form  action="endTransaction.php" method="post">
                            <input type="hidden" name="">
                            <input type="hidden" name="">
                            <input type="hidden" name="">
                            <input type="hidden" name="">
                            <input type="hidden" name="">   
                            <input type="submit" id="newTransaction" value="Done"></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- ============================================SIDE CONTENT================================================================ -->

    <div class="orders">
        <h2>Pending Orders</h2>
        <div class="ordersNotif">

        </div>
    </div>
</div>
<?php } ?>

</body>
<script>
    document.querySelector('.logOutBtn').addEventListener('click', () => {
        window.location.href = 'logout.php';
    })
</script>
<script src="./startTransaction.js"></script>
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

onSnapshot(query(collection(db, 'goshiOrders'), where("riderID", "!=", "none")), (orders) => {
    orders.docChanges().forEach((order) => {
        if (order.type == "added") {
            document.querySelector('.ordersNotif').innerHTML += `<h5 onclick="startTransaction('${order.doc.data().name}', '${order.doc.data().riderID}', ${order.doc.data().quantity}, ${order.doc.data().price}, '${order.doc.id}')" >Order ID: ${order.doc.id}</hx5>`
           
        }      
    })
})
</script>
</html>