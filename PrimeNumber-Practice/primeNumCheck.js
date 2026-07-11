console.log("1. Write a function that checks if a number is prime");
let num =Number(prompt("Give me a number and i will check whether its prime or not :"));
const isPrime=(num)=>{
    if(num < 2){
        return false;
    }
    for(let i=2;i*i<=num;i++){
        if(num%i===0){
            return false
        }
        
    }
    return true;
}
if(isPrime(num)){
    console.log(num +" " +"Its a prime number")
}else{
    console.log(num +" " + "Its not a prime number");
}