const { sum, subtraction, multiplication, division } = require("./calc");

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
