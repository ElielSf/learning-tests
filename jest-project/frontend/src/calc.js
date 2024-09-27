function isUndefined(num1, num2) {
    if (num1 === undefined || num2 === undefined) {
        return true;
    }
    return false;
}

function isNull(num1, num2) {
    if (num1 === null || num2 === null) {
        return true;
    }
    return false;
}

function sum(num1, num2) {
    if (isNull(num1, num2) || isUndefined(num1, num2)) {
        throw new Error("Entrada inválida.");
    }
    return num1 + num2;
}

function subtraction(num1, num2) {
    return num1 - num2;
}

function multiplication(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    return num1 / num2;
}

function potentiation(num1, num2) {
    return num1 ** num2;
}

function squareRoot(num) {
    return Math.sqrt(num);
}

function remainder(num1, num2) {
    return num1 % num2;
}
  
module.exports = { sum, subtraction, multiplication, division, potentiation, squareRoot, remainder };