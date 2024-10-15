"use strict"

var payRate1 = 12.50
var payRate2 = 25.00
var payRate3 = 17.30

var hoursWorked1 = 20
var hoursWorked2 = 40
var hoursWorked3 = 45



var hoursWorked = 30
var totalPay = 0
console.log(hoursWorked)

if (hoursWorked>= 20 & hoursWorked < 40){
    totalPay = hoursWorked * payRate1
console.log(totalPay)
}else if (hoursWorked == 40){
    totalPay = hoursWorked * payRate2
    console.log(totalPay)

}

else if (hoursWorked>40){
totalPay = HoursWorked * (1.5 * payRate2)
console.log(totalPay)

}



