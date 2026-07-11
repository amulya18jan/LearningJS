console.log("Find the 100th prime number");
const Prime100th =(n)=>{
    let num =2;
    let prime=[];
    while(prime.length<n){
        let isPrime=true;
        for(let i=2;i*i<=num;i++){
            if(num%i===0){
                isPrime=false;
                break;
            }
           
        }
        if(isPrime){
                prime.push(num);
            }
         
            num++;
    }
    return prime;
}
console.log("100th Prime :"+Prime100th(100))