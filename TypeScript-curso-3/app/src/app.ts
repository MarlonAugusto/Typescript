import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController();
const form = document.querySelector(".form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    controller.adiciona();
  });
} else {
  throw Error(
    "Não foi possível inicializar a aplicação. Verifique se o FORM existe."
  );
}
//const negociacoesView = new NegociacoesView('#negociacoes-view')
//const template = negociacoesView.template();
//console.log(template);
