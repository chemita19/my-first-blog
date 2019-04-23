window.addEventListener("DOMContentLoaded", alcargar);
function alcargar(){
	$("#ejemplo1").click(mostrarEjemplo1);
	$('#divEjemplo1').hide();
	$("#ejemplo2").click(mostrarEjemplo2);
	$('#divEjemplo2').hide();
	$("#ejemplo3").click(mostrarEjemplo3);
	$('#divEjemplo3').hide();
	$("#ejemplo4").click(mostrarEjemplo4);
	$('#divEjemplo4').hide();
	$("#ejemplo5").click(mostrarEjemplo5);
	$('#divEjemplo5').hide();
}
function mostrarEjemplo1(){
	$('#divEjemplo1').toggle();
}
function mostrarEjemplo2(){
	$('#divEjemplo2').toggle();
}
function mostrarEjemplo3(){
	$('#divEjemplo3').toggle();
}
function mostrarEjemplo4(){
	$('#divEjemplo4').toggle();
}
function mostrarEjemplo5(){
	$('#divEjemplo5').toggle();
}


