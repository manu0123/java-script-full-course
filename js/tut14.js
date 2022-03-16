console.log('tut14.js');
/*
element selectors are two types
1.single element selectors
2.multi element selectors

*/
// 1.single element selectors
// let element = document.getElementById('myfirst');
// // element = element.className;
// // element = element.childNode;
// // element = element.parentNode;
// element.innerText ='harry is good boy';
// element.innerHTML ='<b>harry is good boy</b>';
// // element.style.color = 'red'
// console.log(element);
let sel = document.querySelector('#myfirst');
sel = document.querySelector('.child');
sel = document.querySelector('h1');
sel = document.querySelector('div');
sel.style.color = 'blue';
sel = document.querySelector('h1');
sel.style.color = 'blue';
// console.log(sel);


// MULTIELEMENT SELECTORS
let elems = document.getElementsByClassName('child');
elems = document.getElementsByTagName('div');
//  Array.from(elems).forEach(function(element){
//         console.log(element);
//  })
for (let index = 0; index < elems.length; index++) {
       const element = elems[index];
       console.log(elems);
elems = document.getElementsByTagName('text');
console.log(elems);
       
}
//  elems.style.color = 'red';
console.log(elems[0]);