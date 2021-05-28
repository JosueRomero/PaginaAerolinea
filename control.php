<?php
	//Se capturan los datos finales
	$infoAdultos = $_REQUEST["iA"];
	$infoNinos = $_REQUEST["iN"];
	$lugaresAdulto = $_REQUEST["lA"];
	$lugaresNino = $_REQUEST["lN"];
	$ruta = $_REQUEST["od"];
	$horario = $_REQUEST["ho"];

	//Se dividen en arreglos
	$infoAdultosArray = explode(" - ",$infoAdultos);
	$infoNinosArray = explode(" - ",$infoNinos);
	
	$lugaresAdultoArray = explode(",",$lugaresAdulto);
	$lugaresNinoArray = explode(",",$lugaresNino);
		
	//Se abre el enlace con la BD
	$db = new MySQLi("localhost", "root", "", "aerolinea");
	$db->autocommit(false);

try{
	$idRuta = $db->query("SELECT ru_codigoRuta FROM ruta WHERE ru_ruta LIKE '$ruta';")->fetch_array(MYSQLI_NUM);
	$idVuelo = $db->query("SELECT vu_numVuelo FROM vuelo WHERE ru_codigoRuta = '$idRuta[0]' AND vu_horaVuelo LIKE '$horario';")->fetch_array(MYSQLI_NUM);
	
	//Se insertan en la BD
	$indice = 0;
	for($i = 1; $i < count($infoAdultosArray)-1;$i+=3){
		$n = $infoAdultosArray[$i];
		$c = $infoAdultosArray[$i+1];
		$t = $infoAdultosArray[$i+2];
		mysqli_query($db,"INSERT INTO cliente (cli_nombre,cli_ID,cli_correo,cli_telefono) VALUES ('$n',NULL,'$c','$t')");
		
		$iDs[$indice++] = $db->query("SELECT cli_ID FROM cliente WHERE cli_ID = (SELECT MAX(cli_ID) FROM cliente);")->fetch_array(MYSQLI_NUM);
	}
		
	for($i = 1; $i < count($infoNinosArray)-1;$i+=3){
		$n = $infoNinosArray[$i];
		$c = $infoNinosArray[$i+1];
		$t = $infoNinosArray[$i+2];
		mysqli_query($db,"INSERT INTO cliente (cli_nombre,cli_ID,cli_correo,cli_telefono) VALUES ('$n',NULL,'$c','$t')");

		$iDs[$indice++] = $db->query("SELECT cli_ID FROM cliente WHERE cli_ID = (SELECT MAX(cli_ID) FROM cliente);")->fetch_array(MYSQLI_NUM);
	}

	$indice = 0;
	for($i = 1; $i < count($lugaresAdultoArray)-1;$i++){
		$id = $iDs[$indice++][0];
		$bo = $lugaresAdultoArray[$i];
		mysqli_query($db,"INSERT INTO vuelo_cliente (vu_numVuelo,ru_codigoRuta,cli_ID,vuCl_Boleto) VALUES ('$idVuelo[0]','$idRuta[0]','$id','$bo')");
	}
	for($i = 1; $i < count($lugaresNinoArray)-1;$i++){
		$id = $iDs[$indice++][0];
		$bo = $lugaresNinoArray[$i];
		mysqli_query($db,"INSERT INTO vuelo_cliente (vu_numVuelo,ru_codigoRuta,cli_ID,vuCl_Boleto) VALUES ('$idVuelo[0]','$idRuta[0]','$id','$bo')");
	}
	
	$db->commit();
	echo "true";
} catch (Exception $e) {
    $conex->rollback();
    echo "false";
}

$db->close();
	
		
?>