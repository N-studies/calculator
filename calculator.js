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

function operate(a, b, operation = "+") {
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

// ----clear
}
function clearAll(arr,div) {
  arr.splice(0, arr.length);
  div.textContent = 0;
  return
  
}

function clearStor(arr) {
  arr.splice(0, arr.length);
  return;
}

//----values
function value(arr, btn) {
  arr.push(btn.textContent);
  return Number(arr.join(""));
}



//---- operations
let operator;




//-----------------
let result
let initValue
;
let numberStorage = [];
let screen = document.querySelector(".screen");


const numbers = document.querySelectorAll(".number")
numbers.forEach((number) => {
  number.addEventListener("click",() =>  {
   screen.textContent = value(numberStorage,number)
  })
}) 


const operations = document.querySelectorAll(".operations")
operations.forEach((operation) => { 
  operation.addEventListener("click", () => {
    operator = operation.textContent;
    initValue = screen.textContent
    clearStor(numberStorage)
    console.log(operator,initValue)
  })
})

const clear = document.querySelector(".clear")
clear.addEventListener("click", () => {
  numberStorage.splice(0, numberStorage.length);
  screen.textContent = 0;
})




/* ------Logic for old version 
let storedValue = 0;
let firstValue = 0;
let secondValue = 0;
let numberStorage = [];
let screen = document.querySelector(".screen");

let operation;
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.className == "number") {
      numberStorage.push(button.textContent);
      screen.textContent = numberStorage.join("");
    } else if (button.className == "operations" && firstValue == 0) {
      operation = button.textContent;
      firstValue = Number(numberStorage.join(""));
      clear(numberStorage);
    } else if (
      button.className == "equal" ||
      button.className == "operations"
    ) {
      secondValue = Number(numberStorage.join(""));
      clear(numberStorage);
      screen.textContent = operate(firstValue, secondValue, operation);
      console.log(operate(firstValue, secondValue, operation));
      console.log(numberStorage)
      numberStorage.push(operate(firstValue, secondValue, operation));
      clear(numberStorage);
      firstValue = operate(firstValue, secondValue, operation);
      if (button.classList == "operations") {
        operation = button.textContent;
      }
    } else if ((button.className = "clear")) {
      clear(numberStorage);
      firstValue = 0;
      secondValue = 0;
      screen.textContent = 0;
      storedValue = 0;
    }
  });
}); */
