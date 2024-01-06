const nums = [1,2,3,4]

const numstotal = nums.reduce( function (accum, currvalue){

    console.log(`accumulator value is: ${accum} and current value is: ${currvalue} `)

    return accum + currvalue
}, 3)  // this holds initial accum value 

console.log(numstotal);

// currvalue starts from array 1st value

// Declaring through Arrow function

const nu = nums.reduce( () => {

},9)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);