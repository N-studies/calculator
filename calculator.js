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
}
function clear(arr) { 
  return arr.splice(0, arr.length);
}

function firstValue(arr,btn) {
   arr.push(btn.textContent)
   return Number(arr.join(""))
}

function secondValue(number) {
  // How do we get the second value?
}

function storage(arr,btn) {
  // Use this to push items from button event listener to an array
  arr.push(btn.textContent)
}
let screen = document.querySelector(".screen")
let numberStore1 = []
let numberStore2 = []
let operation
let storedValue 
let storedValue2
let result
const buttons = document.querySelectorAll("button")
buttons.forEach((button) => { 
button.addEventListener("click",() => {
 if (button.className == "number" && operation == undefined) {
  storedValue = firstValue(numberStore1,button)
  screen.textContent = storedValue
 
 }
 if (button.className == "clear") {
  clear(numberStore1)
  clear(numberStore2)
  operation = undefined
  screen.textContent = 0
  storedValue = 0
 }
 if (button.className == "operations") {
  operation = button.textContent
  

 }
 if (button.className == "number" && operation != undefined && storedValue != 0) {
  storedValue2 = firstValue(numberStore2,button)
  screen.textContent = storedValue2
 }

 if (button.className == "equal") {
  result = operate(storedValue, storedValue2, operation)
  screen.textContent = result
  storedValue = result
  clear(numberStore2)

}



 console.log(numberStore1)
 console.log(numberStore2)
 console.log(storedValue)
})


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
