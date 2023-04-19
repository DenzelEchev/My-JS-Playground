import User, { printName } from "./user.js";
import sheet from './css/style.css' assert { type: 'css' }
document.adoptedStyleSheets = [sheet];

document.querySelector('button').addEventListener('click', generateUser)

function generateUser(){
let fName = document.querySelector('#fName').value
let lName = document.querySelector('#lName').value
const user = new User(fName, lName, 'denzel.echevarria@gmail.com')
printName(user)

}