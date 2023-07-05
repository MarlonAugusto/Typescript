export class Negociacao {
  // private _data: Date;
  // private _quantidade: number;
  // private _valor: number;

  // está fazendo por de baixo dos panos a atribuição que está comentado acima
  constructor(
      // inves de criar private e dps criar os Gets para ter os
      // valores, melhor criar public readonly, pois não poderá fazer
      // alterações mas todos terão acesso à leitura dos dados
    private _data: Date, // desta forma pois com readonly há chance de alterar um valor com .setDate
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  get volume(): number {
    return this.quantidade * this.valor;
  }

  // está passando uma copia do valor real, assim se alterarem esta copia, 
  // o valor real seguirá intacto
  get data(): Date {
    const data = new Date(this._data.getDate())
    return data;
  }
}
