<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Journey HTML CSS Template</title>
<!-- 
Journey Template 
http://www.templatemo.com/tm-511-journey
-->
    <!-- load stylesheets -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700">  <!-- Google web font "Open Sans" -->
    <link rel="stylesheet" href="font-awesome-4.7.0/css/font-awesome.min.css">                <!-- Font Awesome -->
    <link rel="stylesheet" href="css/bootstrap.min.css">                                      <!-- Bootstrap style -->
    <link rel="stylesheet" type="text/css" href="css/datepicker.css"/>
    <link rel="stylesheet" type="text/css" href="slick/slick.css"/>
    <link rel="stylesheet" type="text/css" href="slick/slick-theme.css"/>
    <link rel="stylesheet" href="css/templatemo-style.css">                                   <!-- Templatemo style -->
	<link rel="stylesheet" href="css/Carrusel.css">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
            <!--[if lt IE 9]>
              <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
              <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
          <![endif]-->
      </head>

      <body>		  
        <div class="tm-main-content" id="top">
            <div class="tm-top-bar-bg"></div>    
            <div class="tm-top-bar" id="tm-top-bar">
                <div class="container">
                    <div class="row">
                        <nav class="navbar navbar-expand-lg narbar-light">
                            <a class="navbar-brand mr-auto" href="#">
                                <img src="img/logo.png" alt="Site logo">
                            </a>
                            
                            <div align="left"  id="mainNav" class="collapse navbar-collapse tm-bg-white">
								<!---------------LABEL-------------------->
                        </div>                            
                    </nav>
                </div> <!-- row -->
            </div> <!-- container -->
        </div> <!-- .tm-top-bar -->

            <section class="p-5 tm-container-outer tm-bg-gray">
				<h1 class="slider__caption"> &nbsp;&nbsp;&nbsp;&nbsp; Horarios</h1>

				<form action="asientos.php" method="get" class="tm-search-form-boletos tm-section-pad-2">
					<div class="tm-search-form-row">
						<!-- ---------------------------- -->
						
						<div class="slider">
  <input type="radio" name="slider" title="slide1" checked="checked" class="slider__nav_2"/>
  <input type="radio" name="slider" title="slide2" class="slider__nav_2"/>
  <input type="radio" name="slider" title="slide3" class="slider__nav_2"/>
  <input type="radio" name="slider" title="slide4" class="slider__nav_2"/>							
  <input type="radio" name="slider" title="slideAcomodo" class="slider__nav_3"/>
  <div class="slider__inner">
    
	  <div class="slider__contents"><img src="img/dawn.png" width="100px">
		<p id="horario1"><?php 
			$db = new MySQLi("localhost", "root", "", "aerolinea");
			$horario = $db->query("SELECT vu_horaVuelo FROM vuelo WHERE vu_numVuelo = 1");
			$info = $horario->fetch_row();
			echo $info[0];
			$db->close();
			?></p>
		<p id="lugares1">Origen - Destino</p>
      <button type="submit" class="btn btn-primary-boletos tm-btn tm-btn-search text-uppercase" id="btn1">Continuar</button>
    </div>
    
	  <div class="slider__contents"><img src="img/sol.png" width="100px">
		<p id="horario2"><?php 
			$db = new MySQLi("localhost", "root", "", "aerolinea");
			$horario = $db->query("SELECT vu_horaVuelo FROM vuelo WHERE vu_numVuelo = 2");
			$info = $horario->fetch_row();
			echo $info[0];
			$db->close();
			?></p>
		<p id="lugares2">Origen - Destino</p>
      <button type="submit" class="btn btn-primary-boletos tm-btn tm-btn-search text-uppercase" id="btn2">Continuar</button>
    </div>
    
	  <div class="slider__contents"><img src="img/dawn.png" width="100px">
		<p id="horario3"><?php 
			$db = new MySQLi("localhost", "root", "", "aerolinea");
			$horario = $db->query("SELECT vu_horaVuelo FROM vuelo WHERE vu_numVuelo = 3");
			$info = $horario->fetch_row();
			echo $info[0];
			$db->close();
			?></p>
		<p id="lugares3">Origen - Destino</p>
      <button type="submit" class="btn btn-primary-boletos tm-btn tm-btn-search text-uppercase" id="btn3">Continuar</button>
    </div>
	  
    <div class="slider__contents"><img src="img/luna.png" width="100px">
		<p id="horario4"><?php 
			$db = new MySQLi("localhost", "root", "", "aerolinea");
			$horario = $db->query("SELECT vu_horaVuelo FROM vuelo WHERE vu_numVuelo = 4");
			$info = $horario->fetch_row();
			echo $info[0];
			$db->close();
			?></p>
		<p id="lugares4">Origen - Destino</p>
      <button type="submit" class="btn btn-primary-boletos tm-btn tm-btn-search text-uppercase" id="btn4">Continuar</button>
    </div>
  </div>
</div>
						
						<!-- Comentario bien perrón ---------------------------- -->
					</div>
				</form>
				
            </section>
                
            <footer class="tm-container-outer">
                <p class="mb-0">Copyright © <span class="tm-current-year">2019</span> United. 
					Diseñado por Salvador y Josué</p>
            </footer>
        </div>
    </div> <!-- .main-content -->

    <!-- load JS files -->
    <script src="js/jquery-1.11.3.min.js"></script>             <!-- jQuery (https://jquery.com/download/) -->
    <script src="js/popper.min.js"></script>                    <!-- https://popper.js.org/ -->       
    <script src="js/bootstrap.min.js"></script>                 <!-- https://getbootstrap.com/ -->
    <script src="js/datepicker.min.js"></script>                <!-- https://github.com/qodesmith/datepicker -->
    <script src="js/jquery.singlePageNav.min.js"></script>      <!-- Single Page Nav (https://github.com/ChrisWojcik/single-page-nav) -->
    <script src="slick/slick.min.js"></script>                  <!-- http://kenwheeler.github.io/slick/ -->
    <script src="js/jquery.scrollTo.min.js"></script>           <!-- https://github.com/flesler/jquery.scrollTo -->
	<script src="js/horarios.js"></script>
    <script> 
        /* DOM is ready
        ------------------------------------------------*/
        $(function(){

            // Change top navbar on scroll
            $(window).on("scroll", function() {
                if($(window).scrollTop() > 100) {
                    $(".tm-top-bar").addClass("active");
                } else {                    
                 $(".tm-top-bar").removeClass("active");
                }
            });

            // Smooth scroll to search form
            $('.tm-down-arrow-link').click(function(){
                $.scrollTo('#tm-section-search', 300, {easing:'linear'});
            });

            // Update nav links on scroll
            $('#tm-top-bar').singlePageNav({
                currentClass:'active',
                offset: 60
            });

            // Close navbar after clicked
            $('.nav-link').click(function(){
                $('#mainNav').removeClass('show');
            });

            // Slick Carousel
            $('.tm-slideshow').slick({
                infinite: true,
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1
            });         
            $('.tm-current-year').text(new Date().getFullYear());  // Update year in copyright           
        });

    </script>             

</body>
</html>
