var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { escapar } from "../decorators/escapar.js";
import { View } from "./view.js";
export class NegociacoesView extends View {
    template(model) {
        const valorGasto = [];
        let total = 0;
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
                ${model
            .listar()
            .map((negociacao) => {
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
                <td colspan='4' class="p-2">Total Investido: R$${(total =
            valorGasto.reduce((sum, curr) => sum + curr, 0))}</td>
            </tr>
        </table>
        `;
    }
    dataConverter(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
__decorate([
    escapar
], NegociacoesView.prototype, "template", null);
