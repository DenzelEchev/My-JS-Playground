import User, { printName, printEmail } from "./user.js";

const user = new User('Denzel', 'Echevarria', 'denzel.echevarria@gmail.com')
console.log(user)

printEmail(user)
printName(user)