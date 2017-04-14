
//Clicar nos botoes das quantidades
function CustomOnClick(index, add) {
	var nome = "Quantidade" + index;
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

	var PlateNum = 2;
	var contador = 0;
	var i;
	for (i = 0; i < PlateNum; i++) {
		var Texto1 = "Quantidade" + (i+1);
		var Texto2 = "TextoPrato" + (i+1);
		contador += parseFloat(parseInt(document.getElementById(Texto1).innerHTML) * parseFloat(document.getElementById(Texto2).innerHTML));
	}

	document.getElementById("TotalTexto").innerHTML = contador;
}