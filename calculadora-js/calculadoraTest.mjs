import Calculadora from "./calculadora.mjs";

const calculadora = new Calculadora();

function verificaResultado(esperado, real, mensagem) {
  if (esperado === real) {
    console.log(`OK, ${mensagem} passou.`);
  } else {
    console.log(
      `Falha, ${mensagem} não passou. Esperado: ${esperado}, Obtido: ${real}.`
    );
  }
}

verificaResultado(4, calculadora.soma(2, 2), "'01 - Testando Soma'");
verificaResultado(-2, calculadora.subtracao(2, 4), "'02 - Testando Subtração'");
verificaResultado(
  7,
  calculadora.multiplicacao(3.5, 2),
  "'03 - Testando Multiplicação'"
);
verificaResultado(6, calculadora.divisao(12, 2), "'04 - Testando Divisão'");
verificaResultado(
  16,
  calculadora.potenciacao(2, 4),
  "'05 - Testando Potenciação'"
);
verificaResultado(
  2,
  calculadora.raizQuadrada(4),
  "'06 - Testando Raiz Quadrada'"
);
