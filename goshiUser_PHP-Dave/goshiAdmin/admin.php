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
    <link rel="stylesheet" href="./admin.css">
    <link
      href="https://fonts.googleapis.com/css2?family=Kufam:ital,wght@0,400..900;1,400..900&family=Russo+One&display=swap"
      rel="stylesheet"
    />
    
    <title>GOSHI ADMIN</title>
</head>
<body>
<?php if(isset($_SESSION['id'])) {?>
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

    <div class="deleteContainer hide">
      <div class="deleteProduct">
        <form class="deleteForm" action="deleteProduct.php" method="POST">
          <h2 class="delProduct"></h2>
          <input type="hidden" name="itemID">
          <input type="hidden" name="directory">
          <input type="hidden" name="fileName">
          <div class="delGroup">
            <button class="rejectDelete">No</button>
            <input type="submit" name="confirmDelete" value="Yes">
          </div>
        </form>
      </div>
    </div>

    <div class="productContainer hide">
      <div class="productAdd">
        <form action="uploadFile.php" method="post" enctype="multipart/form-data">
            <div class="formGroup">
              <label for="productName">Product Name:</label>
              <input type="text" name="productName" autocomplete="off">
              <label for="price">Price: </label>
              <input type="number" name="price" autocomplete="off">
              <select name="productType">
                  <option value="espressoBased">Epresso Based</option>
                  <option value="iceBlended">Ice Blended Beverage</option>
                  <option value="nonCoffee">Non Coffee Iced Latte</option>
                  <option value="originalMilktea">Original Milktea</option>
                  <option value="specialties">Specialties</option>
              </select>
            </div>
              <input type="file" name="image">
              <input type="submit" name="uploadProduct" value="">
          </form>
      </div>
    </div>

     <div class="menuContainer">

        <div class="espressoBased-prev prev"><img height="60px" width="60px" src="../goshiUser-Web/img/prev.png" alt=""></div>
        <div class="espressoBased-next next"><img height="60px" width="60px" src="../goshiUser-Web/img/next.png" alt=""></div>

        <div class="iceBlended-prev prev hide"><img height="60px" width="60px" src="../goshiUser-Web/img/prev.png" alt=""></div>
        <div class="iceBlended-next next hide"><img height="60px" width="60px" src="../goshiUser-Web/img/next.png" alt=""></div>

        <div class="nonCoffee-prev prev hide"><img height="60px" width="60px" src="../goshiUser-Web/img/prev.png" alt=""></div>
        <div class="nonCoffee-next next hide"><img height="60px" width="60px" src="../goshiUser-Web/img/next.png" alt=""></div>

        <div class="originalMilktea-prev prev hide"><img height="60px" width="60px" src="../goshiUser-Web/img/prev.png" alt=""></div>
        <div class="originalMilktea-next next hide"><img height="60px" width="60px" src="../goshiUser-Web/img/next.png" alt=""></div>

        <div class="specialties-prev prev hide"><img height="60px" width="60px" src="../goshiUser-Web/img/prev.png" alt=""></div>
        <div class="specialties-next next hide"><img height="60px" width="60px" src="../goshiUser-Web/img/next.png" alt=""></div>



        <div class="menu">
          <div class="category"><h2 class="title">Espresso Based Coffee</h2> <button class="add">Add Product</button></div>
          <div class="menuItems espressoBased">
            <?php
                $query = "SELECT * from products WHERE productType='espressoBased'";
                $sql = sqlsrv_query($conn, $query);
                while($stmt = sqlsrv_fetch_object($sql)) {
                  echo "<div onclick='deleteProduct(\"$stmt->itemID\", \"../goshiUser-Web/assets/espresso_based_coffee\", \"$stmt->productImage\", \"$stmt->itemName\")' class='menuProduct'><img width='180px' height='180px' src='../goshiUser-Web/assets/espresso_based_coffee/$stmt->productImage'></div>";
                }
              ?>
          </div>
          <div class="menuItems iceBlended hide">
            <?php
                $query = "SELECT * from products WHERE productType='iceBlended'";
                $sql = sqlsrv_query($conn, $query);
                while($stmt = sqlsrv_fetch_object($sql)) {
                  echo "<div onclick='deleteProduct(\"$stmt->itemID\", \"../goshiUser-Web/assets/ice_blended_beverage\", \"$stmt->productImage\", \"$stmt->itemName\")' class='menuProduct'><img width='180px' height='180px' src='../goshiUser-Web/assets/ice_blended_beverage/$stmt->productImage'></div>";
                }
              ?>
          </div>
          <div class="menuItems nonCoffee hide">
            <?php
                $query = "SELECT * from products WHERE productType='nonCoffee'";
                $sql = sqlsrv_query($conn, $query);
                while($stmt = sqlsrv_fetch_object($sql)) {
                  echo "<div onclick='deleteProduct(\"$stmt->itemID\", \"../goshiUser-Web/assets/non_coffee_iced_latte\", \"$stmt->productImage\", \"$stmt->itemName\")' class='menuProduct'><img width='180px' height='180px' src='../goshiUser-Web/assets/non_coffee_iced_latte/$stmt->productImage'></div>";
                }
              ?>
          </div>
          <div class="menuItems originalMilktea hide">
            <?php
                $query = "SELECT * from products WHERE productType='originalMilktea'";
                $sql = sqlsrv_query($conn, $query);
                while($stmt = sqlsrv_fetch_object($sql)) {
                  echo "<div onclick='deleteProduct(\"$stmt->itemID\", \"../goshiUser-Web/assets/original_milktea\", \"$stmt->productImage\", \"$stmt->itemName\")' class='menuProduct'><img width='180px' height='180px' src='../goshiUser-Web/assets/original_milktea/$stmt->productImage'></div>";
                }
              ?>
          </div>
          <div class="menuItems specialties hide">
            <?php
                $query = "SELECT * from products WHERE productType='specialties'";
                $sql = sqlsrv_query($conn, $query);
                while($stmt = sqlsrv_fetch_object($sql)) {
                  echo "<div onclick='deleteProduct(\"$stmt->itemID\", \"../goshiUser-Web/assets/specialties\", \"$stmt->productImage\", \"$stmt->itemName\")' class='menuProduct'><img width='180px' height='180px' src='../goshiUser-Web/assets/specialties/$stmt->productImage'></div>";
                }
              ?>
          </div>
        </div>
      </div>
    </div>
<?php } ?>
</body>
</html>
<script>
  document.querySelector('.add').addEventListener('click', () => {
    document.querySelector('.productContainer').classList.remove('hide');
  })

  const espressoPrev = document.querySelector('.espressoBased-prev');
  const espressoNext = document.querySelector('.espressoBased-next');

  const iceBlendedPrev = document.querySelector('.iceBlended-prev');
  const iceBlendedNext = document.querySelector('.iceBlended-next');

  const nonCoffeePrev = document.querySelector('.nonCoffee-prev');
  const nonCoffeeNext = document.querySelector('.nonCoffee-next');

  const milkteaPrev = document.querySelector('.originalMilktea-prev');
  const milkteaNext = document.querySelector('.originalMilktea-next');

  const specialtiesPrev = document.querySelector('.specialties-prev');
  const specialtiesNext = document.querySelector('.specialties-next');

  espressoPrev.addEventListener('click', () => {
    document.querySelector('.specialties').classList.remove('hide');
    document.querySelector('.espressoBased').classList.add('hide');
    espressoPrev.classList.add('hide');
    espressoNext.classList.add('hide');
    specialtiesPrev.classList.remove('hide');
    specialtiesNext.classList.remove('hide');

    document.querySelector('.title').innerHTML = 'Specialties';
  })

  espressoNext.addEventListener('click', () => {
    document.querySelector('.iceBlended').classList.remove('hide');
    document.querySelector('.espressoBased').classList.add('hide');
    espressoPrev.classList.add('hide');
    espressoNext.classList.add('hide');
    iceBlendedPrev.classList.remove('hide');
    iceBlendedNext.classList.remove('hide');

    document.querySelector('.title').innerHTML = 'Ice Blended Beverage';
  })

  iceBlendedPrev.addEventListener('click', () => {
    document.querySelector('.espressoBased').classList.remove('hide');
    document.querySelector('.iceBlended').classList.add('hide');
    iceBlendedPrev.classList.add('hide');
    iceBlendedNext.classList.add('hide');
    espressoPrev.classList.remove('hide');
    espressoNext.classList.remove('hide');

    document.querySelector('.title').innerHTML = 'Espresso Based Coffee';
  })

  iceBlendedNext.addEventListener('click', () => {
    document.querySelector('.nonCoffee').classList.remove('hide');
    document.querySelector('.iceBlended').classList.add('hide');
    iceBlendedPrev.classList.add('hide');
    iceBlendedNext.classList.add('hide');
    nonCoffeePrev.classList.remove('hide');
    nonCoffeeNext.classList.remove('hide');

    document.querySelector('.title').innerHTML = 'Non Coffee Beverage';
  })

  nonCoffeePrev.addEventListener('click', () => {
    document.querySelector('.iceBlended').classList.remove('hide');
    document.querySelector('.nonCoffee').classList.add('hide');
    nonCoffeePrev.classList.add('hide');
    nonCoffeeNext.classList.add('hide');
    iceBlendedPrev.classList.remove('hide');
    iceBlendedNext.classList.remove('hide');

    document.querySelector('.title').innerHTML = 'Ice Blended Beverage';
  })

  nonCoffeeNext.addEventListener('click', () => {
    document.querySelector('.originalMilktea').classList.remove('hide');
    document.querySelector('.nonCoffee').classList.add('hide');
    nonCoffeePrev.classList.add('hide');
    nonCoffeeNext.classList.add('hide');
    milkteaPrev.classList.remove('hide');
    milkteaNext.classList.remove('hide');

    document.querySelector('.title').innerHTML = 'Original Milktea';
  })

  milkteaPrev.addEventListener('click', () => {
    document.querySelector('.nonCoffee').classList.remove('hide');
    document.querySelector('.originalMilktea').classList.add('hide');
    milkteaPrev.classList.add('hide');
    milkteaNext.classList.add('hide');
    nonCoffeePrev.classList.remove('hide');
    nonCoffeeNext.classList.remove('hide');

    document.querySelector('.title').innerHTML = 'Non Coffee Beverage';
  })

  milkteaNext.addEventListener('click', () => {
    document.querySelector('.specialties').classList.remove('hide');
    document.querySelector('.originalMilktea').classList.add('hide');
    milkteaPrev.classList.add('hide');
    milkteaNext.classList.add('hide');
    specialtiesPrev.classList.remove('hide');
    specialtiesNext.classList.remove('hide');

    document.querySelector('.title').innerHTML = 'Specialties';
  })

  specialtiesPrev.addEventListener('click', () => {
    document.querySelector('.originalMilktea').classList.remove('hide');
    document.querySelector('.specialties').classList.add('hide');
    specialtiesPrev.classList.add('hide');
    specialtiesNext.classList.add('hide');
    milkteaPrev.classList.remove('hide');
    milkteaNext.classList.remove('hide');

    document.querySelector('.title').innerHTML = 'Original Milktea';
  })

  specialtiesNext.addEventListener('click', () => {
    document.querySelector('.espressoBased').classList.remove('hide');
    document.querySelector('.specialties').classList.add('hide');
    specialtiesPrev.classList.add('hide');
    specialtiesNext.classList.add('hide');
    espressoPrev.classList.remove('hide');
    espressoNext.classList.remove('hide');

    document.querySelector('.title').innerHTML = 'Espresso Based Coffee';
  })  


  function deleteProduct(itemID, directory, fileName, itemName) {
  const deleteForm = document.querySelector('.deleteForm');

  deleteForm.itemID.value = itemID;
  deleteForm.directory.value = directory;
  deleteForm.fileName.value = fileName
  document.querySelector('.delProduct').innerHTML = `Delete ${itemName}?`;

  document.querySelector('.deleteContainer').classList.remove('hide');  
  }

  document.querySelector('.rejectDelete').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.deleteContainer').classList.add('hide'); 
  })
</script>