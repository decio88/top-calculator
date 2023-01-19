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

function operate(fun, x, y) {
  if (fun === "+") {
    return add(x, y);
  } else if (fun === "-") {
    return subtract(x, y);
  } else if (fun === "*") {
    return multiply(x, y);
  } else if (fun === "/") {
    return divide(x, y);
  } else {
    return "invalid input";
  }
}
