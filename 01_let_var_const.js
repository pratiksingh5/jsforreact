// let vs var vs const 

// Keyword jisse variable ko declare karte hai 
// eg: 
// let name = "Pratik";
// const city = "Delhi";
// var country = "India";


// 1. JS Version 
// ES5 and ES6 

// ES5 = Purana
// ES6 = Naya 


// ES5 ===> var Keyword use karte the 
// ES6 ===> const and let use karte hai 


// 1. Declaration and Definition 

// Declaration 
// let a;
// const username;

// Declaration and Initialization 
// let a = 5;



// function Definition 
// function sum(){
//     // function ke andar ka code 
// }



// sum()   function calling/ invoke


// const ==> For values which remain fixed 
// let and var ==> Jo value change ho sakti hai 


// 1. CONST 

// Can be decalared but cannot be redeclared 

// const num = 6;
// num = 10;


// const and let redeclare nhi ho skta 
// but var redlare ho skta hai 


// 1.1 Initialization 
//  reinitialize 
// let ==> Ho skta hai
// const ==> Nhi hoksta 
// var ==> Ho sakta



// 3. Scope 

// let and const  ==> Block Scope 
// var ==> global Scope 


// {} --> block 


// let a  = 5;
// // console.log('hello')
// if(true){
//     let a = 10;
//     console.log(a)
// }

// function number(){
//     for(const i = 0; i < 3; i++){
//         console.log('pehla', i)
//     }
//     console.log('dusra', i)
// }

// number()


// function number(){
//         for(let i = 0; i < 3; i++){
//             console.log('pehla', i)
//         }
//         console.log('dusra', i)
//     }
    
// number()

// function number(){
//     let i = 6;
//         for(let i = 0; i < 3; i++){
//             console.log('pehla', i)
//         }
//         console.log('dusra', i)
//     }
    
// number()

//  function number(){
//         for(var i = 0; i < 3; i++){
//             console.log('pehla', i)
//         }
//         console.log('dusra', i)
//     }    
// number()

// i = 0;
// i < 3
// 0 < 3
// true ==> print ==> +1 kardo 
// i== 1;


// i = 1;
// i < 3
// 1 < 3
// true ==> print ==> +1 kardo 
// i== 2;


// i = 2;
// i < 3
// 2 < 3
// true ==> print ==> +1 kardo 
// i== 3;


// i = 3;
// i < 3
// 3 < 3
// false ==> loop break 