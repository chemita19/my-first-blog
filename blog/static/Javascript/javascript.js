window.addEventListener("load", alcargar, false);
function alcargar(){
	document.getElementById("enlaceCalculadora").addEventListener('click',calculadora,false);
}

function calculadora(){
	var centro = $('#center');
	centro.html("<div id='calculadoraTitle'><h1>Calculadora</h1></div>"+
	"<div class='parrafo'>Aqui tenemos un ejemplo del código HTML de una calculadora.</div><div id='calculadoraHtml'></div><div class='parrafo'>Añadiendole la parte de Javascript, conseguimos todas las funcionalidades.<br>Primero creamos todos los eventos:</div><div id='calculadoraJs'></div>"+
	"<div class='parrafo'>Y ahora añadimos todas las funcionalidades a los botones</div><div id='calculadoraJs2'></div>");
	$('#calculadoraTitle').css("textAlign","center");
	var htmlCal = $('#calculadoraHtml');
	var jsCal = $('#calculadoraJs');
	var jsCal2 = $('#calculadoraJs2');

	htmlCal.html("<pre class='language-html'><code class='language-html'>&lthtml&gt"+"<br>"+
					"&lthead&gt"+"<br>"+
					"	&ltlink rel='stylesheet' type='text/css' href='estilos.css'&gt"+"<br>"+
					"	&ltscript type='text/javascript' src='javascript.js'&gt&lt/script&gt"+"<br>"+
					"&lt/head&gt"+"<br>"+
					"&ltbody id='body'&gt"+"<br>"+
					"	&ltdiv id='principal'&gt"+"<br>"+
					"		&ltdiv&gt"+"<br>"+
					"		&ltinput type='text' id='area' readonly&gt"+"<br>"+
					"		&lt/div&gt"+"<br>"+
					"		&ltdiv id='linea'&gt"+"<br>"+
					"		&ltbutton id='limpiarButton' class='colorGrisClaro'&gtAC&lt/button&gt"+"<br>"+
					"		&ltbutton id='masMenosButton' class='colorGrisClaro'&gt+/-&lt/button&gt"+"<br>"+
					"		&ltbutton id='porcentajeButton' class='colorGrisClaro'&gt%&lt/button&gt"+"<br>"+
					"		&ltbutton id='dividirButton' class='color'&gt/&lt/button&gt'"+"<br>"+
					"	&lt/div&gt"+"<br>"+
					"	&ltdiv id='linea'&gt"+"<br>"+
					"			&ltbutton id='sieteButton'&gt7&lt/button&gt"+"<br>"+
					"			&ltbutton id='ochoButton'&gt8&lt/button&gt"+"<br>"+
					"			&ltbutton id='nueveButton'&gt9&lt/button&gt"+"<br>"+
					"			&ltbutton id='multiplicarButton' class='color'&gtx&lt/button&gt"+"<br>"+
					"			&lt/div&gt"+"<br>"+
					"			&ltdiv id='linea'&gt"+"<br>"+
					"			&ltbutton id='cuatroButton'&gt4&lt/button&gt"+"<br>"+
					"			&ltbutton id='cincoButton'&gt5&lt/button&gt"+"<br>"+
					"			&ltbutton id='seisButton'&gt6&lt/button&gt"+"<br>"+
					"			&ltbutton id='restarButton' class='color'&gt-&lt/button&gt"+"<br>"+
					"	&lt/div&gt"+"<br>"+
					"		&ltdiv id='linea'&gt"+"<br>"+
					"			&ltbutton id='unoButton'&gt1&lt/button&gt"+"<br>"+
					"			&ltbutton id='dosButton'&gt2&lt/button&gt"+"<br>"+
					"			&ltbutton id='tresButton'&gt3&lt/button&gt"+"<br>"+
					"			&ltbutton id='sumarButton' class='color'&gt+&lt/button&gt"+"<br>"+
					"	&lt/div&gt"+"<br>"+
					"		&ltdiv id='linea'&gt"+"<br>"+
					"			&ltbutton id='ceroButton'&gt0&lt/button&gt"+"<br>"+
					"			&ltbutton id='comaButton'&gt,&lt/button&gt"+"<br>"+
					"			&ltbutton id='igualButton' class='color'&gt=&lt/button&gt"+"<br>"+
					"		&lt/div&gt"+"<br>"+
					"	&lt/div&gt"+"<br>"+		
					"&lt/body&gt"+"<br>"+
					"&lt/html&gt</code></pre>");
	jsCal.html("<pre class='language-*'><code class='language-*'>window.addEventListener('load', alcargar, false);<br>"+
				"function alcargar(){<br>"+
				"	document.getElementById('nueveButton').addEventListener('click', function(){pulsarBoton(9)});<br>"+
				"	document.getElementById('ochoButton').addEventListener('click', function(){pulsarBoton(8)});<br>"+
				"	document.getElementById('sieteButton').addEventListener('click', function(){pulsarBoton(7)});<br>"+
				"	document.getElementById('seisButton').addEventListener('click', function(){pulsarBoton(6)});<br>"+
				"	document.getElementById('cincoButton').addEventListener('click', function(){pulsarBoton(5)});<br>"+
				"	document.getElementById('cuatroButton').addEventListener('click', function(){pulsarBoton(4)});<br>"+
				"	document.getElementById('tresButton').addEventListener('click', function(){pulsarBoton(3)});<br>"+
				"	document.getElementById('dosButton').addEventListener('click', function(){pulsarBoton(2)});<br>"+
				"	document.getElementById('unoButton').addEventListener('click', function(){pulsarBoton(1)});<br>"+
				"	document.getElementById('ceroButton').addEventListener('click', function(){pulsarBoton(0)});<br>"+
				"	document.getElementById('sumarButton').addEventListener('click', sumarButton);<br>"+
				"	document.getElementById('restarButton').addEventListener('click', restarButton);<br>"+
				"	document.getElementById('dividirButton').addEventListener('click', dividirButton);<br>"+
				"	document.getElementById('multiplicarButton').addEventListener('click', multiplicarButton);<br>"+
				"	document.getElementById('igualButton').addEventListener('click', igualButton);<br>"+
				"	document.getElementById('limpiarButton').addEventListener('click', limpiarButton);<br>"+
				"	document.getElementById('masMenosButton').addEventListener('click', masMenosButton);<br>"+
				"	document.getElementById('comaButton').addEventListener('click', comaButton);<br>"+
				"	document.getElementById('porcentajeButton').addEventListener('click', porcentajeButton);<br>"+
				"	document.getElementById('body').addEventListener('keypress', darBoton);<br>"+
				"}</code></pre>");
	jsCal2.html("<pre class='language-*'><code class='language-*'>var primero = false;<br>"+
				"var segundo = false;<br>"+
				"var suma = false;<br>"+
				"var resta = false;<br>"+
				"var division = false;<br>"+
				"var multiplicacion = false;<br>"+
				"var numeroUno;<br>"+
				"function pulsarBoton(numero){<br>"+
				"	if(!segundo){<br>"+
				"		document.getElementById('area').value = document.getElementById('area').value + numero;<br>"+
				"	}else{<br>"+
				"		document.getElementById('area').value = '';<br>"+
				"		segundo = false;<br>"+
				"		if(!segundo){<br>"+
				"			document.getElementById('area').value = document.getElementById('area').value + numero;<br>"+
				"		}<br>"+
				"	}<br>"+
				"}<br><br>"+

				"function darBoton(e){<br>"+
				"	console.log(e.key);<br>"+
				"	if(e.key == 'Enter'){<br>"+
				"		igualButton();<br>"+
				"	}else if(e.key == '-''){<br>"+
				"		restarButton();<br>"+
				"	}else if(e.key == '*''){<br>"+
				"		multiplicarButton();<br>"+
				"	}else if(e.key == '/''){<br>"+
				"		dividirButton();<br>"+
				"	}else if(e.key == '+''){<br>"+
				"		sumarButton();<br>"+
				"	}else if(e.key==1 || e.key==2 || e.key==3 || e.key==4|| e.key==5 || e.key==6 || e.key==7 || e.key==8 || <br>		e.key==9 || e.key==0 || e.key=='.'){<br>"+
				"		pulsarBoton(e.key);<br>"+
				"	}<br>"+
				"}<br><br>"+

				"function sumarButton(){<br>"+
				"	primero = true;<br>"+
				"	if(!resta && !suma && !division && !multiplicacion){<br>"+
				"		numeroUno = parseFloat(document.getElementById('area').value);<br>"+
				"		document.getElementById('area').value = '';<br>"+
				"	}<br>"+
				"	suma = true;<br>"+
				"	resta = false;<br>"+
				"	division = false;<br>"+
				"	multiplicacion = false;<br>"+
				"}<br>"+
				"function restarButton(){<br>"+
				"	primero = true;<br>"+
				"	if(!resta && !suma && !division && !multiplicacion){<br>"+
				"		numeroUno = parseFloat(document.getElementById('area').value);<br>"+
				"		document.getElementById('area').value = '';<br>"+
				"	}<br>"+
				"	suma = false;<br>"+
				"	resta = true;<br>"+
				"	division = false;<br>"+
				"	multiplicacion = false;<br>"+
				"}<br>"+
				"function dividirButton(){<br>"+
				"	primero = true;<br>"+
				"	if(!resta && !suma && !division && !multiplicacion){<br>"+
				"		numeroUno = parseFloat(document.getElementById('area').value);<br>"+
				"		document.getElementById('area').value = '';<br>"+
				"	}<br>"+
				"	suma = false;<br>"+
				"	resta = false;<br>"+
				"	division = true;<br>"+
				"	multiplicacion = false;<br>"+
				"}<br>"+
				"function multiplicarButton(){<br>"+
				"	primero = true;<br>"+
				"	if(!resta && !suma && !division && !multiplicacion){<br>"+
				"		numeroUno = parseFloat(document.getElementById('area').value);<br>"+
				"		document.getElementById('area').value = '';<br>"+
				"	}<br>"+
				"	suma = false;<br>"+
				"	resta = false;<br>"+
				"	division = false;<br>"+
				"	multiplicacion = true;<br>"+
				"}<br>"+
				"function igualButton(){<br>"+
				"	if(suma || resta || multiplicacion || division){<br>"+
				"		var resultado;<br>"+
				"		var numeroDos = parseFloat(document.getElementById('area').value);<br>"+
				"		if(suma){<br>"+
				"			resultado = numeroUno + numeroDos;<br>"+
				"		}else if(resta){<br>"+
				"			resultado = numeroUno - numeroDos;<br>"+
				"		}else if(multiplicacion){<br>"+
				"			resultado = numeroUno * numeroDos;<br>"+
				"		}else if(division){<br>"+
				"			resultado = numeroUno / numeroDos;<br>"+
				"		}<br>"+
				"		suma = false;<br>"+
				"		resta = false;<br>"+
				"		division = false;<br>"+
				"		multiplicacion = false;<br>"+
				"		segundo = true;<br>"+
				"		numeroUno = document.getElementById('area').value;<br>"+
				"		document.getElementById('area').value = resultado;<br>"+
				"	}<br>"+
				"}<br>"+
				"function masMenosButton(){<br>"+
				"	document.getElementById('area').value = document.getElementById('area').value * -1;<br>"+
				"}<br>"+
				"function comaButton(){<br>"+
				"	if(document.getElementById('area').value.length > 0){<br>"+
				"		document.getElementById('area').value = document.getElementById('area').value + '.';<br>"+
				"	}<br>"+
				"}<br>"+
				"function porcentajeButton(){<br>"+
				"	document.getElementById('area').value = document.getElementById('area').value / 100;<br>"+
				"}<br>"+
				"function limpiarButton(){<br>"+
				"	document.getElementById('area').value = '';<br>"+
				"	suma = false;<br>"+
				"	resta = false; <br>"+
				"	division = false;<br>"+
				"	multiplicacion = false;<br>"+
				"	primero = false;<br>"+
				"}</code></pre>");
	htmlCal.addClass("codigo");
	jsCal.addClass("codigo");
	jsCal2.addClass("codigo");
	centro.append("<div class='parrafo'>Y por último solo tendremos que añadirle un poco de estilo con CSS para dejarla perfecta.</div><div id='calculadoraCss'></div><div class='parrafo'> Aqui tenemos un ejemplo de una calculadora al estilo IOS:<br><a href='../Calculadora/index.html'>Calculadora IOS</a>");
	var cssCal = $('#calculadoraCss');
	cssCal.html("<pre class='language-*'><code class='language-*'>body{<br>"+
				"	background-color: black;<br>"+
				"}<br>"+
				"#principal{<br>"+
				"	width: 250px;<br>"+
				"	height: 260px;<br>"+
				"	margin: auto;<br>"+
				"}<br>"+
				"#linea{<br>"+
				"	margin-bottom: 5px;<br>"+
				"}<br>"+
				"button{<br>"+
				"	width: 50px;<br>"+
				"	height: 50px;<br>"+
				"	background:none;<br>"+
				"	border-radius: 50%;<br>"+
				"	background-color: #313131;<br>"+
				"	color: white;<br>"+
				"	border: none;<br>"+
				"}<br>"+
				"button:hover{<br>"+
				"	background-color: white;<br>"+
				"	color: black;<br>"+
				"}<br>"+
				".color{<br>"+
				"	background-color: orange;<br>"+
				"	border-radius: 50%;<br>"+
				"}<br>"+
				".colorGrisClaro{<br>"+
				"	background-color: #D1D0D0;<br>"+
				"	color: black;<br>"+
				"}<br>"+
				"#ceroButton{<br>"+
				"	border-radius: 35%;<br>"+
				"	width: 106px;<br>"+
				"}<br>"+
				".horizontal{<br>"+
				"	display: inline-block;<br>"+
				"}<br>"+
				"input{<br>"+
				"	width: 200px;<br>"+
				"	height: 50px;<br>"+
				"	background-color: black;<br>"+
				"	border: 0;<br>"+
				"	color: white;<br>"+
				"	text-align: right;<br>"+
				"	font-size: 50px;<br>"+
				"}</code></pre>");
	cssCal.addClass("codigo");
	$(".parrafo").css("text-align","center");
}