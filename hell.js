// Xiva Taxi Prices
// 1s -> 10000 so'm
// 3s -> 15000 so'm
// 5s -> 20000 so'm
// 7s -> 25000 so'm
//  ostanovkada uxlimiz

console.log('start', new Date().getSeconds());

setTimeout(() => {
    console.log(10000);

    setTimeout(() => {
        console.log(15000);
  
    setTimeout(() => {
        console.log(20000);
   
    setTimeout(() => {
        console.log(25000);
        console.log('end,', new Date().getSeconds());
  
            }, 7000)
        }, 5000)
    }, 3000)
}, 1000)

