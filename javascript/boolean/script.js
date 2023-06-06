//comparison operators
console.log(2>1);
console.log(4<7);
console.log(5<=1);
console.log(3>=1);
console.log(2=="2");//this doesn't check the type of data
console.log(2===1);//script

console.log(1!="1");

console.log(1 !== "1");

//logical operators
//AND -&&
console.log(true && true);//both sides need to be true
console.log(1>0 && 2<5);
console.log(false && true);
console.log(false && false);


//OR ||

console.log(true || true);//only one needs to be true 
console.log(true || false);
console.log(2 > 1 || 4 > 9);

//multiple conditions
console.log((3>5 && 2 >1) || 6 >7);
console.log(6 <1 || (2< 1 && 1 == 2));
console.log((1 > 2 || 1 == 1) && true );

//  !-NOT
console.log(!true);
console.log(!false);
console.log(!!true);

// falsey values

// when we try to treat them as a boolean, they are false

let someVariable;
console.log(!someVariable);
//empty string

let someString ="" ;
console.log(!!someString);

// 0
let num = 0;
console.log(!num);

//null
let anotherVariable = null;
console.log(!anotherVariable);

//NaN
let third =parseInt("hello");
console.log(!third);

let loggedInUser;

//left hand side is falsy so we return right hand side
console.log(`welcome ,${loggedInUser || "Guest"}`);
loggedInUser="John";

//left hand side is truthy so we return it
console.log(`welcome ,${loggedInUser || "Guest"}`);

console.log(null || 0);

console.log("hello" && "hi" && "nology");



