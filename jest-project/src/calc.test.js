const { sum, subtraction, multiplication, division, potentiation, squareRoot, remainder } = require("./calc");

test("Testando a soma", () => {
  expect(sum(5, 5)).toBe(10);
});

test("Testando a subtração", () => {
  expect(subtraction(5, 7)).toBe(-2);
});

test("Testando a multiplicação", () => {
  expect(multiplication(5, 5)).toBe(25);
});

test("Testando a divisão", () => {
  expect(division(12, 3)).toBe(4);
});

test("Testando a potenciação", () => {
  expect(potentiation(5, 3)).toBe(125);
});

test("Testando a raiz quadrada", () => {
  expect(squareRoot(4)).toBe(2);
});

test("Testando o resto da divisão", () => {
  expect(remainder(12, 3)).toBe(0);
});
