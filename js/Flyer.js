// JavaScript Document
window.onload = function(){
	var sel1 = "1";
	var sel2 = "0";
	var select2 = document.getElementById("select2"); 
	var select1 = document.getElementById("select1"); 
		
	select2.options[sel2].disabled = true;
	select2.selectedIndex = 1;
	select1.options[sel1].disabled = true;
			
	document.getElementById("select1").addEventListener("change",function(e){
	select2.options[sel2].disabled = false;
	sel2 = document.getElementById("select1").selectedIndex;
	select2.options[sel2].disabled = true;
	if(select2.value == select1.value)
		select2.selectedIndex = ((parseInt(sel2,10))+1)>5 ? 0: (parseInt(sel2,10))+1;
	});
	
	
	document.getElementById("select2").addEventListener("change",function(e){
	select1.options[sel1].disabled = false;
	sel1 = document.getElementById("select2").selectedIndex;
	select1.options[sel1].disabled = true;
	if(select2.value == select1.value)
		select1.selectedIndex = ((parseInt(sel1,10))+1)>5 ? 0: (parseInt(sel1,10))+1;
	});	
			
	
	document.getElementById("form1").onsubmit = function(){return validacion()};
	
	
	function validacion(){
		var fechaVuelo = document.getElementById("inputCheckIn");
		if(fechaVuelo.value == null || fechaVuelo.value.length == 0)
			return false;
		return true;
	}
	
	try {
		var banner = 1;
        setInterval(function(){
			banner = banner==5?1:banner;
			document.getElementById("banner").className = "tm-container-outer tm-banner-bg"+(banner++);
		}, 5000)
    } catch(err) {
        alert(err.message);
    }
}







