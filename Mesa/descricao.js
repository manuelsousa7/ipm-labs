window.onload = function() {
	var imagem = document.getElementById("Imagem");
	imagem.setAttribute("src", localStorage.imagem);
	document.getElementById("NomePrato").innerHTML = localStorage.nome;
	document.getElementById("PrecoPrato").innerHTML = localStorage.preco + " €";

	document.getElementById("TextoCalorias").innerHTML = "Calorias:\t" + localStorage.calorias + " kcal";
	document.getElementById("TextoProteinas").innerHTML = "Proteínas:\t" + localStorage.proteinas + " g";
	document.getElementById("TextoLipidos").innerHTML = "Lípidos:\t" + localStorage.lipidos + " g";
	document.getElementById("TextoHidratos").innerHTML = "Hidratos:\t" + localStorage.hidratos + " g";
}