console.log('tut43.js');
async function mandeep(){
    const response = await fetch('https://api.github.com/users');
    const users= await response.json();
    console.log('users resolved');
    return users;
    // return 'mandeep thakur is my name';
}
let a = mandeep();
a.then(data=>console.log(data));