console.log('tut16.js');
// let element = document.createElement('li');
// console.log(element);
// element.className = 'child';
// element.id = 'createli';
// element.setAttribute('title','mandeep thakur');

// let ul = document.querySelector('ul.that');
// element.innerHTML ='This is created by mandeep thakur';
// ul.appendChild(element);
// console.log(ul);
// FOR CREATING
// let element = document.createElement('li');
// console.log(element);
// element.className= 'child';
// element.id = 'mandid';
// element.setAttribute('Title','my title');
// let text = document.createTextNode('This is created by mandeep thakur');
// element.appendChild(text);

// let ul = document.querySelector('ul.that');
// ul.appendChild(element);
// console.log(ul);

// // FOR REPLACING
// let elem2 = document.createElement('h3');
// elem2.id= 'elem2';
// elem2.className ='elem2';
// let tnode = document.createTextNode('HELLO');
// elem2.appendChild(tnode);
// element.replaceWith(elem2);



let element = document.createElement('li');
element.className = 'thakur';
element.id = 'rajput';
element.setAttribute('title','mytitle');
let textnode = document.createTextNode('my name is mandeep');
element.appendChild(textnode);
let ul = document.querySelector('ul.that');
ul.appendChild(element);


let elem2 = document.createElement('h2');
console.log(elem2);
elem2.id = 'th';
elem2.className ='ht';
let note = document.createTextNode('Go to code with harry');
elem2.appendChild(note);
let unordred = document.querySelector('ul.that');
// unordred.appendChild(elem2);
console.log(unordred);
element.replaceWith(elem2);

let thakur = document.getElementById('thakur');
console.log(thakur);
thakur.replaceChild(elem2,document.getElementById('tha'));
thakur.removeChild(document.getElementById('kur'));

let divs = document.createElement('divs');
divs.className = 'harry';
divs.id = 'fj'
let no = document.createTextNode('<b>hello bro</b>')
divs.appendChild(no);
let con = document.querySelector('div.con');
con.appendChild(divs);
console.log(divs);