// what is control flow?
//the order in which our code gets executed (from top to bottom)
//a conditional block
//for block

//if(condition){
//if that condition is true, this code will run
//}
if(2>1){
    console.log("hello");
}
//if(condition){
//if that condition is true, this code will run
//}else{
     //some code that will run if condition is false
//}

const x= null;
//=5;
if(x)
{
    console.log("x is truthy");
}else{
    console.log("x is falsey");
}
console.log("some more code here");

//lets write an if statement that says "y is an odd number"/"y is an even number".

let y=6;

if(y%2==0)//(!(y%2))
{
    console.log("y is even");
}else{
    console.log("y is odd")
}

// chaining conditions
//check if the age is greater than or equal to 18
//check if they have a drivers license
//if over or 18 and have license -> "you can drive"
//if over/or 18 and no license -> "go and get your license"
//if under 18 -> you can't drive


let age = 21;
let hasLicense = false;

if(age>=18 && hasLicense=== true )
{
    console.log("you can drive")
}else if(age >= 18 && !hasLicense){
    console.log("Go and get your license")
}else{
    console.log("you can't drive")
}



if(age>=18 && hasLicense=== true )
{
    console.log("you can drive")
}else if(age >= 18 && !hasLicense){
    console.log("Go and get your license")
}else if(age<18 && hasLicense){
    console.log("How did you get your license");
}else{
    console.log("you can't drive")
}

//if there is more than one condition in an if block
// that evaluates to true,only the code from the first one will get executed

let score=90;
 
if(score >= 90)
    {
console.log("A");
    }
    else if(score>=80){
        console.log("B");
    }else{
        console.log("C");
    }
    console.log("even more code here");


//ternary statement
let value = 0;
const stringToPrint = value > 0 ?"value is greater than 0" : "value is 0 or less than 0";
console.log(stringToPrint);

//switch statement
let fruit = "apple ";

switch(fruit){
    case "apple":
        console.log("This is an apple");
        break;
        case "orange":
        console.log("This is an orange");
        break;
        case "strawberry":
        case "raspberry":
        console.log("This is aberry");
        break;
        default:
        console.log("I don't know what fruit it is");
}