console.log('tut44.js');
let a = 'mandeep thakur ';
a = undefined;
if(a!=undefined){
    throw new Error('this is not undefined');
}
else{
    console.log('this is defined');
}
try {
    // kdfdlfh
    console.log('we are inside try block');
    fkdjf;
} catch (error) {
    console.log('are you ok');
     console.log(error);
     console.log(error.name);
     console.log(error.message);

}finally{
    console.log('finnaly we will run this');
}