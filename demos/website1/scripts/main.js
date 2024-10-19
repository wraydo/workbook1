"use strict";

let importantParagraph = document.getElementById("importantParagraph");
importantParagraph.style.backgroundColor = "yellow";
console.log(importantParagraph);

console.log("ready");

let daysInput = document.getElementById("daysInput");

let eTollCheckbox = document.getElementById("eTollCheckbox");

let gpsCheckbox = document.getElementById("gpsCheckbox");

let rAssistanceCheckbox = document.getElementById("rAssistanceCheckbox");

let over21RadioYes = document.getElementById("over21RadioYes");

let over21RadioNo = document.getElementById("over21RadioNo");

let carRentalCostSpan = document.getElementById("carRentalCostSpan");
let optionsRentalCostSpan = document.getElementById("optionsRentalCostSpan");
let under25SurchargeCostSpan = document.getElementById("under25SurchargeCostSpan");
let totalCostSpan = document.getElementById("totalCostSpan");

function booking() {
  const baserate = 29.99;
  const tollCharge = 3.95;
  const gpsCharge = 2.95;
  const roadsideCharge = 2.95;
  const under25Surcharge = 1.3;
  const rentalAmount = baserate * daysInput;
  let optionsAmount = 0;
  let under25Age = 0;

  if (eTollCheckbox.checked) {
    let sum = tollCharge * daysInput;
    optionsAmount = optionsAmount + sum;
  }
  if (gpsCheckbox.checked) {
    let sum = gpsCharge * daysInput;
    optionsAmount = optionsAmount + sum;
  }
  if (rAssistanceCheckbox.checked) {
    let sum = roadsideCharge * daysInput;
    optionsAmount = optionsAmount + sum;
  }
  if (over21RadioNo.checked) {
    let under25AgeAmount = baserate * under25Surcharge;
    under25Age = under25AgeAmount;
  }
  let totalAmount = rentalAmount + optionsAmount + under25Age;
  carRentalCostSpan.innerText = rentalAmount;
  optionsRentalCostSpan.innerText = optionsAmount;
  under25SurchargeCostSpan.innerText = under25Age;
  totalCostSpan.innerText = totalAmount;
}
