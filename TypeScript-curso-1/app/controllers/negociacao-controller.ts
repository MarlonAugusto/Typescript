import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();

  constructor() {
    this.inputData = document.querySelector("#data");
    this.inputQuantidade = document.querySelector("#quantidade");
    this.inputValor = document.querySelector("#valor");
  }

  adiciona(): void {
    // pega a versão convertida e trabalha em cima dela
    const negociacao = this.criaNegociacao();
    this.negociacoes.adicionar(negociacao);
    console.log(this.negociacoes.listar());
    this.limparFormulario();
  }

  criaNegociacao(): Negociacao {
    // cria toda a função, converte e afins
    const exp = /-/g; // pegando os "-" globais
    const date = new Date(this.inputData.value.replace(exp, ",")); // trocando os "-" por "," que é o atributo de um Date()
    const quantidade = parseInt(this.inputQuantidade.value);
    const valor = parseFloat(this.inputValor.value);
    return new Negociacao(date, quantidade, valor);
  }

  limparFormulario(): void {
    this.inputQuantidade.value = '';
    this.inputValor.value = '';
    this.inputData.value = '';
    this.inputData.focus(); // Depois de limpar volta pra esse campo
  }
}
