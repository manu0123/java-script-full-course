console.log('tut30.js');

const proto = {
    slogan :function(){
       return `this is doing a work`;
    },
    changename: function(newname){
        this.name = newname;
    }

}
const m = Object.create(proto);
console.log(m);