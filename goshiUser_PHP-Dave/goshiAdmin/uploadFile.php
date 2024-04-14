<?php
    $server = "DESKTOP-9F21P1I";
    $database = "CafeConnect";
    $connectionInfo = array( "Database" => $database );

    $conn = sqlsrv_connect($server, $connectionInfo);


    if (isset($_POST['uploadProduct'])) {

        if (isset($_POST['productName']) && isset($_FILES['image']) && $_FILES['image']['size'] > 0  ) {
            $imageTmp = $_FILES['image']['tmp_name'];
            $imageName = $_FILES['image']['name'];
            $imageDirectory;

            $productType =  $_POST['productType'];

            switch($_POST['productType']) {
                case "espressoBased":
                    $imageDirectory = '../goshiUser-Web/assets/espresso_based_coffee/';
                    break;
                case "iceBlended":
                    $imageDirectory = '../goshiUser-Web/assets/ice_blended_beverage/';
                    break;
                case "nonCoffee":
                    $imageDirectory = '../goshiUser-Web/assets/non_coffee_iced_latte/';
                    break;
                case "originalMilktea":
                    $imageDirectory = '../goshiUser-Web/assets/original_milktea/';
                    break;
                case "specialties":
                    $imageDirectory = '../goshiUser-Web/assets/specialties/';
                    break;    
            }
           
            $price = $_POST['price'];
            $productName = $_POST['productName'];
            $productImage = basename(uniqid().$imageName);
            $imageFile = $imageDirectory.$productImage;

            $nametolower = strtolower($productName);
            $itemID = str_replace(" ", "_", $nametolower);

            move_uploaded_file($imageTmp, $imageFile);

            $query = "SELECT * FROM products WHERE itemName='$productName'";
            $stmt = sqlsrv_query($conn, $query, array(), array( "Scrollable" => 'static' ));
            $numRows = sqlsrv_num_rows($stmt);

            if ($numRows == 0) {
                $query = "INSERT INTO products (itemID, itemName, price, productImage, productType) VALUES ('$itemID', '$productName', $price, '$productImage', '$productType')";
                sqlsrv_query($conn, $query);   
            }

            header("Location: admin.php");
            
        } else {
            header("Location: admin.php");
        }

    }

?>