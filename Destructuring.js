// ------------------------------ Object Destructuring --------------------------------------
let facts = {numPlanets1: 8, yearNeptuneDiscovered: 1846};
let {numPlanets1, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846

let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
  let {numPlanets, ...discoveryYears} = planetFacts;
  
  console.log(discoveryYears); // yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659

function getUserData({firstName, favoriteColor="green"}){
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // Your name is Alejandro and you like purple
getUserData({firstName: "Melissa"}) // Your name is Melissa and you like green
getUserData({}) // Your name is undefined and you like green


// ----------------------- Array Destructuring ---------------------

let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // Maya
console.log(second); // Marisa
console.log(third); // Chi


let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]
  
  console.log(raindrops); // Raindrops on roses
  console.log(whiskers); // whiskers on kittens
  console.log(aFewOfMyFavoriteThings); // ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // [10, 30, 20]

// ------------------------- ES2015 Refactoring --------------------------------------

// var obj = {
//     numbers: {
//       a: 1,
//       b: 2
//     }
//   };
  
//   var a = obj.numbers.a;
//   var b = obj.numbers.b;

/* Write an ES2015 Version */

const obj = {
    numbers: {
        a: 1,
        b: 2
    }
};

let { numbers: { a, b } } = obj;

// var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

/* Write an ES2015 Version */

let arr = [1, 2];

[arr[0], arr[1]] = [arr[1], arr[0]];


// ----------------- raceResults() function -------------------

const raceResults = (arr) => {
    let [first, second, third, ...rest] = arr;
    return {
        first, 
        second, 
        third, 
        rest
    };
}