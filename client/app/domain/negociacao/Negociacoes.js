class Negociacoes {
	constructor() {
		this._negociacoes = [];
	}

	adiciona(negociacao) {
		this._negociacoes.push(negociacao);
	}

	//programação defensiva: retornando um novo array com base no array de negociacoes
	paraArray() {
		return [].concat(this._negociacoes);
	}
}
