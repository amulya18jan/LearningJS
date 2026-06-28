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
console.log("1. Print all fruits using forEach()");
const fruits = ["Apple", "Banana", "Mango", "Orange"];
const fruits1 = fruits.forEach((items)=>{console.log(items)})
console.log("2. Print squares using forEach()");
const numbers = [2, 4, 6, 8];
const squares = numbers.forEach((sqr)=>{
    console.log(sqr*sqr);
})
console.log("3. Print even and odd");
const number1 = [1, 2, 3, 4, 5, 6];
const evenAndOdd = number1.forEach((num) => {
    if(num %2 == 0){
        console.log("Even Numbers :"+" "+ num);
    
    }else{
        console.log("Odd"+ " "+ num);
    }
})