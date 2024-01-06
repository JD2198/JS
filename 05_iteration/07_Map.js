const nums = [1,2,3,4,5,6,7,8,9,10]

// task is to add 10 to each nums

const newNums = nums.map( (num) => num+10)

console.log(newNums);

// Chaining -- value of 1st chain will be pass on to 2nd chain an then at last it gets return

let numChain = nums.map( (num) => num*10).map( (num) => num*2)

// you can also add filter, filter values n whatever will be true u will get that

numChain = nums.map( (num) => num*10).map( (num) => num*2).filter( (num) => num> 40) 
console.log(numChain);