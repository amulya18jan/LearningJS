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
//   console.log("Solving this question using while loop");
//   let humanChoice =parseInt(prompt("Select any number between 1 to 10 :"));
//   let num = Math.floor(Math.random()*11);

//   while (humanChoice !== num) {
//     console.log("Try Again");
//      humanChoice =parseInt(prompt("Select any number between 1 to 10 :"));
//   }
// console.log("You won the game");
// console.log("Reverse a numbeer")
// let num = 123;
// let rev =0;
// while (num> 0) 
// {
//   rev = rev*10 +num%10;
//   num= Math.floor(num/10)
// }


// console.log(rev)
// console.log("Palindrome number")
// const palin = (num) => {
//   let originNum = num;
//   let rev = 0;
//   while (num > 0) {
//     rev = rev * 10 + (num % 10);
//     num = ~~(num / 10);
//   }
//   return rev === originNum;
// };

// const superPalin=(num)=>{
//   let root = Math.sqrt(num);
//   if (!Number.isInteger(root)) {
//     return "Its not a super Palindrome";
//   }
//   if (palin(num) && palin(root)) {
//     return "Its a super Palindrome";
//   } else {
//     return "Its not a super Palindrome";
//   }
// }
// console.log(superPalin(11))
let arr =[3,6,1,2,7,8,4,5,6,7,9,10,4];
let conArr=[];
for (let i = 0; i < arr.length; i++) {
    if (!conArr.includes(arr[i])) {
        conArr.push(arr[i]);
    }
}
console.log(conArr.sort((a, b)=> a-b));