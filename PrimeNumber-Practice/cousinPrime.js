console.log("Cousin Primes (difference of 4)");
const cousinPrime =(limit)=>{
    let Cousins =[];
    const isPrime=(num)=>{
        if(num<2){
            return false;
        }
        for(let i=2;i*i<=num;i++){
            if(num%i===0){
                return false;
            }
        }
        return true;
    }
    for(let i=2;i<=limit-4;i++){
        if(isPrime(i)&&isPrime(i+4)){
            Cousins.push([i,i+4])
        }
    }
    return Cousins;
}
console.log(cousinPrime(100));