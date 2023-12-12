const sum = (a, b) => a + b;

const multiply = (a, b) => a * b;

const divide = (a, b) => (b === 0 ? null : a / b);

module.exports = {
  sum,
  multiply,
  divide,
};
