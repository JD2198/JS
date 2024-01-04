const coding = ["ruby","js","java","python"]

// coding.forEach(function(){

// }) 

coding.forEach((item) => {
    // console.log(item);
})

// if we want to store above thing in const

const code = coding.forEach((item) => {
    // console.log(item);
    return item // result still undefined
})

// console.log(code); // u will get as undefined as above one is not returning any value; for Each loop will not return any value

// Filter operation

const myNums = [1,2,3,4,5,6,7,8,9,10]

// filter also takes callback as foreach but unlike forEach it will return value (if opened scope then write return, if () or in that line no need to write return)
const val1 = myNums( (num) => num>4)
const val= myNums.filter( (num) => {
    return num> 4
})   

console.log(val);

// how to use above one in for each

const newNums =[]

myNums.forEach( (num) => {
    if(num>4){
        newNums.push(num)
    }
})

console.log(newNums);

 