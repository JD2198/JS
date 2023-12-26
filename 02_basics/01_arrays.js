// arrays are declared under square brackets

const myArr = [45,78,34,22]

const myArr2 = new Array(98,67,44,23)

myArr.push(89,67)
myArr2.pop();

console.log(myArr);
console.log(myArr2);
console.log(myArr.indexOf(34));

const newArr = myArr.join()  // join: adds all the elements of an array into a string 

console.log(typeof newArr);

// slice and splice method

console.log(myArr.slice(2,4))  // returns a copy of a selection of an array
console.log(myArr)

console.log(myArr2.splice(0,1))   // Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
console.log(myArr2)
