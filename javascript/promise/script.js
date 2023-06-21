// what are promises?
//What is asynchronous programming?
//Blocking vs non-blocking code
//Why do we use promises?
//What is an API

//JS is single-threaded language

console.log("I'll be first");
console.log("I'll be second");
console.log("i'll be third");

// but what if things took longer?

//an example of blocking code(while loops, for loops)
function wait (ms){
    let start =Date.now()
    let now =start;

    while(now - start < ms){
        now =Date.now();
    }
}


document.querySelector("button").addEventListener("click",() =>{
    wait(3000)
    alert("You clicked the button");
})
// console.log("I an before the wait function");
// wait(8000);
// console.log("I am after the wait function");

//Non-blocking code(asynchronous code)
console.log("I am before the timeout")
setTimeout(() => {
    console.log("I am inside the set timeout")
}, 4000 )

setTimeout(() => {
    console.log("I am set timeout too")
},1000);
console.log("I am after setTimeOut") 

//event loop

//Promises
//Promises are non-blocking code
//something in the future that may or maynot happen
//they are just an object but special object that can have 3 states
// that object represents the outcome of an asynchronous operation
//similar to real life promises , they can be either 
//fulfilled
// rejected,
//pending- while waiting for the outcome


//API
//Food ordering app
// we need some data to show to the user

//create a promise
// Fulfileed promise 


// const myFulfilledPromise = Promise.resolve("This is ythe value of fulfilled promise");
// console.log(myFulfilledPromise);


//Rejected Promise
//const rejectedPromise = Promise.reject("This is my rejected promise");
//console.log("my rejected promise");

//I want to delay my promise to simulate waiting for a response from the server


const myFulfilledPromise =new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve("I am a fulfuilled promise, you had to wait for me");
    // reject("I am a rejected promise");
      }, 2000)
});
console.log("I am before the promise");

//this will log a pending promise that will get fulfilled after certain amout of time,I
//don't have accesss to the value of the promise
console.log(myFulfilledPromise);
console.log("I am after the promise");

//I can only access the value after my promise stops pending

//.then
console.log("I am before .then")
myFulfilledPromise.then((value) => {
    console.log("inside .then");
    console.log(value);
});

//try {} catch {} finally
console.log("I am after .then,the program keeps running...");


// a functio that takes in a number
// if number is positive -resolve  the promise

//negative -reject

const promiseFunction = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num > 0) {
                resolve(`The value is ${num}`);
            } else {
                reject(`Invalid value: ${num}`);
            }
        }, 2000);
    });
};

promiseFunction(-2)
    .then((value) => {
        console.log(value);
    })
    .catch((e) => {
        console.log(e);
    });