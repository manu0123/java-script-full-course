console.log('tut31.js');
class employe{
    constructor(name,experience,cast,division){
        this.name = name;
        this.experience = experience;
        this.cast = cast;
        this.division = division;
    }
    slogan(){
        return (`my name is ${this.name} and my cast is ${this.cast}. i am pround on my cast.my experience on  this company is ${this.experience} years and i am stand ${this.division} in my company.`)
    }
    JoiningYear(){
        return 2021-this.experience;
    }
    static add(a,b){
        return a+b
    }
}


class programmer extends employe{
    constructor(name,experience,cast,division,language,github){
    super(name,experience,cast,division);
    this.language =language;
    this.github = github;
}

favoriteLanguage (){
    if(this.language == 'python'){
        return 'python';
    }
    else{
        return 'javascript';
    }
}

 static multiply(a,b){
    return a+b;
}


}
mandeep = new programmer('suraj thakur',28,'hindu',2,'php','manu434');
console.log(mandeep.favoriteLanguage());
console.log(programmer.multiply(45,34));



// r= new employe('mandeep thakur',5,'hindu','1st division');
// console.log(r.JoiningYear());

// console.log(employe.add(56,45));
