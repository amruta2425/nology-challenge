// Swap keys with values

const translate = {
    apple: "jablko",
    pear: "gruszka",
    strawberry: "truskawka",
};

/* const newObj = {
    jablko: "apple",
    gruszka: "pear",
    truskawka: "strawberry"
} */
const swapKeysWithValues = (obj) => {
    const swapped = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        swapped[obj[key]] = key;
      }
    }
    return swapped;
  };
  
  const translated = swapKeysWithValues(translate);
  console.log(translated);



//  function flipKeysAndValues(obj) {
//     const entries = Object.entries(obj);
//     const flippedEntries = entries.map(entry => entry.reverse());
//     const output = Object.fromEntries(flippedEntries);
//     return output;
// }

// console.log(translate);
// console.log(flipKeysAndValues(translate));



// const swapKeys = (obj) => {
//     const keyArr = Object.keys(obj)
//     const valueArr = Object.values(obj)

//     return valueArr.reduce((result, value, index) => {
//         result[value] = keyArr[index]
//         return result
//     }, {})
// };
  