function AdicionaTabela() {
	alert("Chamado");
	var temp = localStorage.getItem("pratoSelecao");
	var descricao = JSON.parse(temp);

	var newTr = table.insertRow(i);
	if (descricao.nome.length > caloryThreshold) {
		newTr.setAttribute("style", "font-size: 1.7em; border-top: solid var(--border_color); background-color: #dbbc83");
		newTr.setAttribute("title", "Atenção: " + descricao.nome + " tem muitas calorias!");
	}
	else {
		newTr.setAttribute("style", "font-size: 1.7em; border-top: solid var(--border_color);");
	}

	var newTd = [newTr.insertCell(0), newTr.insertCell(1), newTr.insertCell(2)];
	newTd[0].setAttribute("width", "25%");
	newTd[1].setAttribute("width", "25%");
	newTd[2].setAttribute("width", "15%");
	newTd[0].setAttribute("height", "80");
	newTd[1].setAttribute("height", "80");
	newTd[2].setAttribute("height", "80");

	newTd[1].setAttribute("id", nomes[0] + i);
	newTd[2].setAttribute("style", "min-width: 150px");

	newTd[0].appendChild(document.createTextNode(descricao.nome));
	newTd[1].appendChild(document.createTextNode((descricao.preco).toFixed(2)));

	var newQuantity = quantityElement[0].cloneNode(true);

	newQuantity.setAttribute("style", "display: all;");
	newQuantity.children[0].setAttribute("id", nomes[1] + i);
	newQuantity.children[1].setAttribute("id", nomes[2] + i);
	newQuantity.children[2].setAttribute("id", nomes[3] + i);

	newClick0 = "CustomOnClick(" + i + ", false)";
	newClick2 = "CustomOnClick(" + i + ", true)";

	newQuantity.children[0].setAttribute("onclick", newClick0);
	newQuantity.children[2].setAttribute("onclick", newClick2);

	newTd[2].appendChild(newQuantity);
}

function activeCheck() {
	alert("Call");
	if (localStorage.getItem("Tabela") == "Sim") {
		AdicionaTabela();
		localStorage.setItem("Tabela", "Nao");
	}
}

setInterval(activeCheck, 100);