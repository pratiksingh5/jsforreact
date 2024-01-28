// 1. Callback
// 2. Promises
// 3. Async Await

const data = [
    {
        username : "johndoe",
        role: "admin"
    },
    {
        username : "clark",
        role: "user"
    },
    {
        username : "monica",
        role: "admin"
    }
]


function getData(){
 setTimeout(() => {
    let output = "";
    data.forEach((user, i) => {
        output += `<li>${user.username}</li>`
    })
    document.body.innerHTML  = output
 }, 3000)
}

getData()