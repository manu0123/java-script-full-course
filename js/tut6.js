console.log("tut6.js");

const name = "mandeep";
const greeting = "Good Morning ";
console.log(greeting + name);

let html = "<h1>This is heading</h1>"+
"<p>This is only use in java script</p>";
html = html.concat("this"," ram");
// console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
// console.log(html[1]);
// console.log(html.indexOf("java"));
// console.log(html.lastIndexOf("use"));
// console.log(html.charAt(5));
// console.log(html.endsWith('ram'));
// console.log(html.includes('ram'));
// console.log(html.substring(0,4));
// console.log(html.substring(0,4));  
// console.log(html.slice(0,4));
// // substring and slice are same 
// console.log(html.split(''));
console.log(html.replace("This","it"));



let sister = "Anjali";
let brother = "suraj";
let myDesign = `<h1>hello ${name}</h1>
<p>My sister name is ${sister}and my brother name is ${brother}</p1>`;
console.log(myDesign);
document.body.innerHTML= myDesign;

