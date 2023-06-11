//scope: where can i access my variable from

//global
//block


const MY_NAME = "Amruta";

console.log(MY_NAME);
if(MY_NAME.length > 10)
{

    console.log(`${MY_NAME} is longer than 10 letters`);
}else{

    console.log(`${MY_NAME} is less or equal than 10 letters`);
}


function printMyName() {

    console.log(MY_NAME);
}
printMyName();


if(true)
{let thing = "variable froem block scope";
console.log(thing);
}
//console.log(thing);


function printThing(){
    console.log(thing);
}
//printThing();

const firstName ="amruta";

function getFullName(firstName, LlastName)
{
    return firstName + " " +LlastName;
}
console.log(getFullName("john","smith"));
console.log(firstName);





const myGlobalVar = "Global String";

const scope1 = (scope1Param) => {

    console.log(scope1Param ,)
    const scope2 = (scope2Param) =>{
        const scope2Var = "I was created in scope 2";

        const scope3 = (scope3Param) =>{
            const scope3Var = "I was created in scope 3"
        }
    }
}


//WHAT ARE PURE FUNCTIONS?
//WHY AVOID VAR?
