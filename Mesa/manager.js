Prato = function(nome, preco) {
	this.nome = nome;
	this.preco = preco;
	this.calorias = nome.length * 17;
	this.proteinas = nome.length * 5;
	this.lipidos = nome.length * 3;
	this.hidratos = nome.length * 10;
}

var listaPratos = [];

function AdicionarPrato(nome, preco) {
	listaPratos.push(new Prato(nome, preco));
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