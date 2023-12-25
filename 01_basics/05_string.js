const name = "Om"
const id = 66

// string interpolation

console.log(`Hello my name is ${name}`);

// one more way to declare string

const gameName = new String("Kaya")

console.log(gameName.charAt(2));
console.log(gameName.indexOf('y'));

// in substring we cannot use -ve value
let str1 = "Fortuner"
console.log(str1.substring(3,8));
console.log(str1.substring(-78,8)); // this will ignore -78 and treat as 0 only 

// in slice we can use -ve value
const str2 = str1.slice(-5,0)
console.log(str2);

// in slice we can give -ve value