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
  } else if (operator === "*") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  }
}

// console.log(operate("/", 10, 2));

// display numbers on the calculator
function display() {
  let decimal = 0;
  let displayScreen = document.querySelector(".display");
  let displayValue = 0;
  const numbers = Array.from(document.querySelectorAll(".numbers")).map(
    (number) =>
      number.addEventListener("click", () => {
        // edge case 1: numbers cannot start with a zero
        if (displayScreen.textContent === "" && number.textContent === "0") {
          return;
        }
        // edge case 2: if decimal point is clicked before other numbers, 0 is appended
        if (displayScreen.textContent === "" && number.textContent === ".") {
          displayScreen.textContent += "0.";
          decimal++;
        }
        // edge case 3: only one decimal point per number
        if (decimal === 0 && number.textContent === ".") {
          displayScreen.textContent += number.textContent;
          decimal++;
        }
        if (decimal >= 1 && number.textContent === ".") {
          return;
        }
        // console.log(number.textContent);
        displayScreen.textContent += number.textContent;
        console.log(displayScreen.textContent);
        displayValue = parseInt(displayScreen.textContent);
        // console.log(displayValue);
      })
  );
}

display();
