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

let firstOperator;
let secondOperator;
let result;
let operand;
let displayValue = document.querySelector("#display");

document.querySelectorAll(".number").forEach((btn) => {
  btn.addEventListener("click", function () {
    //call display function with text content
    showDisplay(btn.textContent);
  });
});

document.querySelectorAll(".operator").forEach((btn) => {
  btn.addEventListener("click", function () {
    if (firstOperator === undefined) {
      firstOperator = +displayValue.textContent;
      operand = btn.textContent;
      clearDisplay();
      return;
    } else {
      secondOperator = +displayValue.textContent;
      clearDisplay();
      result = operate(operand, firstOperator, secondOperator);
      showDisplay(result);
      clearDisplay();
      firstOperator = result;
      operand = btn.textContent;
      return;
    }
    /* Put the display value in the first operator and store the clicked operand. 

       If the first operator is full, put the number in the second operator, run the operate function,
       put the result of the operation in the first operator, store the new operator in operator. 
       
       Call clear display function*/
  });
});

function clearDisplay() {
  displayValue.textContent = "";
}

function showDisplay(x) {
  displayValue.textContent += x;
}
