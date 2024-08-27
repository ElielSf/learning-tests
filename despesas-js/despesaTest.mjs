import Despesas from "./despesa.mjs";

function verificaResultado(esperado, obtido, mensagem) {
  if (typeof esperado != typeof obtido) {
    console.log(
      `❌  Falhou, tipo de dados esperado: ${typeof esperado} \ntipo de dados obtido: ${typeof obtido}`
    );
    return;
  }
  if (esperado === obtido) {
    console.log(`✔️  Ok, '${mensagem}' passou no teste`);
    return;
  } else {
    console.log(
      `❌  Falhou, '${mensagem}' não passou no teste. \nEsperado: ${esperado}, Obtido: ${obtido}`
    );
  }
}

const salario = 2000;

// Passando o salário como argumento para o construtor
const despesa = new Despesas(salario);

// Testando as funções
verificaResultado(
  salario,
  despesa.salarioReal(),
  "01 - Teste para verificar o salário base"
);
verificaResultado(
  "1850",
  despesa.contaLuz(150),
  "02 - Teste para verificar a conta de luz"
);
verificaResultado(
  1750,
  despesa.contaAgua(100),
  "03 - Teste para verificar a conta de água"
);
verificaResultado(
  1700,
  despesa.contaGas(50),
  "04 - Teste para verificar a conta de gás"
);
verificaResultado(
  1250,
  despesa.moradia(450),
  "05 - Teste para verificar a conta de moradia"
);
verificaResultado(
  1050,
  despesa.IPVA(200),
  "06 - Teste para verificar o valor do IPVA"
);
verificaResultado(
  750,
  despesa.compraMes(300),
  "07 - Teste para verificar o valor das compras do mês"
);
verificaResultado(
  300,
  despesa.faturas(450),
  "08 - Teste para verificar o total das faturas do mês"
);
verificaResultado(
  0,
  despesa.impostoRenda(300),
  "09 - Teste para verificar o imposto de renda"
);
