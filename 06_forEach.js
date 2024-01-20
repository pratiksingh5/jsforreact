
let users = [
    {
        username: "Mohit",
        role: "Admin",
        age: 20
    },
    {
        username: "Simran",
        role: "Super Admin",
        age: 22

    },
    {
        username: "Vikas",
        role: "Admin",
        age: 24

    }
]

users.forEach((user) => {
  if(user.age > 20){
    console.log(user.username)
  }
})


// let array = [1,2,3,4];
// expected output : 2,4,6,8 


// FOREACH:
// Array
// Array ke har ek element pe operation krna hoga toh