
// You have an array of names all in lowercase you want a new array with all names but uppercase

const names =['jack','rachel','bella','anna'];

function upperCaseName(name){
    return name.toUpperCase();
}
const Names = names.map(upperCaseName);
console.log(Names);




//const lowercaseNames = ["john", "jane", "adam", "emma"];

//const uppercaseNames = lowercaseNames.map(name => name.toUpperCase());
//console.log(uppercaseNames);



// You have an array of numbers, you want a new array with each number decremented by 5



const numbers = [10,11,12,13,14,14];
function decrement(num) {
    return num - 5;
}

const decrementedWIthMap = numbers.map(decrement);
console.log(decrementedWIthMap, "numbers decremented with map");

//const newNumbers = number.map((number) => num -5;
//console.log(newNumbers);