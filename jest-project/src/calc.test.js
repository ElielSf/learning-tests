const { sum, subtraction, multiplication, division, potentiation, squareRoot, remainder } = require("./calc");

test("Testando a soma", () => {
  expect(sum(5, 5)).toBe(10);
  expect(sum(5, -6)).toBe(-1);
  expect(sum(-0.5, 0.6)).toBeCloseTo(0.1);
  expect(sum(0.5, 0.6)).toBeCloseTo(1.1);
  expect(sum(0, 4)).toBe(4);

  expect(() => sum(null, 1)).toThrow("Entrada inválida.");
  expect(() => sum(1, null)).toThrow("Entrada inválida.");
  expect(() => sum(null, null)).toThrow("Entrada inválida.");

  expect(() => sum(2, undefined)).toThrow("Entrada inválida.");
  expect(() => sum(undefined, 2)).toThrow("Entrada inválida.");
  expect(() => sum(undefined, undefined)).toThrow("Entrada inválida.");
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
