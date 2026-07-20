// const newObject = {
//     name:"Amulya",
//     age: 25,
//     "Date of birth" : "18 Jan 2001",
// }
// console.log(newObject["Date of birth"]);
// console.log(newObject);
// const primeObject ={
//     nPrimeNUmber(num){
//      if(num<2){
        
//         return "O or 1 are not the Prime numbers";
//      }
//      let Primes =[]
//      let count =2;
//      while(count<=num){
//         let prime =true;
//         for(let i=2;i*i<=count;i++){
//             if(count % i===0){
//                 prime =false;
//                 break;
//             }
          
//         }
//          if(prime){
//             Primes.push(count);
//         } 
        
//         count++;
//      }
//      return Primes;
//     },
//     isPrime(num){
//      if(num<2){
//         return false;
//      }
     
//      for(let i=2;i*i<=num;i++){
//        if(num%i===0){
//         return false;
//         break;
//        }
      
//      }
//       return true;
    
//     },
   
    
// }
// let key ="Amulya Awasthi";
// const Twin ={
// isTwinPrime(num){
//         const TwinPrime=[];
//         for(let i =2;i<num-2;i++){
//             if(this.isPrime(i)&& this.isPrime(i+2)){
//                 TwinPrime.push([i, i+2]);
//             }
//         }
//         return TwinPrime;
//     }
// }
// Twin.__proto__ =primeObject;
// console.log(primeObject.nPrimeNUmber(20));
// console.log(primeObject.isPrime(20));
// console.log(Twin.isTwinPrime(20));
// console.log(primeObject[key]);
// console.log(primeObject);
// let fruits = "oranges"
// let bag = {
//     [fruits+'Computer']:5,
// }
// console.log(bag);
// let makeUser = (name,age)=>{
//     return {name:name,
//     age:age
// }}
// let user = makeUser("Amulya",25);
// console.log(user.age);
let obj ={
    name : "Amulya Awasthi",
    age : 25,
    DOB : "18-01-2001",
}

for(let key in obj){
    console.log(key+ ":" + obj[key])
    
}
let codes ={
    "+49":"Germany",
    "+41": "Switerland",
    "+44": "Great Britain",
    "+1": "USA",

}
for(let code in codes){
    console.log(+code + ":"+ codes[code]);
}
