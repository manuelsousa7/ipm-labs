window.onload = function() {
	var imagem = document.getElementById("Imagem");
	var temp = localStorage.getItem("pratoSelecao");
	var descricao = JSON.parse(temp);
	imagem.setAttribute("src", descricao.imagem);
	document.getElementById("NomePrato").innerHTML = descricao.prato.nome;
	document.getElementById("PrecoPrato").innerHTML = descricao.prato.preco + " €";

	document.getElementById("TextoCalorias").innerHTML = "Calorias:\t" + descricao.prato.calorias + " kcal";
	document.getElementById("TextoProteinas").innerHTML = "Proteínas:\t" + descricao.prato.proteinas + " g";
	document.getElementById("TextoLipidos").innerHTML = "Lípidos:\t" + descricao.prato.lipidos + " g";
	document.getElementById("TextoHidratos").innerHTML = "Hidratos:\t" + descricao.prato.hidratos + " g";
}