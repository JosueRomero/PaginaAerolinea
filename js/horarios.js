// JavaScript Document
window.onload = function(){
	// Aquí tomo los valores del origen y destino del url
	var origen = window.location.href.split("?")[1].split("&")[0].split("=")[1];
	var destino = window.location.href.split("?")[1].split("&")[1].split("=")[1];
	var fecha = window.location.href.split("?")[1].split("&")[4].split("=")[1].split("+");
	
	var meses = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
	
	for(i = 0; i < meses.length;i++){
		if(fecha[1].includes(meses[i])){
			fecha[1] = i>8? (i+1).toString():"0"+(i+1);
			break;
		}
	}
	
	var fechaVuelo2 = fecha[1]+"/"+fecha[2]+"/"+fecha[3];
	
	if(origen.includes("Mosc"))
		origen = "Moscú";
	
	if(destino.includes("Mosc"))
		destino = "Moscú";
	
	
	// Cambio los + que sustituyen al espacio
	origen = origen.replace("+"," ");
	destino = destino.replace("+"," ");
	//Ciclo que cambia los valores de las etiquetas
	for (var i = 0; i < 4; i++){
		document.getElementById("lugares"+(i+1)).innerHTML = origen+" - "+destino;
	}
	
	var botones = document.getElementsByTagName("button");
	for(let i = 0; i < botones.length; i++){
		botones[i].addEventListener("click",identificarBoton);
	}
			
	function identificarBoton(e){
		switch(e.target.id){
			case "btn1":
				generarStorage(document.getElementById("horario1").innerHTML);
				break;
			case "btn2":
				generarStorage(document.getElementById("horario2").innerHTML);
				break;
			case "btn3":
				generarStorage(document.getElementById("horario3").innerHTML);
				break;
			case "btn4":
				generarStorage(document.getElementById("horario4").innerHTML);
				break;
		}
	}
	
	function generarStorage(horario){
		var cadena;
		var origen = window.location.href.split("?")[1].split("&")[0].split("=")[1];
		var destino = window.location.href.split("?")[1].split("&")[1].split("=")[1];
		var numAdultos = window.location.href.split("?")[1].split("&")[2].split("=")[1];
		var numNiños = window.location.href.split("?")[1].split("&")[3].split("=")[1];
		var fechaVuelo = window.location.href.split("?")[1].split("&")[4].split("=")[1];
		cadena = "o - "+origen+" - d - "+destino+" - nA - "+numAdultos+" - nN - "+numNiños+" - fV - "+fechaVuelo;
		localStorage.setItem("info",cadena);
		var ruta = origen+"-"+destino;
		localStorage.setItem("od",ruta);
		localStorage.setItem("ho",horario);
		localStorage.setItem("fe",fechaVuelo2);
		
		
	}
		
	
}