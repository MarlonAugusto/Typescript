// Mesma coisa
// Negociacao[]
// Array<Negociacao>
export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adicionar(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //    ReadonlyArray ~ Mesma situação embaixo
    listar() {
        return [...this.negociacoes];
    }
}
