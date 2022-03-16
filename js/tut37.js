console.log('tut37.js');
const students =[
    {name:'mandeep thakur',subject:"mathematics"},
    {name:'rohan sharma',subject:"english"},

]
function enrollStudent(student,callback){
 setTimeout(function() {
     students.push(student);
     callback();
 }, 8000);
}
function GetStudents(){
    setTimeout(function() {
        let str = "";
        students.forEach(function(student){
            str +=  `<li> ${student.name}</li>`;
        })
        document.getElementById('students').innerHTML=str;
    
    }, 4000);
}
let newstudent = {name:'abhinav sharma',subject:'punjabi'};
enrollStudent(newstudent,GetStudents);
// GetStudents();