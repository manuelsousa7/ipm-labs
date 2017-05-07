
var contador = 0;
var caloryThreshold = 10;

function AdicionaTabela() {
	
	var temp = localStorage.getItem("pratoSelecao");
	var descricao = JSON.parse(temp);
	var table = document.getElementById("TabelaPratos");
	var newTr = table.insertRow(contador++);

	if (descricao.prato.nome.length > caloryThreshold) {
		newTr.setAttribute("style", "font-size: 1.7em; border-top: solid var(--border_color); background-color: #dbbc83");
		newTr.setAttribute("title", "Atenção: " + descricao.prato.nome + " tem muitas calorias!");
	}
	else {
		newTr.setAttribute("style", "font-size: 1.7em; border-top: solid var(--border_color);");
	}

	var newTd = [newTr.insertCell(0), newTr.insertCell(1)];
	newTd[0].setAttribute("width", "50%");
	newTd[1].setAttribute("width", "50%");
	newTd[0].setAttribute("height", "50");
	newTd[1].setAttribute("height", "50");

	newTd[1].setAttribute("id", "TextoPrato" + contador);

	newTd[0].appendChild(document.createTextNode(descricao.prato.nome));
	newTd[1].appendChild(document.createTextNode(descricao.prato.preco));
}

window.onload = function() {
	contador = 0;
}
