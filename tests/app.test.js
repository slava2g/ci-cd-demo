const { sum } = require('../src/app');

test('додавання 1 + 2 дорівнює 3', () => {
  expect(sum(1, 2)).toBe(3);
});