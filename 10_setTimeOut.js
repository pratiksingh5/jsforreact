// setTimeout aur setInterval ---Ye use hota hai async JavaScript 

// setTimeout(callback, time)
// setInterval(callback, time)

// Late Delay -- SetTimeout 


// console.log("Hiiii")
// setTimeout(() => console.log("Namste"), 2000)
// console.log("Hello")


const timer = () => {
    console.log("tick tick 1")
}


setInterval(timer, 1000);

clearInterval(timer, 2000)


// timeOut --> Delay
// Intervar - Time period duration