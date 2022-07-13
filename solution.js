// 1. Print Exponential Values
function showTwoNumbers(a, b) {
  console.log(typeof a, typeof b);
}
showTwoNumbers(3, 5);
// console.log("---------------------");
let sum = 1;
for (let i = 1; i <= 5; i++) {
  sum = sum * 3;
  console.log(sum);
}

let sum2 = 1;
for (let i = 1; i <= 8; i++) {
  sum2 = sum2 * 2;
  console.log(sum2);
}

// 2. Fruits
let fruit = "blueberries";
function printFavoriteFruit() {
  fruit = "mango";
  console.log("My favorite fruit is:", fruit);
  //   console.log("My favorite fruit is:", (fruit = "mango"));
}
printFavoriteFruit();

// 3. Multiply a Number by Itself
function exponent(x, y) {
  let result = 1;
  for (let i = 0; i < y; i++) {
    result = result * x;
    console.log(result);
  }
}
exponent(2, 5);

// no its not possible because the variable is locally assigned and not globally assigned
