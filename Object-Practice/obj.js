// // const newObject = {
// //     name:"Amulya",
// //     age: 25,
// //     "Date of birth" : "18 Jan 2001",
// // }
// // console.log(newObject["Date of birth"]);
// // console.log(newObject);
// // const primeObject ={
// //     nPrimeNUmber(num){
// //      if(num<2){
        
// //         return "O or 1 are not the Prime numbers";
// //      }
// //      let Primes =[]
// //      let count =2;
// //      while(count<=num){
// //         let prime =true;
// //         for(let i=2;i*i<=count;i++){
// //             if(count % i===0){
// //                 prime =false;
// //                 break;
// //             }
          
// //         }
// //          if(prime){
// //             Primes.push(count);
// //         } 
        
// //         count++;
// //      }
// //      return Primes;
// //     },
// //     isPrime(num){
// //      if(num<2){
// //         return false;
// //      }
     
// //      for(let i=2;i*i<=num;i++){
// //        if(num%i===0){
// //         return false;
// //         break;
// //        }
      
// //      }
// //       return true;
    
// //     },
   
    
// // }
// // let key ="Amulya Awasthi";
// // const Twin ={
// // isTwinPrime(num){
// //         const TwinPrime=[];
// //         for(let i =2;i<num-2;i++){
// //             if(this.isPrime(i)&& this.isPrime(i+2)){
// //                 TwinPrime.push([i, i+2]);
// //             }
// //         }
// //         return TwinPrime;
// //     }
// // }
// // Twin.__proto__ =primeObject;
// // console.log(primeObject.nPrimeNUmber(20));
// // console.log(primeObject.isPrime(20));
// // console.log(Twin.isTwinPrime(20));
// // console.log(primeObject[key]);
// // console.log(primeObject);
// // let fruits = "oranges"
// // let bag = {
// //     [fruits+'Computer']:5,
// // }
// // console.log(bag);
// // let makeUser = (name,age)=>{
// //     return {name:name,
// //     age:age
// // }}
// // let user = makeUser("Amulya",25);
// // console.log(user.age);
// let obj ={
//     name : "Amulya Awasthi",
//     age : 25,
//     DOB : "18-01-2001",
// }

// for(let key in obj){
//     console.log(key+ ":" + obj[key])
    
// }
// let codes ={
//     "+49":"Germany",
//     "+41": "Switerland",
//     "+44": "Great Britain",
//     "+1": "USA",

// }
// for(let code in codes){
//     console.log(+code + ":"+ codes[code]);
// }
// let user = {};
// user.name= "John";
// user.surname = "Smith";
// console.log(user);
// user.name = "Pete";
// console.log(user);
// delete user.name;
// console.log(user)
// 
// console.log(`Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.`)
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };
// const multiplyNumeric =(menu)=>{
    
//     for(let key in menu){
//         if(typeof(menu[key])=== "number"){
//         menu[key]*=2
//         }
      
//     }
//     return menu;
// }
// console.log(multiplyNumeric(menu))
// let user = { name: "John" };

// let admin = user; 
// console.log(user);
// console.log(admin);
// admin.name="Amulya"
// console.log(admin);
// console.log(user);
// let user = {
//     name: "Amulya Awasthi",
//     age : 26,
// }
// let clone = {};
// for (let key in user){
// clone[key]=user[key];
// }
// clone.name = "Amulya";
// console.log(clone["age"]);
// console.log(user["name"]);

// let permission1 = {canView : true}
// let permission2 = {canText : true}
// Object.assign(user,permission1,permission2);
// console.log(user);
// Object.assign(clone,user);
// clone.name = "Amulya";
// console.log(clone);

let user = {
    fruit : "Orange"
}
let user1 = user;
console.log(user1);
user = null;
console.log(user);
