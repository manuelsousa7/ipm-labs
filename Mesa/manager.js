Prato = function(nome, preco, calorias, proteinas, lipidos, hidratos) {
	this.nome = nome;
	this.preco = preco;
	this.calorias = calorias;
	this.proteinas = proteinas;
	this.lipidos = lipidos;
	this.hidratos = hidratos
}

var listaPratos = [];

function AdicionarPrato(nome, preco, calorias, proteinas, lipidos, hidratos) {
	listaPratos.push(new Prato(nome, preco, calorias, proteinas, lipidos, hidratos));
}

function RemoverPrato(nome) {
	var i;
	for (i = 0; i < listaPratos.length; i++) {
		if (listaPratos[i].nome == nome) {
			var array_1 = listaPratos.slice(0, i);
			var array_2 = listaPratos.slice(i, listaPratos.length-1);
			listaPratos = array_1.concat(array_2);
			return;
		}
	}
}