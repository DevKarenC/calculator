// basic math operators
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

// operate function takes an operator and 2 numbers and calls one of the basic math operator functions above
// TODO 11: Round answers to prevent overflow
function operate(operator, num1, num2) {
  if (operator === "+") {
    return +add(parseFloat(num1), parseFloat(num2)).toFixed(8);
  } else if (operator === "-") {
    return +subtract(parseFloat(num1), parseFloat(num2)).toFixed(8);
  } else if (operator === "×") {
    return +multiply(parseFloat(num1), parseFloat(num2)).toFixed(8);
  } else if (operator === "÷") {
    return +divide(parseFloat(num1), parseFloat(num2)).toFixed(8);
  }
}
