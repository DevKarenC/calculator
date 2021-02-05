function calculator() {
  let decimalCount = 0;
  let num1 = "";
  let num2 = "";
  let operator = "";
  let solution = "";

  // TODO: 0. Before any numbers are clicked, the calculator should either display 0 or nothing.
  let display = document.querySelector(".display");

  // TODO: 1. When a number is clicked (attach event listener), that number should appear in display. (ex. 3)
  document.querySelectorAll(".calculator-key").forEach((key) => {
    key.addEventListener("click", handleKeys);
  });

  function handleKeys() {
    function displayNumber(value) {
      // TODO: 2. If another number is clicked, it should append to the previous number.
      display.textContent += value;
    }
    if (this.classList.contains("numbers")) {
      if (solution || display.textContent === "Not a Number") {
        display.textContent = "";
        if (num1 === "") {
          // TODO: 1b. Zeros cannot be consecutive UNLESS there is another number in front.
          if (display.textContent === "" && this.textContent === "0") {
            displayNumber(this.textContent);
          } else if (display.textContent === "0" && this.textContent === "0") {
            return;
          } else if (display.textContent === "0" && this.textContent === ".") {
            decimalCount++;
            displayNumber(this.textContent);
          } else if (display.textContent === "0" && this.textContent !== "0") {
            display.textContent = "";
            displayNumber(this.textContent);
          }
          // TODO: 1c. There cannot be more than one decimal point in a number.
          else if (decimalCount > 0 && this.textContent === ".") {
            return;
          }
          // TODO: 1d. If a decimal point is clicked without any numbers in display, it should display "0."
          else if (decimalCount === 0 && this.textContent === ".") {
            decimalCount++;
            if (display.textContent !== "") {
              displayNumber(this.textContent);
            } else {
              displayNumber(`0${this.textContent}`);
            }
          } else {
            displayNumber(this.textContent);
          }
        }
        // TODO: 4. When a number is clicked after an operator has been clicked, the calculator should display the new number (num2).
        else if (num1 !== "" && num2 === "") {
          decimalCount = 0;
          // console.log(decimalCount);
          if (display.textContent === "" && this.textContent === "0") {
            displayNumber(this.textContent);
          } else if (display.textContent === "0" && this.textContent === "0") {
            return;
          } else if (display.textContent === "0" && this.textContent !== "0") {
            display.textContent = "";
            displayNumber(this.textContent);
          } else if (decimalCount > 0 && this.textContent === ".") {
            return;
          } else if (
            decimalCount === 0 &&
            display.textContent === "" &&
            this.textContent === "."
          ) {
            decimalCount++;
            displayNumber(`0${this.textContent}`);
          } else {
            displayNumber(this.textContent);
          }
        }
      } else {
        if (num1 === "") {
          // TODO: 1b. Zeros cannot be consecutive UNLESS there is another number in front.
          if (display.textContent === "" && this.textContent === "0") {
            displayNumber(this.textContent);
          } else if (display.textContent === "0" && this.textContent === "0") {
            return;
          } else if (display.textContent === "0" && this.textContent === ".") {
            decimalCount++;
            displayNumber(this.textContent);
          } else if (display.textContent === "0" && this.textContent !== "0") {
            display.textContent = "";
            displayNumber(this.textContent);
          }
          // TODO: 1c. There cannot be more than one decimal point in a number.
          else if (decimalCount > 0 && this.textContent === ".") {
            return;
          }
          // TODO: 1d. If a decimal point is clicked without any numbers in display, it should display "0."
          else if (decimalCount === 0 && this.textContent === ".") {
            decimalCount++;
            if (display.textContent !== "") {
              displayNumber(this.textContent);
            } else {
              displayNumber(`0${this.textContent}`);
            }
          } else {
            displayNumber(this.textContent);
          }
        }
        // TODO: 4. When a number is clicked after an operator has been clicked, the calculator should display the new number (num2).
        else if (num1 !== "" && num2 === "") {
          decimalCount = 0;
          // console.log(decimalCount);
          if (display.textContent === "" && this.textContent === "0") {
            displayNumber(this.textContent);
          } else if (display.textContent === "0" && this.textContent === "0") {
            return;
          } else if (display.textContent === "0" && this.textContent !== "0") {
            display.textContent = "";
            displayNumber(this.textContent);
          } else if (decimalCount > 0 && this.textContent === ".") {
            return;
          } else if (
            decimalCount === 0 &&
            display.textContent === "" &&
            this.textContent === "."
          ) {
            decimalCount++;
            displayNumber(`0${this.textContent}`);
          } else {
            displayNumber(this.textContent);
          }
        }
      }
    }
    // TODO: 4b. When there are two numbers stored and either "=" or a math operator is clicked, it should display the output of the math operation.
    else if (this.textContent === "+") {
      if (num1 === "") {
        num1 = display.textContent;
        console.log("I am num 1: " + num1);
        display.textContent = "";
        operator = this.textContent;
      } else if (num1 !== "" && num2 === "") {
        if (display.textContent) {
          num2 = display.textContent;
          if (num2 === "0") {
            display.textContent = "Not a Number";
            operator = "";
            num1 = "";
            num2 = "";
          } else {
            display.textContent = "";
            solution = operate(operator, num1, num2);
            displayNumber(solution);
            console.log("I am num 2: " + num2);
            console.log(solution);
            console.log(operator);
            operator = "+";
            num1 = "";
            num2 = "";
          }
        }
      }
    } else if (this.textContent === "-") {
      if (num1 === "") {
        num1 = display.textContent;
        console.log("I am num 1: " + num1);
        display.textContent = "";
        operator = this.textContent;
      } else if (num1 !== "" && num2 === "") {
        if (display.textContent) {
          num2 = display.textContent;
          if (num2 === "0") {
            display.textContent = "Not a Number";
            operator = "";
            num1 = "";
            num2 = "";
          } else {
            display.textContent = "";
            solution = operate(operator, num1, num2);
            displayNumber(solution);
            console.log("I am num 2: " + num2);
            console.log(solution);
            console.log(operator);

            operator = "-";
            num1 = "";
            num2 = "";
          }
        }
      }
    } else if (this.textContent === "×") {
      if (num1 === "") {
        num1 = display.textContent;
        console.log("I am num 1: " + num1);
        display.textContent = "";
        operator = this.textContent;
      } else if (num1 !== "" && num2 === "") {
        if (display.textContent) {
          num2 = display.textContent;
          if (num2 === "0") {
            display.textContent = "Not a Number";
            operator = "";
            num1 = "";
            num2 = "";
          } else {
            display.textContent = "";
            solution = operate(operator, num1, num2);
            displayNumber(solution);
            console.log("I am num 2: " + num2);
            console.log(solution);
            console.log(operator);
            operator = "×";
            num1 = "";
            num2 = "";
          }
        }
      }
    } else if (this.textContent === "÷") {
      if (num1 === "") {
        num1 = display.textContent;
        console.log("I am num 1: " + num1);
        display.textContent = "";
        operator = this.textContent;
      } else if (num1 !== "" && num2 === "") {
        if (display.textContent) {
          num2 = display.textContent;
          // TODO 10: Display error message when the user tries to divide by 0
          if (num2 === "0") {
            display.textContent = "Not a Number";
            operator = "";
            num1 = "";
            num2 = "";
          } else {
            display.textContent = "";
            solution = operate(operator, num1, num2);
            displayNumber(solution);
            console.log("I am num 2: " + num2);
            console.log("I am " + solution);
            console.log(operator);
            operator = "÷";
            num1 = "";
            num2 = "";
          }
        }
      }
    } else if (this.textContent === "=") {
      if (num1 === "") {
        num1 = display.textContent;
        console.log("I am num 1: " + num1);
        display.textContent = "";
      } else if (num1 !== "" && num2 === "") {
        // TODO: 5. If the equal sign is clicked before there are 2 numbers stored, it should just return the first number.
        if (display.textContent) {
          num2 = display.textContent;
          if (num2 === "0") {
            display.textContent = "Not a Number";
            operator = "";
            num1 = "";
            num2 = "";
          } else {
            display.textContent = "";
            solution = operate(operator, num1, num2);
            displayNumber(solution);
            console.log("I am num 2: " + num2);
            console.log(solution);
            console.log(operator);
            operator = "";
            num1 = "";
            num2 = "";
          }
        }
      }
    }
    // TODO: 6. C button should clear all the stored numbers, solution, and a operator. (reset)
    else if (this.textContent === "C") {
      display.textContent = "";
      decimalCount = 0;
      num1 = "";
      num2 = "";
      operator = "";
      solution = "";
    }
    // TODO: 7. +- button should append either positive or negative sign in front of a number
    else if (this.textContent === "+/-") {
      if (display.textContent !== "") {
        if (display.textContent[0] !== "-") {
          display.textContent = `-${display.textContent}`;
        } else if (display.textContent[0] === "-") {
          display.textContent = display.textContent.slice(1);
        }
      }
    }
    // TODO: 8. Backspace button should delete one number digit at a time
    else if (this.textContent === "←") {
      if (display.textContent === "Not a Number") {
        display.textContent = "";
      } else if (
        display.textContent.length === 2 &&
        display.textContent[0] === "-"
      ) {
        display.textContent = "";
      } else if (display.textContent !== "") {
        display.textContent = display.textContent.slice(
          0,
          display.textContent.length - 1
        );
      }
    }
  }
}

calculator();

// TODO: 9. Add keyboard support
