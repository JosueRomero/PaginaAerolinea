// JavaScript Document
var acordeon_array = new Array();
var nombre = document.getElementById("nombre");
var tarjeta = document.getElementById("tarjeta");
var mes = document.getElementById("mes");
var dia = document.getElementById("dia");
var cvc = document.getElementById("cvc");
var calle = document.getElementById("calle");
var CP = document.getElementById("codigoPostal");
var colonia = document.getElementById("colonia");
var ciudad = document.getElementById("ciudad");
var estado = document.getElementById("estado");
var pais = document.getElementById("pais");
var inputsArray = [CP,tarjeta,mes,dia,cvc,calle,nombre,colonia,ciudad,estado,pais];
window.onload = function(){
	
	acordeon_array = document.getElementsByClassName("acordeon");
	//Recorremos el arreglo
	for(var i = 0; i<acordeon_array.length;i++){
		acordeon_array[i].addEventListener("click",selecciona,false);
	}
	
	//Limitamos los valores de cada elemento
	inputsArray[1].addEventListener("input",function(){
		if(this.value.length > 17)
			this.value = this.value.slice(0,17);
	});
	

	inputsArray[4].addEventListener("input",function(){
		if(this.value.length > 3)
			this.value = this.value.slice(0,3);
	});

	inputsArray[0].addEventListener("input",function(){
		if(this.value.length > 5)
			this.value = this.value.slice(0,5);
	});	
	inputsArray[2].addEventListener("input",function(){
		if(this.value.length > 2)
			this.value = this.value.slice(0,2);
	});
		
	inputsArray[3].addEventListener("input",function(){
		if(this.value.length > 2)
			this.value = this.value.slice(0,2);
	});
	
	/**Se ajustan para que acepten solo letras o numeros**/
	for(let i = 5; i < inputsArray.length; i++){
		document.getElementById(inputsArray[i].id.toString()).onkeypress = function(){return soloLetras(event)};	
	}
	
	for(let i = 0; i < 5;i++){
		document.getElementById(inputsArray[i].id.toString()).onkeypress = function(){return soloNumeros(event)};	
	}
	
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
	//Hola de nuevo
	
	if(numeros.indexOf(tecla)==-1 && !tecla_especial){
		return false;
	}
	
}

function selecciona(){
	this.classList.toggle("activo");
	var panel = this.nextElementSibling;
	if(panel.style.display == "block"){
		panel.style.display = "none";
		
	}else{
		panel.style.display = "block";
		
	}
}

function isNull(input){
	if(input.value == null || input.value.length == 0)
		return true;
	return false;
}


