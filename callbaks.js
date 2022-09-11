console.log('a');

function doSomething( fn ) {
    console.log('Something')
    fn()
}

doSomething(() => {
    console.log('Hello world')
})

doSomething(() => {
    console.log('This is second operation');
})




























// const { long, longTimeProcess } = require('./lib.js')  

// let a = 5 + 6
// let b = a * 2
// console.log(a + b)

// function afterLongTime(){
//     console.log('Hudoga sh bitti');
// }

// longTimeProcess(afterLongTime)

// console.log('dam olish');
 
// console.log(a*2);