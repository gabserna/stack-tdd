function rpn(expression) {
  const stack = [];
  const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b
  };

  expression.split(" ").forEach(token => {
    if (operators[token]) {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(operators[token](a, b));
    } else {
      stack.push(parseFloat(token));
    }
  });

  return stack.pop();
}

rpn("3 5 +"); // Resultado: 8
rpn("4 5 *"); // Resultado: 20
rpn("8 4 -"); // Resultado: 4
rpn("2 6 *"); // Resultado: 12
rpn("16 4 /"); // Resultado: 4
rpn("3 5 10 + *"); // Resultado: 45