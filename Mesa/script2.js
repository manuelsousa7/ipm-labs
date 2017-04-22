var numPratos = 4;

//Clicar nos botoes das quantidades
function CustomOnClick(index, add) {
	var nome = "Quantidade" + index.toString();
	var old = document.getElementById(nome).innerHTML;

	if (add) {
		old++;
	}
	else if (old >= 1) {
		old--;
	}
	document.getElementById(nome).innerHTML = old;
	UpdatePriceText();
}

function UpdatePriceText() {

	var Calorias = 75, Proteinas = 7, Lipidos = 5, Hidratos = 8;
	var TotalCalorias = 0, TotalProteinas = 0, TotalLipidos = 0, TotalHidratos = 0;

	var contador = 0;
	var i;
	for (i = 0; i < numPratos; i++) {
		var Texto1 = "Quantidade" + (i+1);
		var Texto2 = "TextoPrato" + (i+1);
		contador += parseFloat(parseInt(document.getElementById(Texto1).innerHTML) * parseFloat(document.getElementById(Texto2).innerHTML));
		TotalCalorias += Calorias * parseInt(document.getElementById(Texto1).innerHTML);
		TotalProteinas += Proteinas * parseInt(document.getElementById(Texto1).innerHTML);
		TotalLipidos += Lipidos * parseInt(document.getElementById(Texto1).innerHTML);
		TotalHidratos += Hidratos * parseInt(document.getElementById(Texto1).innerHTML);
	}

	var textoComSimbolo = contador.toFixed(2) + " €";
	document.getElementById("TotalTexto").innerHTML = contador.toFixed(2);
	document.getElementById("moneyText").innerHTML = textoComSimbolo;
	document.getElementById("TextoCalorias").innerHTML = "Calorias:\t" + TotalCalorias + " g";
	document.getElementById("TextoProteinas").innerHTML = "Proteínas:\t" + TotalProteinas + " g";
	document.getElementById("TextoLipidos").innerHTML = "Lípidos:\t" + TotalLipidos + " g";
	document.getElementById("TextoHidratos").innerHTML = "Hidratos:\t" + TotalHidratos + " g";
}

window.onload = function() {
	var quantityElement = document.getElementById("Quantidade");

	var table = document.getElementById("Table1");
	var newTr = table.insertRow(4);
	newTr.setAttribute("style", "font-size: 1.7em; border-top: solid var(--border_color);");

	var nomes = ["TextoPrato", "QuadradoMenos", "Quantidade", "QuadradoMais"];

	var newTd = [newTr.insertCell(0), newTr.insertCell(1), newTr.insertCell(2)];
	newTd[0].setAttribute("width", "25%");
	newTd[1].setAttribute("width", "25%");
	newTd[2].setAttribute("width", "15%");
	newTd[0].setAttribute("height", "80");
	newTd[1].setAttribute("height", "80");
	newTd[2].setAttribute("height", "80");

	newTd[1].setAttribute("id", nomes[0] + "4");
	newTd[2].setAttribute("style", "min-width: 150px");

	newTd[0].appendChild(document.createTextNode("Azeitonas"));
	newTd[1].appendChild(document.createTextNode("0.50"));

	var newQuantity = quantityElement.cloneNode(true);
	newQuantity.children[0].setAttribute("id", nomes[1] + "4");
	newQuantity.children[1].setAttribute("id", nomes[2] + "4");
	newQuantity.children[2].setAttribute("id", nomes[3] + "4");

	newQuantity.children[0].setAttribute("onclick", "CustomOnClick(4, false)");
	newQuantity.children[2].setAttribute("onclick", "CustomOnClick(4, true)");

	newTd[2].appendChild(newQuantity);
};

