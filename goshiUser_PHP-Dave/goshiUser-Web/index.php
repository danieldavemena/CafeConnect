<?php
    $server = "DESKTOP-9F21P1I";
    $database = "CafeConnect";
    $connectionInfo = array( "Database" => $database );

    $conn = sqlsrv_connect($server, $connectionInfo);

    
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <link rel="stylesheet" href="./style.css  " />
    <link
      href="https://fonts.googleapis.com/css2?family=Kufam:ital,wght@0,400..900;1,400..900&family=Russo+One&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="" />
    <style>
        #map { 
          margin-top: 50px;
          margin-bottom: auto;
          width: 100%;
          flex: 1;
          z-index: 1; 
        }
    </style>
  </head>
  <body>
    <div class="topBar">
        <img class="logo" width="35px" height="35px" src="./img/338566216_238085462011670_4297809382489699544_n-removebg-preview.png" alt="">

      <div class="menus">
          <ul class="links">
            <li class="homeBtn borderBottom">Home</li>
            <li class="menuBtn">Menu</li>
            <li class="cartBtn">Cart</li>
            <li class="loginBtn">Sign Up</li>
          </ul>
          <img class="profileBtn" width="30px" height="30px" src="./img/user-interface.png" alt="">
      </div>
    </div>


    <div class="homePage">
      <div class="homepage">
            <div class="left-content">
                  <h2>Hey there,</h2>
                  <h3><span>Coffee</span> lover</h3>
                  <p>Feeling the daily grind getting a little too...grindy?</p>
                  <button class="homepageButton">ORDER NOW!</button>
            </div>
      </div>

      <div class="container">
          <div class="content">
            <h1>REFRESH YOUR DAY!</h1>
            <p>Craving a classic or something adventurous? Explore our menu of brewed coffees, espressos, and creative latte flavors.</p>
            <button class="homepageButton">ORDER NOW!</button>
          </div>
          <div class="image">
            <img src="img/coffee.png" alt="Product Image">
          </div>
      </div>

      <div class="container">
          <div class="image">
            <img src="img/pizza.png" alt="Pizza Image">
          </div>
          <div class="content">
            <h1>Pizzalicious</h1>
            <p>We guarantee you'll love the delicious taste of our pizzas. Make sure to get one hot from the oven because nothing beats a piping hot slice of freshly baked pizza!</p>
            <button class="homepageButton">ORDER NOW!</button>
          </div>
      </div>

      <div class="container">
          <div class="content">
            <h1>Signature Milktea</h1>
            <p>Beyond coffee, we're passionate about offering a diverse tea experience. Discover our premium milk teas,  brewed toperfection.</p>
            <button class="homepageButton">ORDER NOW!</button>
          </div>
          <div class="image">
            <img src="img/tea.png" alt="Product Image">
          </div>
      </div>

      <div class="title">
        <h2>ABOUT US</h2>
      </div>

      <div class="about" id="about">
          <div class="about-box">
              <div class="about-image">
                  <img src="img/bg1.jpg">
              </div>
          </div>
          <div class="about-box">
              <div class="about-body">
                  <form>
                      <h2><i class="fa-solid fa-location-dot">  V.V. Soliven Ave. 1, Cainta, Philippines,1900</i></h2>
                      <h2><i class="fa-solid fa-phone-volume">  +639518420991</i></h2>
                      <h2><i class="fa-solid fa-clock">   7:00 AM T0 11:00 PM MONDAY TO SATURDAY</i></h2>
                  </form>
              </div>
          </div>
      </div>

      <div class="contact" id="contact"></div>
      <footer class="footer">
        <div class="footer-links">
            <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Customer Support</a></li>
            </ul>
        </div>
        <div class="footer-info">
            <p>&copy; 2024 Goshi Cafe Company. All rights reserved.</p>
            <hr class="solid">
        </div>
        <div class="footer">
          <div class="footer-box">
              <div class="social-media">
                  <a href="#"><i class="fa-brands fa-twitter"></i></a>
                  <a href="#"><i class="fa-brands fa-tiktok"></i></a>
                  <a href="#"><i class="fa-brands fa-facebook"></i></a>
                  <a href="#"><i class="fa-brands fa-instagram"></i></a>
              </div>
      </footer>
    </div>

    <div class="menuPage hide">
      <div class="cartContainer hide">
      <div class="cartPopup">
        <div class="closePopup">
          <img
            width="45"
            height="45"
            src="https://img.icons8.com/windows/256/56774a/cancel.png"
            alt="cancel"
          /></div>
        <div class="items"></div>
        <div class="itemTotal">
          <button onclick="{ if (itemCount > 0){ itemCount--; document.querySelector('.quantity').innerHTML = itemCount;}}" class="minus">-</button>
          <div class="quantity">0</div>
          <button onclick="{if (itemCount >= 0){ itemCount++; document.querySelector('.quantity').innerHTML = itemCount;}}"class="plus">+</button>
        </div>
        <button onclick="{if(itemCount != 0){addToCart()}}" class="addToCart">Add to Cart</button>
      </div>
    </div>

      <div class="sideBar">
        <h3 class="titleSideBar">GOSHI MENU</h3>
        <ul class="options">
          <li class="espressoBasedOption">Espresso Based Coffee</li>
          <li class="iceBlendedOption">Ice Blended Beverage</li>
          <li class="nonCoffeeOption">Non Coffee Iced Latte</li>
          <li class="originalMilkteaOption">Original Milktea</li>
          <li class="specialtiesOption">Specialties</li>
        </ul>
        <div class="logoBar">
          <img class="logoBarLogo" width="200px" height="200px" src="./img/338566216_238085462011670_4297809382489699544_n-removebg-preview.png" alt="">
          <h2 class="logoTitle">GOSHI CAFE</h2>
        </div>
      </div>
      <div class="menuContainer">

          <div class="espressoBased-prev prev"><img height="60px" width="60px" src="./img/prev.png" alt=""></div>
          <div class="espressoBased-next next"><img height="60px" width="60px" src="./img/next.png" alt=""></div>

          <div class="iceBlended-prev prev hide"><img height="60px" width="60px" src="./img/prev.png" alt=""></div>
          <div class="iceBlended-next next hide"><img height="60px" width="60px" src="./img/next.png" alt=""></div>

          <div class="nonCoffee-prev prev hide"><img height="60px" width="60px" src="./img/prev.png" alt=""></div>
          <div class="nonCoffee-next next hide"><img height="60px" width="60px" src="./img/next.png" alt=""></div>

          <div class="originalMilktea-prev prev hide"><img height="60px" width="60px" src="./img/prev.png" alt=""></div>
          <div class="originalMilktea-next hide"><img height="60px" width="60px" src="./img/next.png" alt=""></div>

          <div class="specialties-prev prev hide"><img height="60px" width="60px" src="./img/prev.png" alt=""></div>
          <div class="specialties-next hide"><img height="60px" width="60px" src="./img/next.png" alt=""></div>


        <div class="menu">
          <h2 class="category">Espresso Based Coffee</h2>
          <div class="menuItems espressoBased">
            <?php
                $query = "SELECT * from products WHERE productType='espressoBased'";
                $sql = sqlsrv_query($conn, $query);
                while($stmt = sqlsrv_fetch_object($sql)) {
                  echo "<div onclick='openCart(\"$stmt->itemID\", \"$stmt->itemName\", $stmt->price, \"$stmt->productType\", \"./assets/espresso_based_coffee\", \"$stmt->productImage\")' class='menuProduct'><img width='180px' height='180px' src='./assets/espresso_based_coffee/$stmt->productImage'></div>";
                }
              ?>
          </div>
          <div class="menuItems iceBlended hide">
            <?php
                $query = "SELECT * from products WHERE productType='iceBlended'";
                $sql = sqlsrv_query($conn, $query);
                while($stmt = sqlsrv_fetch_object($sql)) {
                  echo "<div onclick='openCart(\"$stmt->itemID\", \"$stmt->itemName\", $stmt->price, \"$stmt->productType\", \"./assets/ice_blended_beverage\", \"$stmt->productImage\")' class='menuProduct'><img width='180px' height='180px' src='./assets/ice_blended_beverage/$stmt->productImage'></div>";
                }
              ?>
          </div>
          <div class="menuItems nonCoffee hide">
            <?php
                $query = "SELECT * from products WHERE productType='nonCoffee'";
                $sql = sqlsrv_query($conn, $query);
                while($stmt = sqlsrv_fetch_object($sql)) {
                  echo "<div onclick='openCart(\"$stmt->itemID\", \"$stmt->itemName\", $stmt->price, \"$stmt->productType\", \"./assets/non_coffee_iced_latte\", \"$stmt->productImage\")' class='menuProduct'><img width='180px' height='180px' src='./assets/non_coffee_iced_latte/$stmt->productImage'></div>";
                }
              ?>
          </div>
          <div class="menuItems originalMilktea hide">
            <?php
                $query = "SELECT * from products WHERE productType='originalMilktea'";
                $sql = sqlsrv_query($conn, $query);
                while($stmt = sqlsrv_fetch_object($sql)) {
                  echo "<div onclick='openCart(\"$stmt->itemID\", \"$stmt->itemName\", $stmt->price, \"$stmt->productType\", \"./assets/original_milktea\", \"$stmt->productImage\")' class='menuProduct'><img width='180px' height='180px' src='./assets/original_milktea/$stmt->productImage'></div>";
                }
              ?>
          </div>
          <div class="menuItems specialties hide">
            <?php
                $query = "SELECT * from products WHERE productType='specialties'";
                $sql = sqlsrv_query($conn, $query);
                while($stmt = sqlsrv_fetch_object($sql)) {
                  echo "<div onclick='openCart(\"$stmt->itemID\", \"$stmt->itemName\", $stmt->price, \"$stmt->productType\", \"./assets/specialties\", \"$stmt->productImage\")' class='menuProduct'><img width='180px' height='180px' src='./assets/specialties/$stmt->productImage'></div>";
                }
              ?>
          </div>
        </div>
      </div>
    </div>  
              
    <div class="cartPage hide">
        <div class="sideBar">
          <ul class="options cartPageOptions">
            <li class="cartList">Cart</li>
            <li class="toReceive">To Receive</li>
            <li class="completed">Completed</li>
          </ul>
        </div>
        <div class="carts">
          <div class="totalPrice"><button class="checkout">Place Order</button><h3 class="price">Total: Php 0</h3></div>
          <div class="cartItems">
           
          </div>
        </div>
        <div class="receive hide">
          <div class="receiveItems">
          </div>
        </div>
        <div class="completedOrders hide">
          <div class="completedItems">
          </div>
        </div>

        <div class="itemList hide">
          <div class="itemListContainer">
            <div class="closeBtn"><img width="45" height="45" src="https://img.icons8.com/sf-black-filled/64/56774a/back.png" alt="back"/></div>
            <form action="completed.php" class="orderForm" method="GET">
              <input type="hidden" class="orderID" name="orderID">
              <input type="hidden" class="quantity" name="quantity">
              <input type="hidden" class="price" name="price">
              <input type="hidden" class="items" name="items">
              <input type="hidden" class="userID" name="userID">
              <input type="submit" class="orderCompleted" name="received" value="Order Received">
            </form>
            <div class="listItems">
              

            </div>
            <div class="trackOrder">
              <div class="map" id="map"></div>
              <div class="rider">
                <h3 class="riderTitle">Chat with Rider</h3>
                <div class="riderContainer">
                  <button class="openChat">Open Chat</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="chatContainer hide">
            <div class="chatContainerContainer">
              <div class="nameBar">
                <div class="riderName"></div>
                <div class="closeChat">
                  <img
                    width="45"
                    height="45"
                    src="https://img.icons8.com/windows/256/56774a/cancel.png"
                    alt="cancel"
                  />
                </div>
              </div>
              <div class="chats"></div>
              <form action="" class="sendMessage">
                <input type="text" name="message" id="" autocomplete="off">
                <input type="submit" value="SEND">
              </form>
            </div>
        </div>
    </div>

    <div class="profile hide">
        <!-- ----------------------------------------------------------------------------------------------------------------- -->
        <!-- BANNER!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
        <div class="container-profile">
          <div class="bannercontainer">
            <h1 class="banner">GOSHIUSER Profile Dashboard</h1>
          </div>
          <div class="sidebar">
              <div class="header">
                  <h3>Customer Name</h3>
              </div>
              <ul>
                  <li><a id="btn1" href="">Transaction History</a></li>
                  <li><a id="btn2" href="">Account Settings</a></li>
                  <li><a id="btn3" href="">Payment Method</a></li>
                  <li><a id="btn4" href="">Personal Info</a></li>
                
              </ul>
              <div class="containerlogo">
                  <img class="logosidebar" src="img/338566216_238085462011670_4297809382489699544_n-removebg-preview.png" alt="">
                  <h2>GOSHI CAFE</h2>
              </div>
          </div>
        </div>

        <div class="accordion">
          <div class="transactionHistory">
            <div class="transacHistory">

            </div>
          </div>
        </div>
     
    </div>
  </body>
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
  <script src="./script.js"></script>
  <script src="./cart.js"></script>
  <script type="module" src="./indexFirebase.js"></script>
  <script src="./map.js"></script>
  <script>
  </script>
</html>
