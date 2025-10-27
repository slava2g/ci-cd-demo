// Простий калькулятор з кількома функціями

// Додавання
function sum(a, b) {
  return a + b;
}

// Віднімання
function subtract(a, b) {
  return a - b;
}

// Множення
function multiply(a, b) {
  return a * b;
}

// Ділення (з перевіркою на 0)
function divide(a, b) {
  if (b === 0) {
    throw new Error('Ділення на нуль неможливе');
  }
  return a / b;
}

// Перевірка, чи число парне
function isEven(num) {
  return num % 2 === 0;
}

function isPositive(num) {
  return num > 0;
}

// Експортуємо всі функції, щоб можна було тестувати
module.exports = { sum, subtract, multiply, divide, isEven, isPositive };

