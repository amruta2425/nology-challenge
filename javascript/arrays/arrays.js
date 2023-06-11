//set of data,group of variables,js way of creating lists

const coach1 ="Amruta";
const coach2 ="Amy";
const coach3 ="john";
const coach4 ="bela";

const coaches = [coach1 ,coach2, coach3, coach4];
//console.log(coaches);

//how can i access individual values?
//we can use an inex
//a position of an element in the array
//indexes start at 0 !

console.log(coaches[0]);
console.log(coaches[1]);

//to calculate the number of elements in array
console.log(coaches.length);

//indexes start at 0 , so the last index is always 1 less than length

//to access last element in array
console.log(coaches[coaches.length - 1]);

//array constructor
const arr = new Array(1 ,2 ,3);
console.log(arr);

//I want an array with 30 values
const arr3 = new Array(30).fill(5)
console.log(arr3);
console.log(arr3.length);


const cities =["indore" , "sydney" ,"bhopal"];


//I can add items tp arrays using indexes
cities [3] = "Adelaide";
console.log(cities);

//I can update the values inside my array with indexes
cities [0] = "Perth";
console.log(cities);

//4 different array methods

//add things to the end of the array
// .push
cities.push("Darwin");
console.log(cities);

cities.push("Broome");
console.log(cities);



//add at the beginning of an array. always add at the 1st position
//unshift
cities.unshift("gold-coast");
console.log(cities);


// we can remove things from the end of an array
//I wanted to store the last item of an array in a variable
const lastCity =cities[cities.length -1];
console.log(lastCity);
console.log(cities);

//pop
const lastItem = cities.pop();
console.log(lastItem ,"last item returned by the .pop method");

console.log(cities);



//we can remove things from the beginning of an array
//shift

const firstCity = cities.shift();
console.log(firstCity ,"first city removed");
console.log(cities);

//what is the index of the given item in the array
 
const bhopalIndex =cities.indexOf("bhopal");
console.log(cities[5]);


//includes
console.log(cities.includes("Darwin"), "is Darwin one of the cities?");


//how to turn my array into a string
//I want a string that says  "some australian cities"

console.log(`Some Australian cities are: ${cities.join(",")}`);

