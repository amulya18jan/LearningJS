// console.log("Without parameters");
// function printMe() {
//   console.log("Hello World! This is Amulya learning functions");
// }
// printMe();

// console.log(`Using Parameters`);
// function printThis(params) {
//   console.log(`Hello World! This is ${params} learning functions`);
// }
// printThis("Amulya");

// console.log("Declaring function using expression");
// const addTwoNum = function (a,b) {
//   return (a+b);
// };
// console.log (addTwoNum(10,20));

// console.log("______________________________________________________________________");
// console.log("Default parameters in functions of java scripts");
// function DEF(a , b=0){
//  return (2*(a+b));
// }
// console.log("Giving all parameters");
// console.log(DEF(10,10));
// console.log("Giving only one parameters");
// console.log(DEF(10));
// console.log("______________________________________________________________________");
// console.log("Learning Rest parameter Function");
// function infiNum(a, ...b){
//     console.log(a);
//     console.log(b);
// }
// infiNum(2,4,8,10,11,12,13,14,15,16,17,20,34,86);
// console.log("One thing please keep in mind we represent rest parameter in the function with ... sign before the parameter name and it will apply only on one parameter which is at the last.");
// console.log("___________________________________________________________________________________");
// console.log("Learning Arrow Function in JS");
// const multi =(a, b) => a*b;
// console.log(multi(13,13));
// let divide=(x,y) => x/y;
// console.log(divide(10,2));
// console.log("___________________________________________________________________________________");
// console.log("Learning Nesting Function in JS");
// function calculator (x,y){
// console.log(`My numbers are ${x},${y}`);
// function add(a,b){
// return a+b;
// }
// function multiply(a,b){
// return a*b;
// }
// function division(a,b){
// return a/b;
// }
// function modulus(a,b){
// return b%a;
// }
// return [add(x,y), multiply(x,y),division(x,y),modulus(x,y)];
// }
// console.log(calculator(10,20));
// console.log(`Rewrite the function using '?' or '||'`);
// console.log(`Question:  function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }`)
// function checkAge(age){
//  return (age>18)? true:confirm('Did parents allow you?');
 
// }
// console.log(checkAge(17));
// console.log("Function min(a, b)");
// function min(a,b){
//   return (a<b)?a:b;
// }
// console.log(min(-1,-5));
//console.log("using exponential operator")
// function pow(a,b){
//   return a **b;
// }
// console.log(pow(2,5));
// console.log("Doing pow from loops or Manunal");
// function pow(x,n){
//   let result =x;
//   for(let i=1;i<n;i++){
//     result*=x;
//   }
//   return result;
// }
// console.log(pow(3,3));
console.log(`Replace Function Expressions with arrow functions in the code below:

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);`)
const ask =(question,yes,no)=>{
  return (confirm(question))? yes():no();
}
ask("Do you agree",()=>{
  alert("You agreed")
},
()=> 
  { 
    alert("You canceled the execution."); 
  })