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


let value1 = 0;
let value2 = 0;
let storage = [];
let operation;
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.className == "number") {
      storage.push(Number(button.textContent));
      value1 = storage.join("");
      
    } else if (button.classList == "clear") {
      clear(storage);

      //else if operator,delete storage and use it for value2 
    } else if (button.className == "operations") {
      clear(storage);
      operation = button.textContent;


    }
     // else if, when equal is pressed operate
    else if (button.classList == "equal") {
      operate(value1,value2,operation);
      
      
    }
   
    //console.log(button);
    console.log(storage);
    
    console.log(value1);
    console.log(value2);
    operate(value1,value2,operation);

  });
});
