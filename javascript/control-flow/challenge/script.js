//MVP: Check for the smallest value--->Challenge 1

//Create two variables x & y 
// Write an if / else block It should compare a number x to another number y 
//It should print ("x is greater than y") in the console 
//Or "x is smaller than y" Or "x is equal to y" Depending on the value of x and y


let x = 100;
let y = 100;

if(x === y)
{
    console.log("x is equal to y");
}
else if(x >= y)
{
    console.log("x is greater than y");
}
else{
    console.log("y is greater than x");
}


//MVP: Console log the user's input depending on the data type---> Challenge 2

//Create a variable userInput Write an if / else block 
//If the input is a number, it should console log that number but squared 
//If the input is a string, it should console log that input 
//If the input is anythig else, the console should say "invalid input"


let userInput="32";
let squaredNumber;

if(userInput%2 == 0 || userInput%2 == 1)
{
    squaredNumber= userInput **2;
    console.log(`The user input is valid and the squared number is ${squaredNumber}`);
}
else 
{
    console.log(userInput);
    console.log("Invalid Input");
}

//if(typeof userTnput === "number"){
    //console.log(userInput ** 2);
// } else if(typeof userInput === "string"){
   // console.log(userInput);
// } else{
//   console.log("Invalid input");
// }

//do we treat  "true" ,"false" ,"null" ,"undefined" as a strings or numbers?

//if(parseInt(userInput)){
   // console.log(userInput ** 2);
   // else if(userInput === "true" || userInput === "false"){
//console.log("invalid input");
  // }else{
   // console.log(userInput);
  //}


