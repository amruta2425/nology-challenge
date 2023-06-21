// MVP

// Create a function called delayedIncDec(n, mode, delay) - this function needs to return a promise<number>,
// the value of the promise should be n after incrementing or decrementing depending on the mode

// if mode is anything other than inc or dec - reject the promise

// n - some number

// mode - string - "inc", "dec"

// inc will cause the function to increment n by 1

// dec will cause the function to decrement by 1

// timeout - delay in ms - your function will return a promise after that time

// timeout should have a default value, if the function is called without the 3rd argument, it should default to 2500

// call this function three times with different numbers and values of dec and delay
// console.log the value of rejected or resolved promise


//const delayedIncDec =

const delayedIncDec = (n, mode, delay = 2500) => {
    return new Promise((resolve, reject) => {
      if (mode === "inc") {
        setTimeout(() => resolve(n + 1), delay);
      } else if (mode === "dec") {
        setTimeout(() => resolve(n - 1), delay);
      } else {
        reject(new Error("Invalid mode. Only 'inc' and 'dec' are allowed."));
      }
    });
  };
 
  delayedIncDec(23, "inc", 2000)
    .then(value => {
      console.log("Promise Resolved:", value);
    })
    .catch(e => {
      console.log("Promise Rejected:", e.message);
    });
  
  delayedIncDec(45, "dec", 3000)
    .then(value => {
      console.log("Promise Resolved:", value);
    })
    .catch(e => {
      console.log("Promise Rejected:", e.message);
    });
  
  delayedIncDec(3, "invalid", 1500)
    .then(value => {
      console.log("Promise Resolved:", value);
    })
    .catch(e => {
      console.log("Promise Rejected:", e.message);
    });
  
     