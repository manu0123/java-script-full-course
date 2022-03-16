console.log('tut8.js');
const age = 45;
// if(age==19){
//     console.log("age is 19");
// }
// else if(age==65){
//     console.log('age is 65');
// }
// else{
//     console.log("age is not 19");
// }

// const variable = 45;
// if(typeof variable !=='undefined'){
//     console.log('variable is defined');
// }
// else{
//     console.log('variable is undefined');
// }
// const doesDrive =true;
// if(doesDrive && age>18){
//     console.log("you can drive the car");
// }
// else{
//     console.log("you cannot be drive a car")
// }
// // && operates are if both conditions are true then they are
// // exacute and || operates are if only one condition is true 
// // then this is exucute

// // turnary operator
// // console.log(age==45?'age is 45':'age is not 45');

switch (age) {
    case 18:
        console.log('you are 18');
        break;
    case 27:
        console.log('you are 27');
        break;
    case 67:
        console.log('you are 67');
        break;

    default:
        console.log('you are unknown')
        break;
}
