console.log("Welcome to the FizzBuzz Game");
let answer = parseInt(
  prompt("Please enter the number you would like to FizzBuzz upto :  "),
);
function fizzBuzz() {
  for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
}
console.log(fizzBuzz());
