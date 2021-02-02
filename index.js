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
function operate(operator, num1, num2) {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "×") {
    return multiply(num1, num2);
  } else if (operator === "÷") {
    return divide(num1, num2);
  }
}

let display = document.querySelector(".display");
let decimal = 0;
let operator = "";
let num1 = "";
let num2 = "";
let solution = "";

// display numbers on the calculator
function displayNumber(value) {
  display.textContent += value;
}

// add event listeners to the calculator buttons
function handleKeyPad() {
  // edge case 1: num1 cannot start with a zero
  if (display.textContent === "" && this.textContent === "0") {
    return;
  }
  // edge case 2: if decimal point is clicked before other numbers, 0 is appended
  if (display.textContent === "" && this.textContent === ".") {
    decimal++;
    displayNumber("0.");
  }
  // edge case 3: only one decimal point per number
  if (decimal === 0 && this.textContent === ".") {
    decimal++;
    displayNumber(this.textContent);
  }
  if (decimal >= 1 && this.textContent === ".") {
    return;
  }
  // handle number inputs
  if (this.classList.contains("numbers")) {
    displayNumber(this.textContent);
  }
  // handle operator inputs
  if (this.textContent === "+") {
    operator = "+";
    num1 = display.textContent;
    console.log("This is num1: " + num1);
    display.textContent = "";
    decimal = 0;
  }
  if (this.textContent === "-") {
    operator = "-";
    num1 = display.textContent;
    console.log("This is num1: " + num1);
    display.textContent = "";
    decimal = 0;
  }
  if (this.textContent === "×") {
    operator = "×";
    num1 = display.textContent;
    console.log("This is num1: " + num1);
    display.textContent = "";
    decimal = 0;
  }
  if (this.textContent === "÷") {
    operator = "÷";
    num1 = display.textContent;
    console.log("This is num1: " + num1);
    display.textContent = "";
    decimal = 0;
  }
  // handle evaluate input
  if (this.textContent === "=") {
    num2 = display.textContent;
    console.log("This is num2: " + num2);
    display.textContent = "";
    displayNumber(operate(operator, parseInt(num1), parseInt(num2)));
  }
}
