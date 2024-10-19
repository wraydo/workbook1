"use strict";

let name1 = "Fred Rogers";

let spaceIndex = name1.indexOf(" ");
let firstName = name1.substring(0, spaceIndex);
let lastName = name1.substring(spaceIndex + 1);

console.log("Name " + name1);
console.log("First Name: " + firstName);
console.log("Last Name: " + lastName);
console.log(+spaceIndex)

function parseAndDisplayName(name1){
   
    let spaceIndex = name1.indexOf(" ");
    let firstName = name1.substring(0, spaceIndex);
    let lastName = name1.substring(spaceIndex + 1);

    console.log("Name " + name1);
    console.log("First Name: " + firstName);
    console.log("Last Name: " + lastName);
    console.log(+spaceIndex)
}

parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");
// console.log("parseAndDisplayName")









