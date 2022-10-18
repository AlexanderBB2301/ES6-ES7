// Write out the syntax for each of the below core ES6 elements
// Spread operator
// Rest operator
// Object shorthand
// Dynamic keys (place 3 items in an object using dynamic keys)
// Sets, convert an array with duplicates to an array without (using a set)
// Create a promise around setTimeout
// Consume the promise using ES6 .then
// Consume the promise using ES7 async/await

// Spread operator
const beetle = {
  make: "volkswagon",
  model: "beetle",
  doors: 2,
  popularity: "high",
};

const copyBeetle = { ...beetle };
console.log(copyBeetle);

// Rest operator
const rateChanges = {
  October: "+1.1%",
  September: "+2%",
  August: "+1.5%",
  July: "+5%",
};
const { October, ...remainder } = rateChanges;
console.log(October, remainder);

// Object shorthand
const ageNow = (currentYear, birthYear) => {
  return currentYear - birthYear;
};
const futureAge = (ageNow, y) => {
  return ageNow + y;
};

let person1 = { name: "Sam", ageNow, futureAge };
console.log(person1);

// Dynamic keys (place 3 items in an object using dynamic keys)

// Sets, convert an array with duplicates to an array without (using a set)
const shoppingCart = [
  "apples",
  "orange juice",
  "biscuits",
  "fish",
  "apples",
  "bread",
  "milk",
];
console.log(shoppingCart);
//contains duplicates.
const noDuplicatesShopping = new Set(shoppingCart);
//no duplicates
console.log(noDuplicatesShopping);
//back into an array
const noDuplicatesArray = Array.from(noDuplicatesShopping);
console.log(noDuplicatesArray);

// Create a promise around setTimeout

const aPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Mission complete!");
  }, 1000);
});
// Consume the promise using ES6 .then
aPromise
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log("Rejected, mission not accomplished!");
  });

console.log("Will your mission be completed?");

// Consume the promise using ES7 async/await
const newPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Mission complete again!");
  }, 1000);
});
const mission = async () => {
  const result = await newPromise;
  console.log(result, "Success!");
};
mission();
console.log("Will your mission be completed this time round?");

function takeOnMission() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Mission loading!");
      resolve();
    }, 1000);
  });
}
const missions2 = async () => {
  const mission1 = await takeOnMission();
  const mission2 = await takeOnMission();
  const mission3 = await takeOnMission();
  const mission4 = await takeOnMission();
  const mission5 = await takeOnMission();
  console.log("Mission ready!");
};

missions2();
