window.onload = function() {
	localStorage.setItem("Tabela", "Nao");
	var imagem = document.getElementById("Imagem");
	var temp = localStorage.getItem("pratoSelecao");
	var descricao = JSON.parse(temp);
	imagem.setAttribute("src", descricao.imagem);
	document.getElementById("NomePrato").innerHTML = descricao.prato.nome;
	document.getElementById("PrecoPrato").innerHTML = descricao.prato.preco.toFixed(2) + " €";

	document.getElementById("TextoCalorias").innerHTML = "Calorias:\t" + descricao.prato.calorias + " kcal";
	document.getElementById("TextoProteinas").innerHTML = "Proteínas:\t" + descricao.prato.proteinas + " g";
	document.getElementById("TextoLipidos").innerHTML = "Lípidos:\t" + descricao.prato.lipidos + " g";
	document.getElementById("TextoHidratos").innerHTML = "Hidratos:\t" + descricao.prato.hidratos + " g";
}

function change(){
	window.top.location.href = "../tabelanut/index.html";
}

function change2(){
	window.top.location.href = "../personalizar/tabela/tabela1/index.html";
}

function chamada() {
	var novosPratos = JSON.parse(localStorage.getItem("listaPratos"));
	novosPratos.push(JSON.parse(localStorage.getItem("pratoSelecao")));
	localStorage.setItem("listaPratos", JSON.stringify(novosPratos));
	localStorage.setItem("Tabela", "Sim");
}
	
