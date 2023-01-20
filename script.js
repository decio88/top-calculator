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
