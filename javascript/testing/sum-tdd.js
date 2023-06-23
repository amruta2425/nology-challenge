// A function that calculates the sum of numbers

// It should throw an error if one or more parameters are not a number

// if no parameters are passed -> throw an error

// I want it to sum any number of arguments <= 1



export const sum = (...numbers) => {
    if (numbers.length === 0) {
      throw new Error('At least one parameter is required');
    }
  
    const nonNumbers = numbers.filter((num) => typeof num !== 'number');
    if (nonNumbers.length > 0) {
      throw new Error('Parameters must be numbers');
    }
  
    return numbers.reduce((acc, num) => acc + num, 0);
  };



     
