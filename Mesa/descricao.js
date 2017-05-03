window.onload = function() {
	var imagem = document.getElementById("Imagem");
	alert(pratoSelecao);
	var str = pratoSelecao.imagem;
	imagem.setAttribute("src", str);
	document.getElementById("NomePrato").innerHTML = pratoSelecao.prato.nome;
	document.getElementById("PrecoPrato").innerHTML = pratoSelecao.prato.preco + " €";

	document.getElementById("TextoCalorias").innerHTML = "Calorias:\t" + pratoSelecao.prato.calorias + " kcal";
	document.getElementById("TextoProteinas").innerHTML = "Proteínas:\t" + pratoSelecao.prato.proteinas + " g";
	document.getElementById("TextoLipidos").innerHTML = "Lípidos:\t" + pratoSelecao.prato.lipidos + " g";
	document.getElementById("TextoHidratos").innerHTML = "Hidratos:\t" + pratoSelecao.prato.hidratos + " g";
}