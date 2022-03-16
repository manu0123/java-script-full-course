console.log('tut38.js');
// promise
function func1(){
    return new Promise(function(resolved,reject){
        setTimeout(() => {
            const error = false;
            if(!error){
                console.log('function:your problem has been resolved');
                resolved();
            }
            else{
                console.log('error:your problem will be not solved');
                reject('sorry not fulfilled')
            }
            
        }, 3000);
    })
}
func1().then(function(resolved){
    console.log('Mandeep:thanks to all of you');
}).catch(function(error){
    console.log('Mandeep:very bad bro.reason:'+error);
})