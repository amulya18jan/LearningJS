class NumFinder{
    constructor(){
        console.log("Creating new Objects");
    }
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
    sexyPrime(num){
        const sexyP=[];
        for(let i =2;i<num-6;i++){
            if(this.isPrime(i)&& this.isPrime(i+6)){
                sexyP.push([i, i+6]);
            }
        }
        return sexyP;
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
    whoami(str){
        this.name = str;
        return this.name;
    }
    
}
let primeCheck =new NumFinder();
let TwinPrime = new NumFinder();
let SexyPrime =new NumFinder();
let Amulya =new NumFinder();
console.log(Amulya.whoami("Amulya"));
console.log(Amulya);
// console.log(primeCheck.isPrime(7));
// console.log(TwinPrime.isTwinPrime(20));
// console.log(SexyPrime.sexyPrime(50));
