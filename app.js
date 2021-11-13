const chalk = require("chalk");

const add = (num1, num2) => {
    return num1 + num2
}


function car(make, model) {

    this.make = make
    this.model = model


}

const makenewcar = (make, model) => {
    newcar = car(make, model)
    return newcar
}

let newcar = new car("ford", "ka")

console.log(newcar);

const truthyTest = () => {
    if (truthyFunc()) {
        truthyTest()
    }
}

const names = [
    "john",
    "mary",
    "angela",
    "mario",
    "michaelangelo"
]
const nameLength = (names) => {
    for (let i = 0; i < names.length; i++) {
        if (names[i].length >= 6) {
            return names[i].length
        }
    }
}

console.log(nameLength(names));

const num = 6
const toStringFunc = (num) => {
    return num.toString()
}
const planets = [
    "mercury",
    "venus",
    "earth",
    "mars",
    "jupiter",
    "saturn",
    "uranus",
    "neptune"
]
const planetOrder = function (planetNum) {
    return planets[planetNum - 1]
}

const students = [
    true,
    true,
    true,
    true,
    false
]
const studentsPresent = (students) => {
    let count = []
    for (let student of students) {
        if (student == true) {
            count.push(student)
        }
    }
    return count.length
}

console.log(studentsPresent(students));

const squareAndContenate = (num) => {
    let split = num.toString().split("")
    let powerArray = []
    for (let i = 0; i < split.length; i++) {
        let power = split[i] ** 2
        powerArray.push(power)
        console.log(powerArray);
    }
    const concatArray = parseInt(powerArray.join(""))
    
    return concatArray
}
console.log(squareAndContenate(243));


const century = (year) => {
    let yearString = year.toString()
    let century = parseInt(yearString[0] + yearString[1])
    return century - 1
}
console.log(century(1800));

const nums = [0, 1, 0, 0]

const binary = (nums) => {
    let joinedNum = nums.join("")
    let binary = parseInt(joinedNum, 2)
    return binary
}
console.log(binary(nums));

module.exports = {
    name: "app.js",
    description: "add function",
    add,
    newcar,
    truthyTest,
    nameLength,
    names,
    toStringFunc,
    planetOrder,
    planets,
    studentsPresent,
    students,
    squareAndContenate,
    century,
    binary

    //if what you are exporting a variable you dont need to specify the key
}