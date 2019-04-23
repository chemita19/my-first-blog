window.addEventListener("load", alcargar, false);


function alcargar(){
	document.getElementById("nueveButton").addEventListener('click', function(){pulsarBoton(9)});
	document.getElementById("ochoButton").addEventListener('click', function(){pulsarBoton(8)});
	document.getElementById("sieteButton").addEventListener('click', function(){pulsarBoton(7)});
	document.getElementById("seisButton").addEventListener('click', function(){pulsarBoton(6)});
	document.getElementById("cincoButton").addEventListener('click', function(){pulsarBoton(5)});
	document.getElementById("cuatroButton").addEventListener('click', function(){pulsarBoton(4)});
	document.getElementById("tresButton").addEventListener('click', function(){pulsarBoton(3)});
	document.getElementById("dosButton").addEventListener('click', function(){pulsarBoton(2)});
	document.getElementById("unoButton").addEventListener('click', function(){pulsarBoton(1)});
	document.getElementById("ceroButton").addEventListener('click', function(){pulsarBoton(0)});
	document.getElementById("sumarButton").addEventListener('click', sumarButton);
	document.getElementById("restarButton").addEventListener('click', restarButton);
	document.getElementById("dividirButton").addEventListener('click', dividirButton);
	document.getElementById("multiplicarButton").addEventListener('click', multiplicarButton);
	document.getElementById("igualButton").addEventListener('click', igualButton);
	document.getElementById("limpiarButton").addEventListener('click', limpiarButton);
	document.getElementById("masMenosButton").addEventListener('click', masMenosButton);
	document.getElementById("comaButton").addEventListener('click', comaButton);
	document.getElementById("porcentajeButton").addEventListener('click', porcentajeButton);
	document.getElementById("body").addEventListener('keypress', darBoton);
}
var primero = false;
var segundo = false;
var suma = false;
var resta = false;
var division = false;
var multiplicacion = false;
var numeroUno;
function pulsarBoton(numero){
	if(!segundo){
		document.getElementById("area").value = document.getElementById("area").value + numero;
	}else{
		document.getElementById("area").value = "";
		segundo = false;
		if(!segundo){
			document.getElementById("area").value = document.getElementById("area").value + numero;
		}
	}
}

function darBoton(e){
	console.log(e.key);
	if(e.key == "Enter"){
		igualButton();
	}else if(e.key == "-"){
		restarButton();
	}else if(e.key == "*"){
		multiplicarButton();
	}else if(e.key == "/"){
		dividirButton();
	}else if(e.key == "+"){
		sumarButton();
	}else if(e.key==1 || e.key==2 || e.key==3 || e.key==4|| e.key==5 || e.key==6 || e.key==7 || e.key==8 || e.key==9 || e.key==0 || e.key=="."){
		pulsarBoton(e.key);
	}
}

function sumarButton(){
	primero = true;
	if(!resta && !suma && !division && !multiplicacion){
		numeroUno = parseFloat(document.getElementById("area").value);
		document.getElementById("area").value = "";
	}
	suma = true;
	resta = false;
	division = false;
	multiplicacion = false;
}
function restarButton(){
	primero = true;
	if(!resta && !suma && !division && !multiplicacion){
		numeroUno = parseFloat(document.getElementById("area").value);
		document.getElementById("area").value = "";
	}
	suma = false;
	resta = true;
	division = false;
	multiplicacion = false;
}
function dividirButton(){
	primero = true;
	if(!resta && !suma && !division && !multiplicacion){
		numeroUno = parseFloat(document.getElementById("area").value);
		document.getElementById("area").value = "";
	}
	suma = false;
	resta = false;
	division = true;
	multiplicacion = false;
}
function multiplicarButton(){
	primero = true;
	if(!resta && !suma && !division && !multiplicacion){
		numeroUno = parseFloat(document.getElementById("area").value);
		document.getElementById("area").value = "";
	}
	suma = false;
	resta = false;
	division = false;
	multiplicacion = true;
}
function igualButton(){
	if(suma || resta || multiplicacion || division){
		var resultado;
		var numeroDos = parseFloat(document.getElementById("area").value);
		if(suma){
			resultado = numeroUno + numeroDos;
		}else if(resta){
			resultado = numeroUno - numeroDos;
		}else if(multiplicacion){
			resultado = numeroUno * numeroDos;
		}else if(division){
			resultado = numeroUno / numeroDos;
		}
		suma = false;
		resta = false;
		division = false;
		multiplicacion = false;
		segundo = true;
		numeroUno = document.getElementById("area").value;
		document.getElementById("area").value = resultado;
	}
}
function masMenosButton(){
	document.getElementById("area").value = document.getElementById("area").value * -1;
}
function comaButton(){
	if(document.getElementById("area").value.length > 0){
		document.getElementById("area").value = document.getElementById("area").value + ".";
	}
}
function porcentajeButton(){
	document.getElementById("area").value = document.getElementById("area").value / 100;
}
function limpiarButton(){
	document.getElementById("area").value = "";
	suma = false;
	resta = false; 
	division = false;
	multiplicacion = false;
	primero = false;
}
