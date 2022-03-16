console.log('tut28.js');

let obj = {
    name: 'mandeep thakur',
    channel : 'code with mandeep',
    adress: 'bringali',

}
console.log(obj);

function obj2 (givenname){
    this.name= givenname;
}
obj2.prototype.setname = function(newname){
    this.name = newname;
} 
let a = new obj2('mandeep thakur');
console.log(a);
obj2.prototype.getname = function(){
    return this.name;
  

}