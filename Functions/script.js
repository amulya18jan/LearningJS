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

console.log("______________________________________________________________________");
console.log("Default parameters in functions of java scripts");
function DEF(a , b=0){
 return (2*(a+b));
}
console.log("Giving all parameters");
console.log(DEF(10,10));
console.log("Giving only one parameters");
console.log(DEF(10));
console.log("______________________________________________________________________");
console.log("Learning Rest parameter Function");
function infiNum(a, ...b){
    console.log(a);
    console.log(b);
}
infiNum(2,4,8,10,11,12,13,14,15,16,17,20,34,86);
