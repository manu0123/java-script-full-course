console.log('tut18.js');
// let btn = document.getElementById('btn');
// btn.addEventListener('click', func);
// function func(e){
//     console.log('you click on button',e);
// }



// document.querySelector('.child').addEventListener('mouseenter',function(){
//     console.log('you enter in child');
// })

// document.querySelector('.child').addEventListener('mouseleave',function(){
//     console.log('you leave in child');
// })
document.querySelector('.container').addEventListener('mousemove',function(e){
    console.log('you leave in child');
    console.log(e.offsetX,e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},45)`;
})