const { sum, subtract, multiply, divide, isEven } = require('../src/app');

describe('Тестуємо калькулятор', () => {
  test('додавання 2 + 3 дорівнює 5', () => {
    expect(sum(2, 3)).toBe(5);
  });

  test('віднімання 5 - 2 дорівнює 3', () => {
    expect(subtract(5, 2)).toBe(3);
  });

  test('множення 4 × 3 дорівнює 12', () => {
    expect(multiply(4, 3)).toBe(12);
  });

  test('ділення 10 / 2 дорівнює 5', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('ділення на 0 викликає помилку', () => {
    expect(() => divide(5, 0)).toThrow('Ділення на нуль неможливе');
  });

  test('число 8 — парне', () => {
    expect(isEven(8)).toBe(true);
  });

  test('число 7 — непарне', () => {
    expect(isEven(7)).toBe(false);
  });
});
