class Calculadora {
    soma(num1, num2) {
        return num1 + num2;
    };

    subtracao(num1, num2) {
        return num1 - num2;
    };

    multiplicacao(num1, num2) {
        return num1 * num2;
    };

    divisao(dividendo, divisor) {
        if (divisor === 0) {
            return "Erro: Divisão por 0 não permitida."
        }
        return dividendo / divisor;
    };

    potenciacao(base, expoente) {
        return Math.pow(base, expoente);
    };

    raizQuadrada(num) {
        if (num < 0) {
            return "Erro: Raiz quadrada de número negativo não permitida."
        }
        return Math.sqrt(num);
    }
}

export default Calculadora