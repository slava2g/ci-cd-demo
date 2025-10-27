function sum(a, b) {
  return a + b;
}

// Ділення
function divide(a, b) {
  if (b === 0) {
    throw new Error('Ділення на нуль неможливе');
  }
  return a / b;
}

// Можна додати інші функції: subtract, multiply, isEven
module.exports = { sum, divide };