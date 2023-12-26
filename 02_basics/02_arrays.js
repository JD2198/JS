const marvel_heros = ["Thor", "Spiderman", "Ironman"]
const dc_heros = ["Batman","flash","superman"]

marvel_heros.push(dc_heros)

const newArray = marvel_heros.concat(dc_heros)

console.log(marvel_heros[3,1]);
console.log(newArray);

// spread operator - most effective way

const allNewHero = [...marvel_heros, ...dc_heros]

console.log(allNewHero);

// flat

const another_array = [8,9,81,[88,67,[83,7]],9,0,67]
const all_in_one = another_array.flat(Infinity)

console.log(all_in_one);

