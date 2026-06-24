console.log("Welcome to the FizzBuzz Game");
function fizzBuzz(num){
   if(num%3==0&&num%5==0){
        return "FizzBuzz";
    }else if(num%5 == 0){
     return "Buzz";
    }else if(num%3==0){
      return "Fizz"
    }else{
        return "Please try again";
    }
}
console.log(fizzBuzz(12));
console.log(fizzBuzz(10));
console.log(fizzBuzz(15));
console.log(fizzBuzz(7));