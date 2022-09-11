console.log('3 sekund kuting...');

// setTimeout(() => {
//     console.log('Siz manzilga yetib keldingiz');
// }, 2000)

// setTimeout(() => {
//     console.log('Hamma ish bitti');
// }, 3000)

let abc = setInterval(() => {
    console.log('Uxlivarasanmi, tur axr');
}, 100)

setTimeout(() => {
    clearInterval(abc)
}, 3000)

