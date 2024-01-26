let numbers = [1,2,3,4,5,6,7,8]

// Save all number which are greater than 5 

// numbers.forEach((num) => console.log(num) )

// let newNumbers = numbers.forEach((num) => {
//     return num
// } )

// console.log(newNumbers)

let newNumbers = [];
numbers.forEach((num) => {
    if(num > 5){
        newNumbers.push(num)
    }
})
console.log(newNumbers)