// function User(name){
//     this.name =name;
//     this.isAdmin =false;
// }
// let user = new User("Amulya");
// if(user.name === "Amulya"){
//     user.isAdmin = true;
// }
// console.log(user.name);
// console.log(user);
// user = new User("Aditi");
// console.log(user.name);
// console.log(user);
// function User(name){
//     console.log(!(new.target));
// }
// User();
// new User();
// function User(name){
//     if(!(new.target)){
//         return new User(name);
//     }
//     this.name =name;
// }
// let Amulya = User("King");
// console.log(Amulya);
// console.log(Amulya.name);
// function Calculator(){
//    this.read=function(){
//     this.a =+(prompt("give your first number"));
//     this.b =+(prompt("give your second number"));
//    }
//    this.sum=function(){
//     return this.a + this.b;
//    }
//    this.mul=function(){
//     return this.a * this.b;
//    }
// }
// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );
function Accumulator(startingValue){
    this.value =startingValue;
this.read =function(){
    this.value+=+(prompt("Give me the value",0));
}

}
let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value);