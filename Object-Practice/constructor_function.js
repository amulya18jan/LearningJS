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
function User(name){
    console.log(!(new.target));
}
User();
new User();