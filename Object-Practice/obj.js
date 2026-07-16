// const newObject = {
//     name:"Amulya",
//     age: 25,
//     "Date of birth" : "18 Jan 2001",
// }
// console.log(newObject["Date of birth"]);
// console.log(newObject);
const primeObject ={
    isPrime(num){
     if(num<2){
        return false;
     }
     
     for(let i=2;i*i<=num;i++){
       if(num%i===0){
        return false;
        break;
       }
      
     }
      return true;
    
    },
    isTwinPrime(num){
        const TwinPrime=[];
        for(let i =2;i<num-2;i++){
            if(this.isPrime(i)&& this.isPrime(i+2)){
                TwinPrime.push([i, i+2]);
            }
        }
        return TwinPrime;
    }
}
console.log(primeObject.isTwinPrime(20));