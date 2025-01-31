const score = 100;
console.log(score.toString().length);
console.log(score.toFixed(2));

const otherNumber = 50.54;
console.log(otherNumber.toPrecision(2));

const hundreds = 100000;
console.log(hundreds.toLocaleString('en-IN'));



// *********************** MATH ***************************
console.log(Math);
console.log(Math.abs(-9));
console.log(Math.round(5.6));
console.log(Math.ceil(4.1));
console.log(Math.floor(6.8));
console.log(Math.min(4, 5, 7, 9));
console.log(Math.max(4, 5, 7, 9));

console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));

