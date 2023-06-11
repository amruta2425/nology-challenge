//Challenge1
//Write a function that takes in a number of earth days, 
//and returns the number of orbits the moon can perform given days.
//moonOrbits(54) => 2
//moonOrbits(365) => 13.359


const moonOrbits = function (earthDays) {
    const moonOrbitPeriod = 27;
    const totalOrbits = earthDays / moonOrbitPeriod;
    return earthDays % moonOrbitPeriod === 0 ? totalOrbits : totalOrbits.toFixed(3);
};

//Challenge 2
//Write a function that takes the radius of a circle and return its area.
// Write a function that takes the radius of a circle and return its perimeter.

//circleArea(10) => 314.16
//circlePerimeter(10) => 62.83
  
let radius = 10;
const pi = 3.14;

const areaOfCircle = (radius) => {
   return pi * radius * radius;
};
console.log("The area of the circle is: " + areaOfCircle(radius))

const perimeterOfCircle = (radius) => {
    return 2 * pi * radius;
 };
 console.log("The perimeter of the circle is: " + perimeterOfCircle(radius))



//const circleArea = (r) => {
    //return (Math.PI * (r ** 2)).toFixed(2)
//}

//const circlePerimeter = (r) => {
   // return (2 * Math.PI * r).toFixed(2)
//}



//challenge 3
//Create a function that takes your age in years and returns your age in days. 
//Create a function that takes your age in years and returns your age in seconds.

//ageInDays(32) => 11680
// ageInSeconds(32) => 1009152000


const ageInDays = (age) => age * 365;
const ageInSeconds = (age) => age * 365 * 24 * 60 * 60;

console.log(ageInDays(20));
console.log(ageInSeconds(20));


//challenge 4:Return the remainder from 2 numbers

console.log("Challenge 4: ");
const remainder = (num1, num2) => num1 % num2;

console.log("remainder(1, 3) = " + remainder(1, 3));
console.log("remainder(3, 4) = " + remainder(3, 4));
console.log("remainder(-9, 45) = " + remainder(-9, 45));
console.log("remainder(5, 5) = " + remainder(5, 5));




//Challenge 5:Basketball points


function basketballPoints(numOf2Pointers, numOf3Pointers) 
{
    const totalPoints = (numOf2Pointers * 2) + (numOf3Pointers * 3);
    return totalPoints;
}

console.log(basketballPoints(3 , 2));
console.log(basketballPoints(5 , 6));
console.log(basketballPoints(2 , 1));

 //Challenge 6:

  const lessThan100 = (num1, num2) => {
    const sumOfNums = num1 + num2;
    if (sumOfNums < 100) {
        return true;
    } else {
        return false;
    }
};
const anotherLessThan100 = (num1 ,num2) => num1 + num2 < 100;

console.log(lessThan100(22, 15)); // true
console.log(lessThan100(83, 34)); // false (117)
console.log(lessThan100(3, 77)); // true
  
  