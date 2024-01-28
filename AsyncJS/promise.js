

let getData = () => new Promise((resolve, reject) => {
    if(false){
        resolve("resolve hua")
    }else{
        reject("promise pura nui hua")
    }
})

getData().then(()=>{
    console.log("Hii")
}).catch(()=> {
    console.log("fail")
})