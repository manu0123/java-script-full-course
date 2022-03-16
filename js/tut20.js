console.log('tut20.js');
// localStorage.setItem('name','harry');
// localStorage.setItem('name2','mandeep');
// let impArray = ['bhindi','adrak','lehsun'];
// localStorage.setItem('sabji',JSON.stringify(impArray));
// let name = JSON.parse(localStorage.getItem('sabji'));
// console.log(name);
localStorage.clear();
// localStorage.removeItem('name');
// SESSION STORAGE 
sessionStorage.setItem('name3','aman singh');
sessionStorage.setItem('name4','rajkumar');

let get = sessionStorage.getItem('name3');
console.log(get);

let arryIs = ['thakur','raju','raman','tina'];
console.log(arryIs);
sessionStorage.setItem('names',JSON.stringify(arryIs));

let name = JSON.parse(sessionStorage.getItem('names'));
console.log(name);
sessionStorage.clear();