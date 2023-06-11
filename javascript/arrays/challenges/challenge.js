//Create an array with 3 of your hobbies Print in the console the first hobby in the array 
//Remove that first hobby from the array and store that hobby in a variable
// Store the length of the array in a variable Add another hobby at the end of the array 
//Print that last hobby in the console Bonus:

//Join all your hobbies in a single string each hobby being comma separated 
//(i.e. "My hobbies are: hobby1, hobby2, hobby2")

const hobbies = ["singing","dancing","cooking"];
console.log(hobbies);
console.log("first hobby:" ,hobbies[0]);


const firstHobby = hobbies.shift();
console.log(firstHobby, "first hobby removed from shift");
console.log(hobbies);


const lengthOfArray =hobbies.length;
console.log(lengthOfArray);


hobbies[hobbies.length] = "reading";
console.log(hobbies);
console.log(hobbies.length);

console.log(hobbies[hobbies.length - 1]);


console.log(`Some of my hobbies are: ${hobbies.join(", ")}`);



