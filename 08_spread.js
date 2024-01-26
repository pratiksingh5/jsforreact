const person = {
    name: "abcd",
    age: 20
  }

// person.name = "Rohan"
// person.age = 30

// const person1 = {name: "Ajay"}

// // const person2 = person1;
// const person2 = {...person1, name: "Nishant"}

// // console.log(person2);

// person2.name = "Nishant";

// console.log('person2',person2);
// console.log('person1',person1);



let array1 = [1,3,4]
let array2 = [6,7,8]

let newArray = [...array1, ...array2]

console.log(newArray)