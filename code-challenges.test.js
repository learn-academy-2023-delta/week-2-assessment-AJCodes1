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
        expect(divisibleByThree(object1)).toEqual("15 is divisible by three")
        expect(divisibleByThree()).toEqual("0 is divisible by three")
        expect(divisibleByThree()).toEqual("-7 is not divisible by three")
    })
})

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.
const divisibleByThree = (number) => {
        if(number % 3 === 0){
            return "15 is divisible by 3"
        }
}

// Pseudo code:
//create a function called divisibleByThree that takes an object as an argument
NEED HELP WITH ALL THESE 3 FUNCTIONS, I WILL BE ATEENDING OFFICE HOURS THIS WEDNESDAY
//

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.
describe("allCaps", () => {
    it("takes in an array of words and returns an array with all the words capitalized.", () => {
        expect(allCaps(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(allCaps(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.
const allCaps = (array) => {
    return array.


}

// Pseudo code:


NEED HELP WITH ALL THESE 3 FUNCTIONS, I WILL BE ATEENDING OFFICE HOURS THIS WEDNESDAY

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

describe("firstIndex", () => {
    it("takes in a string and logs the index of the first vowel", () => {
        expect(firstIndex(vowelTester1)).toEqual("1")
        expect(firstIndex(vowelTester2)).toEqual("0")
        expect(firstIndex(vowelTester3)).toEqual("2")
        

        ex
    })
})



const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.
const firstIndex = (string) => {
    return string(vowelTester1[])




}
// Pseudo code: 
NEED HELP WITH ALL THESE 3 FUNCTIONS, I WILL BE ATEENDING OFFICE HOURS THIS WEDNESDAY 
