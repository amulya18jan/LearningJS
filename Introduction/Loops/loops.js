// console.log("Learning all types of loops");
// console.log("Learning for loop");
// // for(let i =0;i<=10;i++){
// //     console.log(i);
// // }
// console.log("Table of any number");
// // let num = parseInt(prompt("Enter a number of which you want table"));
// // for(let i =1; i<=20;i++){
// //     let result = num * i;
// //     console.log(`${num}*${i} = ${result}`);
// // }

// // let num =15;
// // let i =1;
// // while(i<=20){
// //     let result = num * i;
// //     console.log(result);
// //     i++;
// // }
// let i=0;
// do{
//     console.log(i);
//     i++;
// }while(i<10);
// console.log("____________________________________________________________________________________");
// let str = "Amulya Awasthi";
// let length = 0;
// for(val of str){
//     console.log("i" + "=" + val);
//     length++;
// }
// console.log(length);
// console.log("___________________________________________________________________________________________________"
// );
// console.log("Practice questions for loops");
// console.log("Print all even number from 0 to 100");
// for(i=1;i<=100;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// console.log("Create a game where you start with any random game number.Ask the user to keep guessing the game number until the user enter the correct number");
// let num = Math.floor(Math.random()*11);
// function guessTheNumber(){
// let humanChoice =parseInt(prompt("Select any number between 1 to 10 :"));
// if(humanChoice===num){
//     console.log("you won the game");
// }else{
//     console.log("try again");
//     guessTheNumber();
// }
// }
// guessTheNumber();
  console.log("Solving this question using while loop");
  let humanChoice =parseInt(prompt("Select any number between 1 to 10 :"));
  let num = Math.floor(Math.random()*11);

  while (humanChoice !== num) {
    console.log("Try Again");
     humanChoice =parseInt(prompt("Select any number between 1 to 10 :"));
  }
console.log("You won the game");