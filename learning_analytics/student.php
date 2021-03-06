<?php


include('session.php');

if(!isset($_SESSION['login_user'])){
header("location: index.php"); // Redirecting To Home Page
}
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Learning Analytics System</title>
    <meta name="description" content="">
    <link rel="stylesheet" href="css/student.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"/>
  <style>
  /* Stackoverflow preview fix, please ignore */
  .navbar-nav {
    flex-direction: row;
  }

  .nav-link {
    padding-right: .5rem !important;
    padding-left: .5rem !important;
  }

  /* Fixes dropdown menus placed on the right side */
  .ml-auto .dropdown-menu {
    left: auto !important;
    right: 0px;
  }
  </style>
    <!-- IE6-8 support of HTML5 elements --> <!--[if lt IE 9]>
    <script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
 
</head>
<body>

  <nav class="navbar navbar-dark bg-dark">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="class.php">Back </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="logout.php">Logout</a>
      </li>
    </ul>
  </nav>

  <section class = "sideleft">
    <div id="student"></div>
    <div class = "stats">
      <h2>STATS</h2>
      <div class="statboxed1" id = "statboxed1">
        <h6>MOTIVATION</h6>
      </div>
      <div class="statboxed2" id = "statboxed2">
        <h6>ACCURACY VS TIME</h6>
      </div>
      <div class="statboxed3" id = "statboxed3">
        <h6>FREQUENT PATTERN</h6>
      </div>

    </div>
  </section>

  <section class="graph1">
    <canvas width=100px; height=45px; id="mycanvas1"></canvas> 
  </section>

  <section class="graph2">
    <canvas width=150px; height=50px; id="mycanvas2"></canvas>
  </section>


  <script src="js/jquery.min.js"></script>
  <script src="js/student.js"></script>
  <script src="js/Chart.min.js"></script>
</body>
</html>