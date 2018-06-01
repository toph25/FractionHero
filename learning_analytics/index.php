<?php
include('login.php'); // Includes Login Script
if(isset($_SESSION['login_user'])){
header("location: profile.php"); // Redirecting To Profile Page
}
?> 

<!DOCTYPE html>
<html>
<head>
  <link href="style.css" rel="stylesheet" type="text/css">
</head>
<body>
 <div id="login">
  <h2>Login for Teachers</h2>
  <form action="" method="post">
   <label><b>USERNAME</b></label>
   <input id="name" name="username"  type="text">
   <label><b>PASSWORD</b></label>
   <input id="password" name="password"  type="password"><br><br>
   <input name="submit" type="submit" value=" LOG IN ">
   <span><?php echo $error; ?></span>
  </form>
 </div>
</body>
</html>