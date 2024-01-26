let numbers = [1, 2, 3, 4, 5, 6, 7, 8]

// let newNumbers = numbers.filter((num)=> {
//     return num > 4
// })

let newNumbers = numbers.filter((num) => num > 4)

// console.log(newNumbers)

// output 2,4,6,8
// Print Even Numbers 
let products = [ 
    {
        name: "Zara 1",
        category: "tshirt",
        gender: "female",
        price: 400
    },
    {
        name: "Pepe Jeans",
        category: "jeans",
        gender: "female",
        price: 800
    },
    {
        name: "Denim",
        category: "jeans",
        gender: "male",
        price: 1000
    },
    {
        name: "Hoodie",
        category: "tshirt",
        gender: "female",
        price: 700
    },
    {
        name: "Black",
        category: "shoes",
        gender: "male",
        price: 200
    }
]


let filteredProduct = products.filter((product) => product.category === "tshirt")
console.log('filtered Product', filteredProduct)