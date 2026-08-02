console.log(`Create an object calculator with three methods:

read() prompts for two values and saves them as object properties with names a and b respectively.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.
let calculator = {
  // ... your code ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );`);
let calculator = {
  read(){
    this.val1 = Number(prompt("Give me the first number"));
    this.val2= Number(prompt("Give me the second number"));
    
  },
  sum(){
    let Add =this.val1 + this.val2;
    return Add;
  },
  mul(){
   let multi = this.val1*this.val2;
   return multi;
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );