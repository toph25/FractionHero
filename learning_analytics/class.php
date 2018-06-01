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
    <link rel="stylesheet" href="css/home.css">
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
  <input type="hidden" id="hdnSession" data-value='<?php echo $login_session; ?>'> </input>

	<nav class="navbar navbar-dark bg-dark">
	  <ul class="navbar-nav ml-auto">
	    <li class="nav-item">
	      <a class="nav-link" href="profile.php">Back </a>
	    </li>
	    <li class="nav-item">
	      <a class="nav-link" href="logout.php">Logout</a>
	    </li>
	  </ul>
	</nav>

  <section class = "sideleft">
  	  <div id="section"></div>
	  <div class = "text"> Student   --   Motivation Score</div>
	  <div class ="in_select"><select size = "20" id="students"></select></div>
  </section>


  <section class = "motisummarysection">
    <canvas width=100px; height=25px; id="mycanvas1"></canvas>
  </section>

  <section class = "accutimesection">
    <canvas width=100px; height=25px; id="mycanvas2"></canvas>
  </section>

  <section class = "pie2">
    <canvas width=100px; height=25px; id="mycanvas4"></canvas>
  </section>
    <section class = "pie3">
    <canvas width=100px; height=25px; id="mycanvas5"></canvas>
  </section>

  <section class = "diffiaccusection">
    <canvas width=100px; height=25px; id="mycanvas3"></canvas>
  </section>


  <script src="js/jquery.min.js"></script>
  <script src="js/home.js"></script>
  <script src="js/Chart.min.js"></script>
</body>
</html>