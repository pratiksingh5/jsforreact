// Reduce Method 

// REDUCE KA USE KARNA HAI?? 
// Jahan tumhe array ke elements pe kuch operation karwane hai aur ek single output chahiye hoga wahan hum reduce use krenge 


// Filter aur Map me output Array milta hai
// par Reduce me ek single value output milta hai 

// InitialValue == start value 
// currentValue == jo value current me chal rha 
// accumulator == jo result current me chal rha hai 


// let numbers = [4,7,2]

// for(let i=0; i < numbers.length; i++){
//     console.log(i)
// }

// for(let i=0; i < numbers.length; i++){
//         // console.log(numbers[i]) ---Current Value 
//     }


// const array1 = [1, 2, 3, 4];

// const total = array1.reduce(function(accumulator, currentValue){
//   return accumulator + currentValue
// }, 100)

// ---100
// 100 + 1 ==> 101

// 101 + 2 ==> 103
// 103 + 3 ==> 106
// 106 + 4 ==> 110


// console.log('total', total)

const numbers = [2,3,5]

// output 30 

// Array.redcue((accumulator, currentValue)=>{}, initialValue)