let num =Number(prompt("give me a number and I will give you the all prime number between them"));
let primNum =true;
if(num < 2){
    console.log("There is no prime number" + num);
    primNum=false;
}
const isPrime =(num)=>{
    for(let i=2;i<=num;i++){
        primNum =true;
        for(j=2;j*j<=i;j++){
            if(i%j===0){
                primNum=false;
                
            }

        }
         if(primNum){
            console.log(i+" "+"This is a prime number")
        }
    }
   
}
isPrime(num);
