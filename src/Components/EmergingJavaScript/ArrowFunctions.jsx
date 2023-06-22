// Emerging JavaScript

// Normal Function
let sum1 = function (a, b) {
  return a + b
}

console.log("1. ", sum1(2, 3)) // 5

// A -> whenever function returns single expression then you can simply remove(return , {}, function)

// Sample 1
const sum2 = (a, b) => a + b
console.log("2. ", sum2(4, 6)) // 10

// Sample 2
let greet = (msg) => console.log(`Hey, Good Morning ${msg}`)
greet("Alan") // Hey, Good Morning Alan

// Single parameter with multiple statements
let checkAge = (age) => {
  if (age >= 18) {
    console.log("Eligible for Vote")
  } else {
    console.log("Not Eligible ")
  }
}

checkAge(20) // Eligible for Vote
checkAge(15) // Not Eligible
