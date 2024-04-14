<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="stylesheet" href="./style.css  " />
    <link
      href="https://fonts.googleapis.com/css2?family=Kufam:ital,wght@0,400..900;1,400..900&family=Russo+One&display=swap"
      rel="stylesheet"
    />  
    <title>Document</title>
</head>
<body>
    <div class="portalPage">
        <div class="portalLogo"></div>

        <div class="portal">
            <div class="login">
                <form action="" method="POST" class="loginForm">
                    <h2 class="loginTitle">Login</h2>
                    <div>
                        <label for="loginEmail">Email: </label>
                        <input type="email" name="loginEmail" id="loginEmail">
                    </div>
                    <div>
                        <label for="loginPassword">Password: </label>
                        <input type="password" name="loginPassword" id="loginPassword">
                    </div>
                    <input type="submit" value="Login">
                </form>
            </div>

            <div class="signup hide">
                <form action="" method="POST" class="signupForm">
                    <h2 class="signupTitle">Sign Up</h2>
                    <div>
                        <label for="signupUsername">Username: </label>
                        <input type="text" name="signupUsername" id="signupUsername">
                    </div>
                    <div>
                        <label for="signupEmail">Email: </label>
                        <input type="email" name="signupEmail" id="signupEmail">
                    </div>
                    <div>
                        <label for="signupPassword">Password: </label>
                        <input type="password" name="signupPassword" id="signupPassword">
                    </div>
                    <div>
                        <label for="signupConfirm">Confirm Password: </label>
                        <input type="password" name="signupConfirm" id="signupConfirm">
                    </div>
                    <input type="submit" value="Sign Up">
                </form>
            </div>

            <div class="loginOptions">
                <button class="loginBtn">Login</button>
                <button class="signupBtn">Signup with Email</button>
            </div>  
        </div>
    </div>
</body>
<script src="./portal.js"></script>
<script type="module" src="./portalFirebase.js"></script>
</html>