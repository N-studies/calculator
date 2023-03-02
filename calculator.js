// Calculator operation
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(a, b, operation) {
  switch (operation) {
    case "+":
      return add(a, b);
      break;
    case "-":
      return subtract(a, b);
      break;
    case "*":
      return multiply(a, b);
      break;
    case "/":
      return divide(a, b);
      break;
  }
}
function clear(arr) {
  if (arr.length != 0);
  {
    arr.splice(0, arr.length);
  }
}
let firstValue = 0;
let secondValue = 0;
let numberStorage = [];

let operation;
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.className == "number") {
      numberStorage.push(button.textContent);
    } else if (button.className == "operations") {
      operation = button.textContent;
      firstValue = Number(numberStorage.join(""));
      clear(numberStorage);
    } else if (button.className == "equal") {
      secondValue = Number(numberStorage.join(""));
      clear(numberStorage);
      console.log(operate(firstValue, secondValue, operation));
      numberStorage.push(operate(firstValue, secondValue, operation));
    } else if ((button.className = "clear")) {
      clear(numberStorage);
      firstValue = 0;
      secondValue = 0;
    }
  });
});

// 1) firstValue 2)operation 3) secondValue
