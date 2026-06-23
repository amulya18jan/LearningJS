console.log("Without parameters");
function printMe() {
  console.log("Hello World! This is Amulya learning functions");
}
printMe();

console.log(`Using Parameters`);
function printThis(params) {
  console.log(`Hello World! This is ${params} learning functions`);
}
printThis("Amulya");

console.log("Declaring function using expression");
const addTwoNum = function (a,b) {
  return (a+b);
};
console.log (addTwoNum(10,20));
