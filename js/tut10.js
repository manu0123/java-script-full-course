console.log("tut10.js");
// function greet(name,work,salary,father,mother,sister) {
//     let result = console.log(`hello my name is ${name}.I am doing ${work}.
//     my salary is ${salary}.my father name is ${father},mother name
//     is ${mother}and sister name is ${sister}.`)
//     return result;
// }
// let name = 'mandeep thakur';
// let work = 'It developer';
// let salary = '45335';
// let father = 'surinder singh';
// let mother = 'suman lata ';
// let sister = 'anajali';
// let valu = greet(name,work,salary,father,mother,sister);

// const obj = {
//     name:"rajkumar",
//     game:function () {
//         return "GTA";
        
//     }
// }
// console.log(obj.game());

// arr = ['aman','ram','sita','ravan'];
// arr.forEach(function (element,array) {
    

//     console.log(element,array)
    
// });
    
// SCOPE
let i = 45;
console.log(45);
function manu(duty) {
 let i = 8;
console.log(i);
    return `my duty is on ${duty}`;
}
console.log(manu('amritsar'),i);
