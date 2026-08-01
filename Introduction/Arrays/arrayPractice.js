console.log("what ever I have done in this week i will do practice of it");
const Arrays = {
    isPrime(num){
        if(num<2){
            return false;
        }
        for(let i=2;i*i<=num;i++){
         if(num%i === 0){
            return false;
         }
        }
        return true;
    },
    primeInArray(arr){
        let result = []
        for(let i =0; i<arr.length;i++){
            if( this.isPrime(arr[i])){
                result.push(arr[i]);
            }
        }
        return result;
    }
}
console.log(Arrays.primeInArray([3,2,5,8,12,11]));