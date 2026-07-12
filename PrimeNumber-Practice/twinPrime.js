console.log("Find all twin primes (difference of 2)");
const twinPrime =(limit)=>{
    let TwinPrime=[];
    const PrimeNumber =(num)=>{
        if(num <2){
            return false;
        }
        for(let i=2;i*i<=num;i++){
            if(num%i===0){
                return false
            }
        }
        return true;
    }
    for(let i=2;i<=limit-2;i++){
        if(PrimeNumber(i)&&PrimeNumber(i +2)){
            TwinPrime.push([i, i+2])
        }
    }
    return TwinPrime;
}
console.log(twinPrime(20));