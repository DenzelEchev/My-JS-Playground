export default class User {
    constructor(firstName, lastName, email){
        this.firstName = firstName,
        this.lastName = lastName,
        this.email = email
    }
}

export function printName(user){
    console.log(`User's name is ${user.firstName} ${user.lastName}`)
}
export function printEmail(user){
    console.log(`User's email is ${user.email}`)
}