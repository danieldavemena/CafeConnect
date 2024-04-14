<?php
    session_start();

    $server = "DESKTOP-9F21P1I";
    $database = "CafeConnect";
    $connectionInfo = array( "Database" => $database );

    $conn = sqlsrv_connect($server, $connectionInfo);

    if(isset($_POST['adminSubmit'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];
        
        $query = "SELECT * FROM accounts WHERE username='$username' AND password='$password' AND accountType='admin'";
        $stmt = sqlsrv_query($conn, $query, array(), array( "Scrollable" => 'static' ));
        $numRows = sqlsrv_num_rows($stmt);

        if ($numRows == 1) {
            while($id = sqlsrv_fetch_object($stmt)) {
                $_SESSION['id'] = $id->userID;
                header('Location: admin.php');
            }
        }
    }
?>