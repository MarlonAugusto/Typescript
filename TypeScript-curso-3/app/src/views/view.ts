import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

export abstract class View<T> {
  // Classe asbtrata não pode ser instancionada, somente a classe filha poderá ser instancionada

  // Elemento do HTML
  protected element: HTMLElement;

  //removido: private escapar = false;

  // Este elemento será o que foi puxado do HTML, que foi passado no parametro do construtor
  constructor(selector: string) {
    //removido: (selector: string, escapar?: boolean) {
    const element = document.querySelector(selector); // vai verificar se o elemento passado existe no HTML (id/class sas coisas)
    if (element) {
      this.element = element as HTMLElement;
    } else {
      throw Error(`Seletor ${selector} não existe no DOM. Verifique!`);
    }

    //removido: if (escapar) {this.escapar = escapar;}
  }

  public update(model: T): void {
    let template = this.template(model);
    // removido: if (this.escapar) {template = template.replace(/<script>[\s\S]*?<\/script>/, "");}
    this.element.innerHTML = template;
  }

  protected abstract template(model: T): string;
}
