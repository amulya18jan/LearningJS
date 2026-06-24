console.log("The odin project first practice questions");
const add7 = (num) => num + 7;
console.log(add7(10));
console.log("The odin project seccond practice questions");
const multiply = (num1, num2) =>{ console.log(`My numbers are ${num1}, ${num2}`); console.log("There multiplication is"); return num1 * num2;} 
console.log(multiply(3,2));
console.log("The odin project third practice questions");
function capitalize(text){
    return text.charAt(0).toUpperCase()+text.slice(1).toLowerCase();
}
console.log(capitalize("amulya"));
console.log(capitalize("AMULYA"));
console.log(capitalize("AmUlYA"));


console.log("The odin project fourth questions");
function lastLetter (str){
    return str.charAt(str.length-1);
}
console.log(lastLetter("Let/'s go"));

