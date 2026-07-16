class NumFinder{
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
    
    }
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
let primeCheck =new NumFinder();
let TwinPrime = new NumFinder();
console.log(primeCheck.isPrime(7));
console.log(TwinPrime.isTwinPrime(20));