function sum(num1, num2) {
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