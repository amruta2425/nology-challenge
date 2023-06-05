//const-stays the same value throughout the code

const myHeight= "160cm";
console.log(myHeight);

console.log("My height is "+ "" +myHeight);

console.log("You are "+myHeight + "tall");

//template string

console.log(`I am ${myHeight} tall.`)
//this gives me an error as i am trying to assign a value to a constant
//myHeight ="180 cm"

//console.log(myHeight);
//let-value can change,we can reassign it.
let myName="Amruta"
console.log("hi" +myName);

myName="Amy"
console.log("hello" +myName);
//prompt
// I want to get variables from the user
// we want to add 2 numbers
//print the answer to the console

let number1=prompt("First Number");
console.log(number1);

let number2=prompt("Second Number");
console.log(number2);

console.log(typeof number1);
console.log(typeof number2);

let answer;
answer = parseInt(number1) +parseInt (number2);
console.log(answer);

//var(do not use)
//it is not scope safewe will wait for loops to talk more



