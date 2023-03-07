// JavaScript Document

document.getElementById('boton').onclick = function (){
	console.log("Capturamos el evento click");
		document.getElementById("demo").innerHTML = "Gracias por interesarse en mi perfil.";
		document.getElementById("boton").outerHTML = "";
		window.open("../doc/cv.pdf", "Curriculum vitae", "status=1");
	}