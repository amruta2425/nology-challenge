//what are loops?
//sometimes we want to run the same code multiple times,instead of writing it manually,
//I can create a loop

//for loop

console.log(1);
// why do we need them?


//arrays and loops
//arrays store a  number of elements

//I can create a for loop that will loop througj the whole array and do something to every element

const students = ["john" ,"kate","mike"];
//I want to print "Hello,{name}""

for (let i=0; i<students.length; i++){
    console.log(`Hello, ${students[i]}`);
    console.log(`The index is: ${i}`);
}

const upperCaseStudents = [];
console.log(upperCaseStudents);


//we can create a new array,push every element to that array after certain modifications
for(let i=0; i<students.length; ++i){
    const upperCaseStudent =students[i].toUpperCase();
    upperCaseStudents.push(upperCaseStudent);
}
console.log(upperCaseStudents);

//I can start with an array 
// end up with any data type that i want created  based on that array

const letters = ["n","o","l","o","g","y"];
let stringFromLetters ="";

for(let i=0; i < letters.length ; i++){
stringFromLetters += letters[i];
}
console.log(stringFromLetters);

//count how many letters "o" are in the array
let numOf = 0;

for(let i=0; i<letters.length; i++){
    if(letters[i].toLowerCase() === "o")
    {
        numOf +=1;
    }
}
console.log(numOf);