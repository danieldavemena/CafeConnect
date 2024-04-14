<?php


?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./index.css" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inria+Sans&family=Kufam:ital,wght@0,400..900;1,400..900&display=swap"
      rel="stylesheet"
    />

    <title>Goshi Cashier</title>
  </head>
  <body>
    <div class="loginElementsCashier">
      <div class="heading">
        <img src="./img/goshiLogo.png" alt="" width="200" />
        <h1>GOSHI CASHIER</h1>
      </div>
      <form class="cashierLogin" method="POST" action="login.php">
        <div class="form-item">
          <label for="username">USERNAME:</label>
          <input type="text" name="username" id="username" />
        </div>
        <div class="form-item">
          <label for="password">PASSWORD:</label>
          <input type="password" name="password" id="password" />
        </div>
        <input type="submit" name="cashierSubmit" value="LET'S GOSHI GO" />
      </form>
    </div>
  </body>
</html>
<script type="module"></script>
