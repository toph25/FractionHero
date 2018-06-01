<?php


include('session.php');

if(!isset($_SESSION['login_user'])){
header("location: index.php"); // Redirecting To Home Page
}
?>

<!DOCTYPE html>
<html>
<head>
  <link href="style.css" rel="stylesheet" type="text/css">
</head>
<body>
 <input type="hidden" id="hdnSession" data-value='<?php echo $login_session; ?>'> </input>
 <div id="login">
  <h2 id="helloteacher"></h2>
  <h4 align="center">Check your classes' motivation.</h4>
  <div class ="in_sections">
  	Choose a section:
    <select id="in_sections"></select>
  </div>

 </div>
<script src="js/jquery.min.js"></script>
<script src="js/profile.js"></script>
</body>
</html>
