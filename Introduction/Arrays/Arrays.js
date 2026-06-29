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
//  console.log("______________________________________________________________________");
//  console.log(("Practice Question 1"));
// const ages = [12,18,25,10,30];
// const adults = ages.filter((age)=>age>=18);
// console.log(adults);
// console.log("______________________________________________________________________");
// console.log(("Practice Question 2"));
// const names = ["Ram","Alexander","John","Amit"];
// const  filterNames = names.filter((name)=>name.length>4)
// console.log(filterNames);
// console.log("______________________________________________________________________");
// console.log(("Mini Challenge"));
// console.log("1. Use filter() to keep only odd numbers.");
// const nums = [3, 8, 5, 12, 7, 10];
// const oddNums = nums.filter((num)=>num%2 !== 0);
// console.log(oddNums);
// console.log("______________________________________________________________________");
// console.log("2.Use filter() to keep only products that cost more than 1000.");
// const products = [
//   { name: "Mouse", price: 500 },
//   { name: "Keyboard", price: 1200 },
//   { name: "Monitor", price: 8000 },
//   { name: "Pen", price: 50 }
// ];
// const filterProducts = products.filter((prod)=>prod.price > 1000)
// console.log(filterProducts);
// console.log("______________________________________________________________________");
// console.log("3.Use reduce() to calculate the total marks.");
// const marks = [78, 85, 92, 65];
// const totalMarks = marks.reduce((acc ,mark)=>{
//  return  acc + mark;
// },0)
// console.log(totalMarks);
// console.log("______________________________________________________________________");
// console.log("Multiply everything");
// const Nums=[2,3,4];
// const MultiplyEverthing = Nums.reduce((acc,num)=>{
//   return num *acc;
// },1)
// console.log(MultiplyEverthing);
// console.log("______________________________________________________________________");
// console.log("Find the largest number");
// const numbers =[10,40,25,80,50];;
// const largest = numbers.reduce((acc, larg)=>{
//     if(larg>acc){
//         return  larg;
//     }else{
//        return acc
//     } ;
// },numbers[0])
// console.log(largest);
// console.log("______________________________________________________________________");
// console.log("Sum object values");
// const employees = [
//     {name:"A",salary:30000},
//     {name:"B",salary:25000},
//     {name:"C",salary:40000}
// ];
// const totalSalary = employees.reduce((acc,sum)=>{
//     return sum.salary + acc  
// },0)
// console.log(totalSalary)
// console.log("______________________________________________________________________");
// console.log("Use reduce() to count the total number of characters in these words.");
// const words = ["Java", "Script", "React"];
// const lengthWords = words.reduce((acc, wor)=>{
//     return wor.length +acc;
// },0)
// console.log(lengthWords);
// console.log("______________________________________________________________________");
// console.log("Understanding Channing using filter(), map(), reduce()");
// const employees = [
//     {name:"A", salary:20000},
//     {name:"B", salary:50000},
//     {name:"C", salary:70000},
//     {name:"D", salary:15000}
// ];
// const totalSalary = employees.filter(emp=>emp.salary>30000).map(emp=>emp.salary).reduce((acc, salar)=>{return salar+acc},0)
// console.log(totalSalary);
// const employees = [
//     { name: "A", salary: 20000, active: true },
//     { name: "B", salary: 50000, active: true },
//     { name: "C", salary: 70000, active: false },
//     { name: "D", salary: 45000, active: true },
//     { name: "E", salary: 15000, active: false }
// ];
// const Names = users.map((naam)=>naam.name);
// console.log(Names);
// console.log("______________________________________________________________________");
// console.log((" Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”."));
// const Words = (str)=>{
//     const camelCase = str.split(/[-_\s]+/).map((word, index)=>{
//       if(index == 0){
//         return word.toLowerCase();
//       }
//      return word[0].toUpperCase()+ word.slice(1).toLowerCase();
//     }).join("")
//     return camelCase;
// }
// console.log(Words("AMULYA_AWASTHI"));
// console.log("________________________________________________________________________________");
// console.log("Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.");
// let arr = [5, 3, 8, 1];
// const filterRange =(arr,a,b) =>{
//     const filtered = arr.filter((value)=>{
//     if(value >=a && value<=b){
//         return value;
//     }
//     })
//     return filtered
// }
// console.log(arr);
// console.log(filterRange(arr,1,4));

// console.log("Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.");
// let arr =[4,5,2,8,1];
// const filterRangeInPlace = (arr,a,b)=>arr.filter(value => value >=a && value<=b);
// console.log(arr,1,4);