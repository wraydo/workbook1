"user strict"


var a = "101.1";
console.log(parseInt(a)) 
// Parseint 101
// Parsefloat 101.1
// Number 101.1
// unary result 101.1

console.log(parseFloat(a))
console.log(Number(+a))


// / Parseint 55
// Parsefloat 55
// Number 55
// unary result 55

var b = "55"
console.log(parseInt(b))
console.log(parseFloat(+b))
console.log(Number(b))

// Parseint 402
// Parsefloat 402
// Number NaN
// unary result NaN

var c = "402 steven"
console.log(parseInt(c))
console.log(parseFloat(c))
console.log(Number(c))
console.log(+c)


// Parseint NaN
// Parsefloat NaN
// Number NaN
// unary result NaN

var d = "Number 5 ";
console.log(parseInt(d))
console.log(parseFloat(d))
console.log(Number(d))
console.log(+d)

