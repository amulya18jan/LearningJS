console.log("3. Write a function that returns the n primes");
const nPrime =(n)=>{
    let primes= [];
    let num=2;
    while(primes.length<n){
        let isprime =true;
        for(let i=2;i*i<=num;i++){
            if(num%i===0){
                isprime=false;
                break;
            }
          
          
        }
        if(isprime){
            primes.push(num);
          }
          num++
    }
    return primes;
}
console.log("Primes:"+nPrime(10))