// const numbers = [1, 4, 5, 8]
// const array = [6,7,8, 9, 10]

// Array yaa Object ke andar je value ko kisi variable me store karte hai 
// let [a, b] = numbers;

// console.log(a,b)


// Rest Operator 

// let [a, b, ...rest] = array;


// console.log(a, b, rest)


// const person = {
//   name: "abcd",
//   age: 20
// }

// const {name, age} = person;
// // let name = person.name;
// // let age = person.age;

// console.log(name, age)

let numbers = [1,4,6,8]

let [num1, num2, num3, ...rest] = numbers;

// let num1 =  numbers[0];
// let num2 = numbers[1];
// let num3 = numbers[2];

console.log(num1, num2, num3, rest)