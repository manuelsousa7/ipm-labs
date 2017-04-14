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
}