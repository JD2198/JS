function addTwoNums(a,b){    // in js no need to give type of numb
    return (a+b)
} 

console.log(addTwoNums(78,90));

// situation where you don't know how much argument is going to come, so how will you make ready your parameter 

function calculateCartPrice(...num1){    // ... this is rest operator and spread operator 
    return num1
}
console.log(calculateCartPrice(200,900,579,8776))

// passing an object as a function parameter

const user = {
    username: "hitesh",
    price:  879
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleobject(user)

handleobject({                     // directly passing a value (i.e object)
    username:"Sam",
    price:999
})

// passing an array as a function parameter

const Arr = [78,9,34,24]

function returnSecondValue(getArray){
    return getArray[1]
} 

// console.log(returnSecondValue(Arr));

console.log(returnSecondValue([67,989,456])) // passing value directly
