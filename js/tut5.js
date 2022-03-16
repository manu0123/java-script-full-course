
console.log("tut5.js");
// TYPE CONVERSION AND TYPE COERCION 

// CONVERSION 
let myVar;
myVar =String(34);
console.log( myVar,typeof (myVar));
let booleanVar = String(true);
console.log(typeof booleanVar);

let array = String([45,34,54,54,45]);
console.log(array,typeof array);

// COERCION 
let mystr =Number("567");
let mynum = 45;
console.log(mystr+mynum); 
