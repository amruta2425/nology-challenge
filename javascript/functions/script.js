//what are functions?
//blocks of code that perform a certain task, that we can reuse

//writing instructions of what we want to happen, giving them a name 
//every time we call the function,we run those instructions.

//why do we need them?
//to avoid repeating code, to avoid bugs
const student1 ="amruta";
const student2 = "john";
const student3 = "kate";

console.log(`Hello, my name is ${student1}`);
console.log(`Hello, my name is ${student2}`);
console.log(`Hello, my name is ${student3}`);

function introduceYourself(name){
    //do something with the data
    const introductionStr = `hello ,my name is ${name}`
    //return an output
    return introductionStr;
}
    console.log(introduceYourself(student1));
    console.log(introduceYourself(student2));
    console.log(introduceYourself(student3));
    console.log(introduceYourself(student1));

    //parameters are optional

    //function that create a date
    //in JS we have a date object

    function getCurrentDate(){
        const today = new Date();
        return today.toDateString;
    }
    console.log(getCurrentDate());


  function printSomething(something) {
    // this is a side effect
    console.log(something);
    return something;
  } 
  printSomething("Hi");

  console.log(printSomething("Hello"));

  const myFunctionReturnedThis = printSomething("nology");
  console.log(myFunctionReturnedThis ,"returned value");


  //arrow-function

  const rectangleArea = (width,height) => {
    //const area = width * height;

    //return area;
    return width * height;
  };


  const shorterArea = (width ,height) => width * height;

  const calculatedArea =rectangleArea(4 ,5);
  console.log(calculatedArea);

  const shorterCalcArea =rectangleArea(4 ,5);
  console.log(shorterCalcArea);

  //function 