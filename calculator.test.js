const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator(1, 2)).toBe(3);
});
