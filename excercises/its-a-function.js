"use strict";

function greeting() {
  console.log("Hello World");
}

greeting();

// function displayMyThemeSong (){
//     console.log("Bad")
//   }

function addNumbers(num1, num2) {
  console.log(num1 + "+" + num2 + "=" + (num1 + num2));
}

addNumbers(4, 4);

function isEven(num) {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
console.log(isEven(4))
console.log(isEven(7))