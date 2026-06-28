// console.log("Learning first method in Arrays 1. forEach()");
// let food =["Tomato", "Apple", "Rice","Pulses"];
//  food.forEach((items) => {
//     console.log(items); ;
// })
// console.log("___________________________________________________________");
// console.log("Learning map() method in js");
// const data =[1,2,3,4,5,6,7];
// const dataMap = data.map((any)=>any+any);
// console.log(dataMap);
// console.log("1. Print all fruits using forEach()");
// const fruits = ["Apple", "Banana", "Mango", "Orange"];
// const fruits1 = fruits.forEach((items)=>{console.log(items)})
// console.log("______________________________________________________________________");
// console.log("2. Print squares using forEach()");
// const numbers = [2, 4, 6, 8];
// const squares = numbers.forEach((sqr)=>{
//     console.log(sqr*sqr);
// })
// console.log("______________________________________________________________________");
// console.log("3. Print even and odd");
// const number1 = [1, 2, 3, 4, 5, 6];
// const evenAndOdd = number1.forEach((num) => {
//     if(num %2 == 0){
//         console.log("Even Numbers :"+" "+ num);
    
//     }else{
//         console.log("Odd"+ " "+ num);
//     }
// })
// console.log("______________________________________________________________________");
// console.log("4. Calculate total sum");
// const add =[10, 20, 30, 40];
// let result =0;
// const sum = add.forEach((addAll)=>{
//     result += addAll;
    
// })
// console.log(result);
// console.log("______________________________________________________________________");
// console.log("5. Print student information");
// const students = [
//     { name: "John", age: 20 },
//     { name: "Alice", age: 22 },
//     { name: "Bob", age: 19 }
// ];
// const print = students.forEach((items)=>{
//     console.log(`${items.name} is ${items.age} old`);
// })
console.log("______________________________________________________________________");
console.log(("Learning map() and solving questions"));
console.log("1. Double every number");
const numbers = [1, 2, 3, 4, 5];
const multiple2=numbers.map((num)=>num*2)
console.log(multiple2);
console.log("______________________________________________________________________");
console.log("2. Convert to uppercase");
const names = ["john", "alice", "bob"];
const upperCaseNames= names.map((upperCase)=> upperCase.toUpperCase())
console.log(upperCaseNames);
console.log("______________________________________________________________________");
console.log(("3. Add 5 to every number"));
const marks = [60, 70, 80, 90];
const updatedMarks = marks.map((Marks)=>Marks+5)
console.log(updatedMarks);
console.log("______________________________________________________________________");
console.log(("4. Extract names"));
const users = [
    { name: "John", age: 25 },
    { name: "Alice", age: 30 },
    { name: "Bob", age: 22 }
];
const Names = users.map((naam)=>naam.name);
console.log(Names);
console.log("______________________________________________________________________");
console.log(("5. Create a new object"));