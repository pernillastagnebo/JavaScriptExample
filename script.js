//Låter sidan ladda klart innan funktionerna funkar
window.onload = start; 





function start () {
	//När man klickar på knappen "Klicka" sker klickaAlert
	var klicka = document.getElementById("popup");klicka.onclick = klickaAlert;


	//När man klickar på knappen "Miniräknare" sker klickaAlert
	var button = document.getElementById("exchange");button.onclick = exchange;
	

	//När man klickar på knappen "Utseendefixerad" sker setFormalStyle1
	document.getElementById("styleny").onclick = setFormalStyle1;
	//När man klickar på knappen "Konservativ" sker setFormalStyle2 alltså den vanliga designen
	document.getElementById("style").onclick = setFormalStyle2;
}



//Funktionen klickaAlert gör så att ett popup-fönster kommer fram
function klickaAlert() {
	alert("Grattis, du har klickat på en knapp!");
}



function exchange(){
	var kr = prompt("Hur många svenska kronor vill du växla till euro?");
	var result = parseInt(kr)/10;
	alert(kr + " blir €" +result);
}





//Funktionen setFormalstyle gör så att designen på sidan ändras
//styleny är ny design
function setFormalStyle1 () {
	var contentBox = document.getElementById("content");
	contentBox.className = "styleny";
}
//style är tillbaka till den vanliga desigen
function setFormalStyle2 () {
	var contentBox = document.getElementById("content");
	contentBox.className = "style";
}








