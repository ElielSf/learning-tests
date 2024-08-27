class Despesas {

  constructor(salario) {
    this.salario = salario;
    this.salarioBase = salario;
  }

  salarioReal() {
    return this.salarioBase;
  }

  contaLuz(despesa) {
    this.salario -= despesa;
    return this.salario;
  }

  contaAgua(despesa) {
    this.salario -= despesa;
    return this.salario;
  }

  contaGas(despesa) {
    this.salario -= despesa;
    return this.salario;
  }

  moradia(despesa) {
    this.salario -= despesa;
    return this.salario;
  }

  IPVA(despesa) {
    this.salario -= despesa;
    return this.salario;
  }

  compraMes(despesa) {
    this.salario -= despesa;
    return this.salario;
  }

  faturas(despesa) {
    this.salario -= despesa;
    return this.salario;
  }

  impostoRenda(despesa) {
    if ((this.salarioBase * 12) >= 28.559) {
      this.salario -= despesa;
    }
    return this.salario;
  }
}

export default Despesas;