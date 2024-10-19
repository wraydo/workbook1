"use strict";
function test1() {
 let a = 10;
 if (a > 5) {
 a = 7;
 }
 console.log("a = " + a);
}
test1();
//  a=7



"use strict";
function test2B() {
 if (1 == 1) {
 let a = 5;
 }
 console.log("a = " + a);
}
test2B();
// Error

"use strict";
let a = 4;
function test3() {
 a = 3;
 console.log("a = " + a);
}
test3();
console.log("a = " + a);
// a = 3
// a = 3


"use strict";
let a = 4;
function test4() {
 let a = 7;
 console.log("a = " + a);
}
test4();
console.log("a = " + a);
// a = 7
// a = 4


"use strict";
let a = 4;
function test5() {
 a = 7;
 function again() {
 let a = 8;
 console.log("a = " + a);
 }
 again();
 console.log("a = " + a);
}
test5();
console.log("a = " + a); 

//8,7,7



"use strict";
let a = 4;
function test6() {
 let a = 7;
 function again() {
 let a = 8;
 console.log("a = " + a);
 }
 again();
 console.log("a = " + a);
}
test6();
console.log("a = " + a);  

// a=8,7,4

