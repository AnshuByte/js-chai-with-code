const score = 4400
console.log(score);


const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); //converts 10 to 10.00

const otherNumber = 20.94554
console.log(otherNumber.toPrecision(2)); //round of the digits if 3 takes three digit

const hundred = 100000

console.log(hundred.toLocaleString('en-IN')); //puts comma 'en-In' converts to indian standards

//Number.MAX_VALUE(100) // many things read MDN docs once


// -------------maths-------------//

//console.log(Math); // put in Console to Know more

console.log(Math.abs(-4));
console.log(Math.round(3.5));
console.log(Math.ceil(4.2)); //takes upper value always
console.log(Math.floor(4.3)); //takes lower value always
console.log(Math.min(2,3,4,5,6,7,1));
console.log(Math.max(2,3,4,5,6,7,1));
console.log((Math.random()*10) + 1); //ramdom always between 0-1 so mul by 10 to shivt to more than 1 to 10 .add one for 0 situation
console.log(Math.floor(Math.random()*10) + 1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min +1) +min));


