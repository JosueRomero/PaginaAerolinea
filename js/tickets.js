// JavaScript Document
window.onload = function(){
	var datos = localStorage.getItem("info");
	var ruta = localStorage.getItem("od");
	var horario = localStorage.getItem("ho");
	var fechaVuelo = localStorage.getItem("fe");
	localStorage.clear();
	localStorage.setItem("od",ruta);
	localStorage.setItem("ho",horario);
	localStorage.setItem("fe",fechaVuelo);
	
	var totalBoletosAdulto = window.location.href.split("?")[1].split("&aa").length;
	var totalBoletosNiño = window.location.href.split("?")[1].split("&as").length-1;
	var arr = window.location.href.split("?")[1].split("&");
	var asientosAdultos = new Array();
	var asientosNiño = new Array();
	var indice1 = 0;
	var indice2 = 0;
	var expresionRegular = "/.n/";

	for(let i = 0; i < arr.length;i++){
		if(arr[i].split("=")[0].split(expresionRegular)[0].includes("asn"))
			asientosNiño[indice1++] = arr[i].split("=")[1];
		else
			asientosAdultos[indice2++] = arr[i].split("=")[1];
	}
			
	var slotsAdulto = guardarElementosDOM("nombrea","correoa","celulara");
	var slotsNiño = guardarElementosDOM("nombren","correon","celularn");
	
	var labelAdultos = guardarElementosDOMLabel("nombrel","aa");
	var labelNiños = guardarElementosDOMLabel("nombreln","an");
	
	var inputsAdulto = colocarElementosNecesarios(slotsAdulto,labelAdultos,parseInt(totalBoletosAdulto),asientosAdultos);
	var inputsNiño =
	colocarElementosNecesarios(slotsNiño,labelNiños,parseInt(totalBoletosNiño),asientosNiño);
	
	//Se agrega el onSubmit al form1
	document.getElementById("form1").onsubmit = function(){return validacion()};
	
	
	//Se agregan las validaciones de cada campo
	for(let i = 0; i < inputsAdulto.length;i+=3){
		document.getElementById(inputsAdulto[i].id.toString()).onkeypress = function(){return soloLetras(event)};
	}
	
	for(let i = 1; i < inputsAdulto.length;i+=3){
		document.getElementById(inputsAdulto[i].id.toString()).onkeypress = function(){return correo(event)};
	}
	
	for(let i = 2; i < inputsAdulto.length;i+=3){
		document.getElementById(inputsAdulto[i].id.toString()).onkeypress = function(){return soloNumeros(event)};
	}
	
	for(let i = 0; i < inputsNiño.length;i+=3){
		document.getElementById(inputsNiño[i].id.toString()).onkeypress = function(){return soloLetras(event)};
	}
	
	for(let i = 1; i < inputsNiño.length;i+=3){
		document.getElementById(inputsNiño[i].id.toString()).onkeypress = function(){return correo(event)};
	}
	
	for(let i = 2; i < inputsNiño.length;i+=3){
		document.getElementById(inputsNiño[i].id.toString()).onkeypress = function(){return soloNumeros(event)};
	}
	
	
	
	function colocarElementosNecesarios(arr1,arr2,valor,asientos){
		let inputs = new Array();
		let elementosLibres = valor * 3;
		let labelLibres = valor * 2;
		for(let i = elementosLibres;i < 12; i++){
				arr1[i].style.display = 'none';
				arr1[i].disabled = true;
		}

		for(let i = labelLibres;i < 8; i++){
				arr2[i].style.display = 'none';
				arr2[i].disabled = true;
		}

		let ind = 1;
		let ind2 = 0;
		for(let i = 1; i <= valor; i++){
			arr2[ind].innerHTML = "Asiento: "+asientos[ind2++];
			ind = ind + 2;
		}
		for(let i = 0; i < elementosLibres;i++){
			inputs[i] = arr1[i];
		}
		return inputs;

	}
	function guardarElementosDOM(id_domNom, id_domCorr, id_domCel){
		let arr = new Array();
		let indice = 0;
		for(let i = 1;i < 5; i++){
			arr[indice++] = document.getElementById(id_domNom+""+i);
			arr[indice++] = document.getElementById(id_domCorr+""+i);
			arr[indice++] = document.getElementById(id_domCel+""+i);
		}
		return arr;
	}
	function guardarElementosDOMLabel(id_domLabel, id_domLabelAsiento){
		let arr = new Array();
		let indice = 0;
		for(let i = 1;i < 5; i++){
			arr[indice++] = document.getElementById(id_domLabel+""+i);
			arr[indice++] = document.getElementById(id_domLabelAsiento+""+i);
		}
		return arr;
	}

	//Se prepara y guarda la infomacion en el caché
	document.getElementById("btnSubmit").addEventListener("click",function(){
		datos += " - lA";
		for(let i = 0; i < asientosAdultos.length; i++)
			datos += " - "+asientosAdultos[i];
		datos += " - lN";
		for(let i = 0; i < asientosNiño.length; i++)
			datos +=" - "+asientosNiño[i];
		datos += " - iA";
		for(let i = 0; i < inputsAdulto.length; i++)
			datos += " - "+inputsAdulto[i].value;
		datos += " - iN";
		for(let i = 0; i < inputsNiño.length; i++)
			datos += " - "+inputsNiño[i].value;

		localStorage.setItem("info",datos);
	});

	//Validaciones de cada elemento
	function validacion(){
		var correo = /^[-\w.%+]{1,64}@(?:[A-Za-z0-9-]{1,63}\.){1,125}[A-Za-z]{2,63}$/;
		for(let i = 0;i < inputsAdulto.length; i+=3){
			if(inputsAdulto[i].value == null || inputsAdulto[i].value.length == 0 ){//|| !(Number.isNaN(inputsAdulto[i].value))){
				alert("Error en el nombre"+(i+1));
				return false;
			}
			if(inputsAdulto[i+1].value == null || inputsAdulto[i+1].value.length == 0 || !(correo.test(inputsAdulto[i+1].value))){
				alert("Error en el correo"+(i+1));
				return false;   
			}
			if(inputsAdulto[i+2].value == null || inputsAdulto[i+2].value.length == 0 || isNaN(inputsAdulto[i+2].value)){
				alert("Error en el telefono"+(i+1));
				return false;   
			}
		}

		for(let i = 0;i < inputsNiño.length; i+=3){
			if(inputsNiño[i].value == null || inputsNiño[i].value.length == 0 ){//|| !(Number.isNaN(inputsAdulto[i].value))){
				alert("Error en el nombre"+(i+1));
				return false;
			}
			if(inputsNiño[i+1].value == null || inputsNiño[i+1].value.length == 0 || !(correo.test(inputsNiño[i+1].value))){
				alert("Error en el correo"+(i+1));
				return false;   
			}
			if(inputsNiño[i+2].value == null || inputsNiño[i+2].value.length == 0 || isNaN(inputsNiño[i+2].value)){
				alert("Error en el telefono"+(i+1));
				return false;   
			}
		}
		return true;
	}

	function soloLetras(e){
		let key = e.keyCode || e.which;
		let tecla = String.fromCharCode(key).toLowerCase();
		let letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
		let especiales = "8";

		let tecla_especial = false
		if(key == especiales){
			tecla_especial = true;
		}

		if(letras.indexOf(tecla)==-1 && !tecla_especial){
			return false;
		}

	}

	function soloNumeros(e){
		let key = e.keyCode || e.which;
		let tecla = String.fromCharCode(key);
		let numeros = "0123456789";
		let especiales = "8";

		let tecla_especial = false
		if(key == especiales){
			tecla_especial = true;
		}

		if(numeros.indexOf(tecla)==-1 && !tecla_especial){
			return false;
		}

	}
	function correo(e){
		let key = e.keyCode || e.which;
		let tecla = String.fromCharCode(key).toLowerCase();
		let letras = "áéíóúabcdefghijklmnñopqrstuvwxyz@_.-0123456789&";
		let especiales = "8";

		let tecla_especial = false
		if(key == especiales){
			tecla_especial = true;
		}

		if(letras.indexOf(tecla)==-1 && !tecla_especial){
			return false;
		}

	}
	
}