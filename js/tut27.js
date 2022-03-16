console.log('tut27.js');
let car = {
    name: "sports car",
    speed: 56,
    run: function () {
        console.log("car is running")
    }
}

// creating constructed for cars 

// function generalCar(GivenName, GivenSpeed) {
//     this.name = GivenName;
//     this.speed = GivenSpeed;
//     this.run = function () {
//         console.log(`${this.name} is running`);
//     }
//     this.analyze = function () {
//         console.log(`this car is slower  by ${300 - this.speed} km/h than mercedes`);
//     }
// }
// car1 = new generalCar('scorpio', 45);
// car2 = new generalCar('maruti', 34);
// car3 = new generalCar('luxury', 56);
// console.log(car1, car2, car3);

function genralbody(Givenname,Givenage,Givenwork,givenfaviorate){
    this.name = Givenname;
    this.age = Givenage;
    this.work = Givenwork;
    this.about = function(){
        console.log(`${this.name} is a good boy`);
    }
}
let man = new genralbody('mandeep thakur',34,'software engineer');
console.log(man);
