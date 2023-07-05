import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes>{
  

  protected template(model: Negociacoes): string {
    const valorGasto: Array<number> = [];
    let total: number = 0;

    return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>TOTAL</th>
                </tr>
            </thead>
            <tbody>
                ${model.listar().map((negociacao) => {
                    return `
                    <tr>
                        <td> ${this.dataConverter(negociacao.data)}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                        <td>${negociacao.quantidade * negociacao.valor}</td>
                        ${valorGasto.push(negociacao.quantidade * negociacao.valor)}
                    </tr>
                    `;
                  })
                  .join("")}
            </tbody>
            <tr class="">
                <td colspan='4' class="p-2">Total Investido: R$${total = valorGasto.reduce((sum, curr) => sum + curr, 0)}</td>
            </tr>
        </table>
        `;
    }

    private dataConverter(data: Date): string{
        return new Intl.DateTimeFormat()
        .format(data)
    }

}
