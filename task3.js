// Write a program that allows a user to enter an integer and tells them if it is a Harshad number

const findHarshardNum = (n) => {
  let sum = 0;
  //   check if the integer is a negative number
  if (n <= 0) return "You must enter a positive integer";

  //   check if the integer is a float or a string
  if (n % 1 !== 0 || typeof n === "string") return "You must enter an integer";

  //   find the sum of all nums within n
  sum = n
    .toString()
    .split("")
    .reduce((sum, digit) => sum + parseInt(digit), 0);

  // check if it is a harshad number
  if (n % sum === 0) {
    return "True: You have a HARSHAD NUMBER!";
  } else {
    return "False: It is NOT a harshard number!";
  }
};

// console.log(findHarshardNum(12));
