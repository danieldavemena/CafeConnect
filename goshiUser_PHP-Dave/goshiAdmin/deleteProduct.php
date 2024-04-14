<?php

    $server = "DESKTOP-9F21P1I";
    $database = "CafeConnect";
    $connectionInfo = array( "Database" => $database );

    $conn = sqlsrv_connect($server, $connectionInfo);

    if(isset($_POST['confirmDelete'])) {
        $imageFile = $_POST['directory']."/".$_POST['fileName'];
        $itemID = $_POST['itemID'];

        unlink($imageFile);

        $query = "DELETE FROM products WHERE itemID='$itemID'";
        sqlsrv_query($conn, $query);
        
        header("Location: admin.php");
    }

?>