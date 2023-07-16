export function logarTempoDeExecucao(emSegundos: boolean = false) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args: Array<any>) /*ou (...args: any[]) */ {
      let divisor = 1;
      let unidade = "milisegundos";
      if(emSegundos){
        divisor = 1000;
        unidade = "segundos";
      }
      const t1 = performance.now();
      const retorno = metodoOriginal.apply(this, args); // this executa este metodo todo e manda os parametros do args
      const t2 = performance.now();
      console.log(`${propertyKey}, tempo de execução: ${(t2 - t1) / divisor} ${unidade}.`);
      retorno;
    };

    return descriptor;
  };
}
