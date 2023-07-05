import { Negociacao } from "./negociacao.js";

// Mesma coisa
// Negociacao[]
// Array<Negociacao>

export class Negociacoes {
  private negociacoes: Negociacao[] = [];

  adicionar(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }
  //    ReadonlyArray ~ Mesma situação embaixo
  listar(): readonly Negociacao[] {
    return [...this.negociacoes];
  }
}
