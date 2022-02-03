let js = 'amazing'
console.log(40 + 8 + 23 - 10)

let firstName = "Jonas"
console.log(firstName)

let javascriptIsFun = true
console.log(javascriptIsFun)

console.log(typeof true)
console.log(typeof javascriptIsFun)
console.log(typeof 23)

let age = 30
age = 31

const birthYear = 1991


console.log("==== Basic Operators ====")
const now = 2037
const ageJonas = now - 1991
const ageSarah = now - 2018
console.log(ageJonas)
console.log(ageSarah)

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)

firstName = 'Jonas'
const lastName = 'Schmedtmann'
console.log(firstName + ' ' + lastName)

let x = 10 + 5
x += 10 // x = x + 10
x *= 4 // x = x * 4
x++ // x = x + 1
x--
x--
console.log(x)

console.log(ageJonas > ageSarah)
console.log(ageSarah >= 18)

const isFullAge = ageSarah >= 18

console.log(now - 1991 > now - 2018)

console.log("==== Coding Challenge #1 ====")

let mark_weights = 78
let mark_height = 1.69

let john_weights = 92
let john_height = 1.95

const BMIMark = mark_weights / mark_height ** 2
const BMIJohn = john_weights / (john_height * john_height)

console.log(BMIMark, BMIJohn)


console.log("==== Strings and Templates Literals ====")

let job = 'Teacher'
const jonas = "I'm " + firstName + ', a ' + (now - birthYear) + ' year old ' + job + '!'
console.log(jonas)

const jonasNew = `I'm ${firstName}, a ${now - birthYear} year old ${job}!`
console.log(jonasNew)

console.log(`String
multiple
lines`)

console.log("==== Taking Decisions: if/else Statements ====")

const ages = 19
const isOldEnough = age >= 18

if(age >= 18) {
    console.log('Sarah can start driving license')
} else {
    const yearsLeft = 18 - age
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`)
}

let century
if (birthYear <= 2000) {
   century = 20 
} else {
    century = 21
}
console.log(century)