// Write a program that allows a user to enter an integer and tells them if it is a deficient, perfect or abundant number.

// Find divisors
const findDeficientAbundantPerfectInt = (n) => {
  // initialize array container
  let arr = [];

  //   check if the integer is a negative number
  if (n <= 0) return "You must enter a positive integer";

  //   check if the integer is a float or a string
  if (n % 1 !== 0 || typeof n === "string") return "You must enter an integer";

  //   Find divisors
  for (let i = 0; i < n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }

  //   Get the sum of divisors
  var sum = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  //   Check if the integer is deficient, perfect, or abundant
  if (sum < n && sum < n * 2) {
    return `The integer ${n} is DEFICIENT by ${
      n - sum
    } because the sum of its divisors is ${sum}`;
  } else if (sum > n || sum > n * 2) {
    return `The integer ${n} is ABUNDANT by ${
      sum - n
    } because the sum of its divisors is ${sum}`;
  } else if (sum === n) {
    return `The integer ${n} is PERFECT because the sum of its divisors is ${sum}`;
  } else {
    return "You must enter an integer";
  }
};

console.log(findDeficientAbundantPerfectInt(30));
