// // console.log("Learning first method in Arrays 1. forEach()");
// // let food =["Tomato", "Apple", "Rice","Pulses"];
// //  food.forEach((items) => {
// //     console.log(items); ;
// // })
// // console.log("___________________________________________________________");
// // console.log("Learning map() method in js");
// // const data =[1,2,3,4,5,6,7];
// // const dataMap = data.map((any)=>any+any);
// // console.log(dataMap);
// // console.log("1. Print all fruits using forEach()");
// // const fruits = ["Apple", "Banana", "Mango", "Orange"];
// // const fruits1 = fruits.forEach((items)=>{console.log(items)})
// // console.log("______________________________________________________________________");
// // console.log("2. Print squares using forEach()");
// // const numbers = [2, 4, 6, 8];
// // const squares = numbers.forEach((sqr)=>{
// //     console.log(sqr*sqr);
// // })
// // console.log("______________________________________________________________________");
// // console.log("3. Print even and odd");
// // const number1 = [1, 2, 3, 4, 5, 6];
// // const evenAndOdd = number1.forEach((num) => {
// //     if(num %2 == 0){
// //         console.log("Even Numbers :"+" "+ num);
    
// //     }else{
// //         console.log("Odd"+ " "+ num);
// //     }
// // })
// // console.log("______________________________________________________________________");
// // console.log("4. Calculate total sum");
// // const add =[10, 20, 30, 40];
// // let result =0;
// // const sum = add.forEach((addAll)=>{
// //     result += addAll;
    
// // })
// // console.log(result);
// // console.log("______________________________________________________________________");
// // console.log("5. Print student information");
// // const students = [
// //     { name: "John", age: 20 },
// //     { name: "Alice", age: 22 },
// //     { name: "Bob", age: 19 }
// // ];
// // const print = students.forEach((items)=>{
// //     console.log(`${items.name} is ${items.age} old`);
// // })
// console.log("______________________________________________________________________");
// console.log(("Learning map() and solving questions"));
// console.log("1. Double every number");
// const numbers = [1, 2, 3, 4, 5];
// const multiple2=numbers.map((num)=>num*2)
// console.log(multiple2);
// console.log("______________________________________________________________________");
// console.log("2. Convert to uppercase");
// const names = ["john", "alice", "bob"];
// const upperCaseNames= names.map((upperCase)=> upperCase.toUpperCase())
// console.log(upperCaseNames);
// console.log("______________________________________________________________________");
// console.log(("3. Add 5 to every number"));
// const marks = [60, 70, 80, 90];
// const updatedMarks = marks.map((Marks)=>Marks+5)
// console.log(updatedMarks);
// console.log("______________________________________________________________________");
// console.log(("4. Extract names"));
// const users = [
//     { name: "John", age: 25 },
//     { name: "Alice", age: 30 },
//     { name: "Bob", age: 22 }
// ];
// const Names = users.map((naam)=>naam.name);
// console.log(Names);
 console.log("______________________________________________________________________");
 console.log(("Practice Question 1"));
const ages = [12,18,25,10,30];
const adults = ages.filter((age)=>age>=18);
console.log(adults);
console.log("______________________________________________________________________");
console.log(("Practice Question 2"));
const names = ["Ram","Alexander","John","Amit"];
const  filterNames = names.filter((name)=>name.length<=4)
console.log(filterNames);
console.log("______________________________________________________________________");
console.log(("Mini Challenge"));
console.log("1. Use filter() to keep only odd numbers.");
const nums = [3, 8, 5, 12, 7, 10];
const oddNums = nums.filter((num)=>num%2 !== 0);
console.log(oddNums);
console.log("______________________________________________________________________");
console.log("2.Use filter() to keep only products that cost more than 1000.");
const products = [
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 1200 },
  { name: "Monitor", price: 8000 },
  { name: "Pen", price: 50 }
];
const filterProducts = products.filter((prod)=>prod.price > 1000)
console.log(filterProducts);
console.log("______________________________________________________________________");
console.log("3.Use reduce() to calculate the total marks.");
const marks = [78, 85, 92, 65];
const totalMarks = marks.reduce((acc ,mark)=>{
 return  acc + mark;
},0)
console.log(totalMarks);
console.log("______________________________________________________________________");
console.log("Multiply everything");
const Nums=[2,3,4];
const MultiplyEverthing = Nums.reduce((acc,num)=>{
  return num *acc;
},1)
console.log(MultiplyEverthing);
console.log("______________________________________________________________________");
console.log("Find the largest number");
const numbers =[10,40,25,80,50];;
const largest = numbers.reduce((acc, larg)=>{
    if(larg>acc){
        return  larg;
    }else{
       return acc
    } ;
},numbers[0])
console.log(largest);;