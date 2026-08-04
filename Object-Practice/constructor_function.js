function User(name){
    this.name =name;
    this.isAdmin =false;
}
let user = new User("Amulya");
console.log(user.name);
user = new User("Aditi");
console.log(user.name);