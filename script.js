function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function operate(operation, x, y) {
  if (operation === "+") {
    return add(x, y);
  } else if (operation === "-") {
    return subtract(x, y);
  } else if (operation === "*") {
    return multiply(x, y);
  } else if (operation === "/") {
    return divide(x, y);
  }
}

let firstOperand = null;
let secondOperand = null;
let result = null;
let firstOperator = null;
let secondOperator = null;
let displayValue = "0";
const buttons = document.querySelectorAll("button");

function updateDisplay() {
  const display = document.getElementById("display");
  display.textContent = displayValue;
}

updateDisplay();

function clickButton() {
  buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
      if (btn.classList.contains("number")) {
        inputOperand(btn.value);
        updateDisplay();
      } else if (btn.classList.contains("operator")) {
        inputOperator(btn.value);
      } else if (btn.classList.contains("equal")) {
        inputEquals();
        updateDisplay();
      } else if (btn.classList.contains("clear")) {
        clearDisplay();
        updateDisplay();
      }
    });
  });
}

clickButton();

function inputOperand(operand) {
  if (firstOperator === null) {
    if (displayValue === "0" || displayValue === 0) {
      //1st click - first operand input
      displayValue = operand;
    } else if (displayValue === firstOperand) {
      //start new operation after inputEquals()
      displayValue = operand;
    } else {
      displayValue += operand;
    }
  } else {
    //3rd/5th click - inputs secondOperand
    if (displayValue === firstOperand) {
      displayValue = operand;
    } else {
      displayValue += operand;
    }
  }
}

function inputOperator(operator) {
  if (firstOperator != null && secondOperator === null) {
    //4th click - handles input of second operator
    secondOperand = displayValue;
    secondOperator = operator;
    result = operate(firstOperator, +firstOperand, +secondOperand);
    displayValue = result.toString();
    firstOperand = result;
    result = null;
  } else if (firstOperator != null && secondOperator != null) {
    //6th click
    secondOperand = displayValue;
    result = operate(secondOperator, +firstOperand, +secondOperand);
    secondOperator = operator;
    displayValue = result.toString();
    firstOperand = result;
    result = null;
  } else {
    //2nd click handles first operator input
    firstOperator = operator;
    firstOperand = displayValue;
  }
}

function inputEquals() {
  if (firstOperator === null) {
    return;
  } else if (secondOperator != null) {
    //handle final result
    secondOperand = displayValue;
    result = operate(secondOperator, +firstOperand, +secondOperand);
    displayValue = result.toString();
    firstOperand = result;
    secondOperand = null;
    firstOperator = null;
    secondOperator = null;
    result = null;
  } else {
    //handle first operation
    secondOperand = displayValue;
    result = operate(firstOperator, +firstOperand, +secondOperand);
    displayValue = result;
    firstOperand = displayValue;
    secondOperand = null;
    firstOperator = null;
    secondOperator = null;
    result = null;
  }
}

function clearDisplay() {
  displayValue = "0";
  firstOperand = null;
  secondOperand = null;
  firstOperator = null;
  secondOperator = null;
  result = null;
}
