Prato = function(nome, preco) {
	this.nome = nome;
	this.preco = preco;
	this.calorias = nome.length * 17;
	this.proteinas = nome.length * 5;
	this.lipidos = nome.length * 3;
	this.hidratos = nome.length * 10;
	this.tempo = nome.length * 0.5;
}

PratoImagem = function(nome, preco, imagem) {
	this.prato = new Prato(nome, preco);
	this.imagem = imagem;
}

var listaPratos = [];
var pratoSelecao = 0;

var caloryThreshold = 10;

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

function AdicionarPratoImagem(nome, preco, imagem) {
	pratoSelecao = new PratoImagem(nome, preco, imagem);
}

function ProcessSelection(nome, preco, imagem) {
	AdicionarPratoImagem(nome, preco, imagem);
	window.location.href = "descricao.html";
}