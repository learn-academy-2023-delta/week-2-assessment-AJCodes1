// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// Pseudo code:

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.
describe("divisible", () => {
    it("decides if the number inside it is evenly divisible by three or not.", () => {

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"
        expect(divisibleByThree(object1)).toEqual("15 is divisible by three")
        expect(divisibleByThree(object2)).toEqual("0 is divisible by three")
        expect(divisibleByThree(object3)).toEqual("-7 is not divisible by three")
    })
})


// b) Create the function that makes the test pass.
const divisibleByThree = (num1) => {
        if(num1.number % 3 === 0){
            return `${num1.number} is divisibole by three`
        } else if (num1.number % 3 !== 0 ){
            return `${num1.number} is not divisible by three`
        }
    }

// Pseudo code:
//create a function divisible by three, takes paramaeter num1
//use conditionals 
//object - key value pair
//use dot notation to acces value in the object
//use modulo and sctrict equality operators 
//return string interpolation with expected output


//

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.
describe("allCaps", () => {
    it("takes in an array of words and returns an array with all the words capitalized.", () => {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
        // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
        expect(allCaps(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(allCaps(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})


// b) Create the function that makes the test pass.
const allCaps = (array) => {
    return array.map((word) => {
        return  word.charAt(0).toUpperCase() + word.slice(1)

    })
}

// Pseudo code:create a funtion called allCaps takes 1 argument 
// use .dot to iterate through array
//each strings index 0, upper cse that character 
//concat rest of word using .slice


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

describe("vowelChecker", () => {
    it("takes in a string and logs the index of the first vowel", () => {
        const vowelTester1 = "learn"
        // Expected output: 1
        const vowelTester2 = "academy"
        // Expected output: 0
        const vowelTester3 = "challenges"
        // Expected output: 2
        expect(vowelChecker(vowelTester1)).toEqual("1")
        expect(vowelChecker(vowelTester2)).toEqual("0")
        expect(vowelChecker(vowelTester3)).toEqual("2")
    })
})


// b) Create the function that makes the test pass.
const vowelChecker= (string) => {
   const vowelArray = ['a', 'e', 'i', 'o', 'u']
   for(let i = 0; i < string.lenght; i++) {
    if(vowelArray.includes(string[i])){
        return i
    }
   } 
}
// Pseudo code: crete an array that contains vowels 
// use the for loop to iterate through the array
//if the current vowel is in our vowel array we are gonna return index .

