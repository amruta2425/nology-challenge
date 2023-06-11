//Create a function with a for loop that will add all the numbers up to n

//You should create a variable to set the upper limit of your loop 
//Your loop should increment by 1 on each iteration
// Your loop should print the final result


function sumUpToN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
console.log(sumUpToN(10)); // Output: 55 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55)



//Create a function with a for loop that will add numbers to your shopping list
//Store the following array in a variable Your loop should iterate through every 
//value in the array Your loop should print a shopping list with the number and
// the name of the item


function createShoppingList(items) {
    for (let i = 0; i < items.length; i++) {
      console.log(`${i + 1}. ${items[i]}`);
    }
  }
  
  // Example usage
  const shoppingItems = ['milk', 'watermelon', 'eggs', 'soap', 'butter', 'apples'];
  createShoppingList(shoppingItems);
  


  //Create a variable with a string of your choice Loop through the letters 
  //in this string and build a new string If the current index is odd, 
  //capitalize the letter before adding it to the new string 
  //Bonus If the current index is even increment the letter 
  //E.g: a becomes b, d becomes e, t becomes u Final: z becomes a




  function transformString(originalString) {
    let transformedString = '';
  
    for (let i = 0; i < originalString.length; i++) {
      let currentLetter = originalString[i];
  
      if (i % 2 === 0) { // Even index
        if (currentLetter === 'z') {
          transformedString += 'a';
        } else {
          transformedString += String.fromCharCode(currentLetter.charCodeAt(0) + 1);
        }
      } else { // Odd index
        transformedString += currentLetter.toUpperCase();
      }
    }
  
    return transformedString;
  }
  
  // Example usage
  const originalString = 'amrutamarathe';
  const transformed = transformString(originalString);
  console.log(transformed); // Output: pQfObJ
  

  //Create a variable with a string of your choice Loop through the letters in
  // this and build a new string The new strings should be the same as the input
  // with the vowels missing




  function removeVowels(originalString) {
    let newString = '';
  
    for (let i = 0; i < originalString.length; i++) {
      let currentLetter = originalString[i].toLowerCase();
  
      if (!isVowel(currentLetter)) {
        newString += originalString[i];
      }
    }
  
    return newString;
  }
  
  function isVowel(letter) {
    return ['a', 'e', 'i', 'o', 'u'].includes(letter);
  }
  
  // Example usage
  const newString = removeVowels(originalString);
  console.log(newString); // Output: Hll, Wrld!

  /* ## Loop through an array backwards
Console.log() every element from the array */

const myDogs = ["sydney" , "melbourne" , "adelaide" , "tsamania"];

for(let i = myDogs.length - 1 ; i >= 0 ; i--) {
    console.log(myDogs[i]);
}
  

  