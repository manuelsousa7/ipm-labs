window.onload = function() {
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

	newIndex = localStorage.getItem("IndexMenu");
}

var newIndex;

function change(){
	window.top.location.href = "../tabelanut/index.html";
}

function change2(){
	window.top.location.href = "../personalizar/tabela/tabela1/index.html";
}

function chamada() {
	var novosPratos = JSON.parse(localStorage.getItem("listaPratos"));
	var novo = JSON.parse(localStorage.getItem("pratoSelecao"));
	localStorage.setItem("listaPratos", JSON.stringify(novosPratos));
	localStorage.setItem("Tabela", "Sim");
}
	
setInterval(
	function() {
		if (localStorage.getItem("IndexMenu") != newIndex.toString()) {

			switch (localStorage.getItem("IndexMenu")) {
				case "1":
					window.location.href = "comida1.html";
					localStorage.setItem("IndexMenu", "1");
					break;

				case "2":
					window.location.href = "comida2.html";
					localStorage.setItem("IndexMenu", "2");
					break;

				case "3":
					window.location.href = "comida3.html";
					localStorage.setItem("IndexMenu", "3");
					break;
			}

		}
	}
, 100);