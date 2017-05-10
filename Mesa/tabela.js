
var contador = 0;
var caloryThreshold = 10;

function AdicionaTabela() {
	
	var temp = localStorage.getItem("pratoSelecao");
	var descricao = JSON.parse(temp);

	var listaPratos = JSON.parse(localStorage.getItem("listaPratos"));
	var i;
	for (i = 0; i < listaPratos.length; i++) {
		if (listaPratos[i].nome == descricao.prato.nome) {
			return;
		}
	}

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

	listaPratos.push(descricao.prato);
	localStorage.setItem("listaPratos", JSON.stringify(listaPratos));
}

window.onload = function() {
	contador = 0;

	var lista = [];
	localStorage.setItem("listaPratos", JSON.stringify(lista));   
}

setInterval(
	function() {
		if (localStorage.getItem("Tabela") == "Sim") {
			localStorage.setItem("Tabela", "Nao");
			AdicionaTabela();
		}
	}
, 100);

