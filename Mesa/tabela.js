
var contador = 0;
var caloryThreshold = 10;

function AdicionaTabela() {
	
	var descricao = JSON.parse(localStorage.getItem("pratoSelecao"));

	var nomes = ["TextoPrato", "QuadradoMenos", "Quantidade", "QuadradoMais"];

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

	var newTd = [newTr.insertCell(0), newTr.insertCell(1), newTr.insertCell(2)];
	newTd[0].setAttribute("width", "35%");
	newTd[1].setAttribute("width", "15%");
	newTd[2].setAttribute("width", "45%");
	newTd[0].setAttribute("height", "60");
	newTd[1].setAttribute("height", "60");
	newTd[2].setAttribute("height", "60");

	newTd[1].setAttribute("id", nomes[0] + contador);

	newTd[0].appendChild(document.createTextNode(descricao.prato.nome));
	newTd[1].appendChild(document.createTextNode(descricao.prato.preco.toFixed(2)));

	listaPratos.push(descricao.prato);

	localStorage.setItem("listaPratos", JSON.stringify(listaPratos));

	var newQuantity = (document.getElementsByClassName("Quantidade"))[0].cloneNode(true);

	newQuantity.setAttribute("style", "display: all;");
	newQuantity.children[0].setAttribute("id", nomes[1] + contador);
	newQuantity.children[1].setAttribute("id", nomes[2] + contador);
	newQuantity.children[2].setAttribute("id", nomes[3] + contador);

		newQuantity.children[1].innerHTML = descricao.prato.quant;

	newClick0 = "CustomOnClick(" + contador + ", false)";
	newClick2 = "CustomOnClick(" + contador + ", true)";

	newQuantity.children[0].setAttribute("onclick", newClick0);
	newQuantity.children[2].setAttribute("onclick", newClick2);

	newTd[2].appendChild(newQuantity);
	newTd[2].setAttribute("display", "inline");

}

function AdicionaTabela2(prato) {
	
	var nomes = ["TextoPrato", "QuadradoMenos", "Quantidade", "QuadradoMais"];

	var listaPratos = JSON.parse(localStorage.getItem("listaPratos"));
	var i;
	for (i = 0; i < listaPratos.length; i++) {
		if (listaPratos[i].nome == prato.nome) {
			return;
		}
	}

	var table = document.getElementById("TabelaPratos");
	var newTr = table.insertRow(contador++);

	if (prato.nome.length > caloryThreshold) {
		newTr.setAttribute("style", "font-size: 1.7em; border-top: solid var(--border_color); background-color: #dbbc83");
		newTr.setAttribute("title", "Atenção: " + prato.nome + " tem muitas calorias!");
	}
	else {
		newTr.setAttribute("style", "font-size: 1.7em; border-top: solid var(--border_color);");
	}

	var newTd = [newTr.insertCell(0), newTr.insertCell(1), newTr.insertCell(2)];
	newTd[0].setAttribute("width", "35%");
	newTd[1].setAttribute("width", "15%");
	newTd[2].setAttribute("width", "45%");
	newTd[0].setAttribute("height", "60");
	newTd[1].setAttribute("height", "60");
	newTd[2].setAttribute("height", "60");

	newTd[1].setAttribute("id", nomes[0] + contador);

	newTd[0].appendChild(document.createTextNode(prato.nome));
	newTd[1].appendChild(document.createTextNode(prato.preco.toFixed(2)));

	var newQuantity = (document.getElementsByClassName("Quantidade"))[0].cloneNode(true);

	newQuantity.setAttribute("style", "display: all;");
	newQuantity.children[0].setAttribute("id", nomes[1] + contador);
	newQuantity.children[1].setAttribute("id", nomes[2] + contador);
	newQuantity.children[2].setAttribute("id", nomes[3] + contador);

		newQuantity.children[1].innerHTML = prato.quant;

	newClick0 = "CustomOnClick(" + contador + ", false)";
	newClick2 = "CustomOnClick(" + contador + ", true)";

	newQuantity.children[0].setAttribute("onclick", newClick0);
	newQuantity.children[2].setAttribute("onclick", newClick2);

	newTd[2].appendChild(newQuantity);
	newTd[2].setAttribute("display", "inline");
}

window.onload = function() {

	contador = 0;
	var listaPratos = JSON.parse(localStorage.getItem("listaPratos"));
	if (listaPratos.length == 0) {
		var lista = [];
		localStorage.setItem("listaPratos", JSON.stringify(lista));
	}
	else {
		var i;
		for (i = 0; i < listaPratos.length; i++) {
			localStorage.setItem("pratoSelecao", JSON.stringify(listaPratos[i]));
			AdicionaTabela2(listaPratos[i]);
		}
	}
	/*
	contador = 0;
	var lista = [];
	localStorage.setItem("listaPratos", JSON.stringify(lista));
	*/
}

//Clicar nos botoes das quantidades
function CustomOnClick(index, add) {
	var nome = "Quantidade" + index.toString();

	var listaPratos = JSON.parse(localStorage.getItem("listaPratos"));
	var old = listaPratos[index - 1].quant;

	if (add) {
		old++;
		lastIndex = index - 1;
	}
	else if (old >= 1) { 
		old--;
	}

	listaPratos[index - 1].quant = old;
	document.getElementById(nome).innerHTML = old;
	localStorage.setItem("listaPratos", JSON.stringify(listaPratos));   	
}

setInterval(
	function() {
		if (localStorage.getItem("Tabela") == "Sim") {
			localStorage.setItem("Tabela", "Nao");
			AdicionaTabela();
		}
	}
, 100);

