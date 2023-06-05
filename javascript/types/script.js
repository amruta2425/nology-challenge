
//check if my code works correct,execute some code snippets,check values of variables etc
console.log("its linked correct");

//console.error("something went wrong....(");

//output warnings
console.warn("Be careful");

//Data types
//fundamental building block of language
//doesnt have any properties
//boolean true /false
//number,string,BigInt
//string ''  "" ` `

//operations
console.log(10+2);
console.log(32-5);
console.log(2*6);
console.log(10/3);

console.log("hello"+"nology");
console.log("hello"-"0");//get an error(not a number);
console.log("1"+1);
console.log(parseInt("1"));//converts number

console.log(typeof "hi");
console.log(typeof 234);
console.log(typeof true);
//comparison operatirs-they result in booleans
console.log(10>5);
console.log(5<6);
console.log(10>=10);
console.log(9<=8);

//undefined
//a lack of value,accidental
//we declare a variable but did not assign a value
let i;
console.log(i);
console.log(typeof undefined);


//null
//a lack of value,on purpose
//be careful!
console.log(typeof null);

console.log(typeof 15); // Prediction: {number}
console.log(typeof 5.5); // Prediction: ...{number}
console.log(typeof NaN); // Prediction: {number}
//type conversion went wrong,couldnt convert to a number
console.log(typeof 'hello'); // Prediction:{String}
console.log(typeof true); // Prediction:{Boolean}
//!= not equal to
//!==
cpnsole.log(1 !== "1");

//==
//===
console.log(2 === "2");
console.log(typeof (1 != 2)); // Prediction:{Boolean}
console.log(typeof ('hamburger' + 's')); // hamburgers{string}
console.log(typeof ("hamburgers" - "s")); // :{number}
console.log(typeof ("1" + "3")); // 13:{string}
console.log(typeof ('1' - '3')); // :{number}
console.log(typeof ('johnny' + 5)); // johnny5:{string}
console.log(typeof ('johnny' - 5)); // get an error (not an NaN):{number}
console.log(typeof (99 * 'luftbaloons')); // Prediction:{number}