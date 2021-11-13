// const { test, expect } = require("@jest/globals");
// const {
//     describe
// } = require("yargs");
const {
    add, newcar, truthyTest, nameLength, names, toStringFunc, planetOrder, students, studentsPresent, squareAndContenate, century, binary
} = require("../app.js")



describe("this block is testing all my functions", () => {
    test("should equal 5 when passed 2 and 3", () => {
        expect(add(2, 3)).toBe(5)


    })
    test("tests to makes sure that the objects properties are equal to your test function ", () => {
        expect(newcar).toEqual({ make: 'ford', model: 'ka' })
    })

    test("tests if something is truthy", () => {
        expect(truthyTest).toBeTruthy()
    })
    
    test("tests if something is not falsy", () => {
        expect(truthyTest).not.toBeFalsy()
    })
    
    test("tests if returned value from a array has 6 or more characters", () => {
        expect(nameLength(names)).toBeGreaterThanOrEqual(6)
    })
    
    test("tests if returned value is type string", () => {
        expect(typeof toStringFunc(6)).toBe("string")
    })
    
    test("tests if planets are in correct order in array", () => {
        expect(planetOrder(3)).toBe("earth")
    })
    
    //two typos in the question unless i missed the point
    test("if number of present students is 4", () => {
        expect(studentsPresent(students)).toBe(4)
    })

    //integers are type number
    test("tests if returned value is type number", () => {
        expect(typeof squareAndContenate(234)).toBe("number")
    })
    test("should equal 916 when passed 34", () => {
        expect(squareAndContenate(34)).toBe(916)
    })
    
    //1705 is actually 16th century
    test("should return 16 when passed 1705", () => {
        expect(century(1705)).toBe(16)
    })


    test("shoulder return 4 when passed [0, 1, 0, 0]", () => {
        expect(binary([0,1,0,0])).toBe(4)
    })



})