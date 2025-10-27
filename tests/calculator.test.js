const { sum, divide } = require('../calculator'); 

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('divide 6 / 2 to equal 3', () => {
  expect(divide(6, 2)).toBe(3);
});

test('divide by zero should throw error', () => {
  expect(() => divide(5, 0)).toThrow('Ділення на нуль неможливе');
});