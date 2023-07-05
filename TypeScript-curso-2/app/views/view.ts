export abstract class View<T> {
  // Classe asbtrata não pode ser instancionada, somente a classe filha poderá ser instancionada

  // Elemento do HTML
  protected element: HTMLElement;

  private escapar = false;

  // Este elemento será o que foi puxado do HTML, que foi passado no parametro do construtor
  constructor(selector: string, escapar?: boolean) {
    const element = document.querySelector(selector); // vai verificar se o elemento passado existe no HTML (id/class sas coisas)
    if (element) {
      this.element = element as HTMLElement;
    } else {
      throw Error(`Seletor ${selector} não existe no DOM. Verifique!`);
    }

    if (escapar) {
      this.escapar = escapar;
    }
  }

  public update(model: T): void {
    let template = this.template(model);
    if (this.escapar) {
      // se ele for true
      template = template.replace(/<script>[\s\S]*?<\/script>/, "");
    }
    this.element.innerHTML = template;
  }

  //  metodo criado para implementação na classe filho
  //  template(model: T): string{
  //      throw Error("Classe filha precisa implementar o método template, sobrescrevendo este de forma que irá utilizar.");
  //  }

  //  mesma coisa do de cima, porém abstract agora
  protected abstract template(model: T): string;
}
