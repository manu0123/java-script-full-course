console.log('tut38b.js');
const students =[
    {name:'mandeep thakur',subject:"mathematics"},
    {name:'rohan sharma',subject:"english"},

]
function enrollStudent(student){
   return new Promise(function(resolved,reject){
        
        setTimeout(function() {
            students.push(student);
            const error = false;
            if(!error){
                console.log('you resolved you problem');
                resolved();
            }
            else{
                console.log('you are not resolved you problem');
                reject();
            }
        
        }, 3000);
    })
   }
function GetStudents(){
    setTimeout(function() {
        let str = "";
        students.forEach(function(student){
            str +=  `<li> ${student.name}</li>`;
        })
        document.getElementById('students').innerHTML=str;
    
    }, 1000);
}
let newstudent = {name:'abhinav sharma',subject:'punjabi'};
enrollStudent(newstudent).then(GetStudents)
 .catch(function(reject){
    console.log('very bad mandeep');
});
// GetStudents();
// function inside then = resolved()
// function inside catch= resolved()