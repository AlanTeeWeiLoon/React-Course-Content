// Emerging JavaScript

// Destructuring

// Array Destructuring
let food = ["Apples", "ColdDrinks", "Eggs", "Noodles"]

// Normal Method / Tranditional Method
let i1 = food[0]
let i2 = food[1]
let i3 = food[2]
let i4 = food[3]

console.log("1. ", i1, i2, i3, i4) // Apples ColdDrinks Eggs Noodles

// Destructuring Method
const [a, b, c, d] = food
console.log("2. ", a, b, c, d) // Apples ColdDrinks Eggs Noodles

// Object Destructuring
let person = {
  name: "Peter",
  age: 23,
  email: "abc@xy.com",
  job: "SpiderMan",
  address: "xyz",
};

// Normal Method / Tranditional Method
const Job = person.job
const Name = person.name
const Age = person.age

console.log("3. ", Name, Age, Job) // Peter 23 SpiderMan

const { name, age, email, job } = person
console.log("4. ", name, age, email, job) // Peter 23 abc@xy.com SpiderMan

const { address } = person
console.log("5. ", address) // xyz
