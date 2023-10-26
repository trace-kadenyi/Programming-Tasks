// A math teacher gives his students the following problem:
// Solve the following three tasks and create three more in the same
// style:
// 364 * 2475 = x
// 308 * 2925 = x
// 165 * 5460 = x
// The students quickly realize that the factor is always 900900.
// The lazy teacher doesn’t want to calculate every single equation the students have come up with.
// Therefore, he prefers a list of all possible products of two factors that add up to 900900, in ascending
// order by the first factor, where the first factor should always be smaller than the second factor.
// 900900 = 1 * 900900
// = 2 * 450450
// = 3 * 300300
// …
// Write a program that outputs such a list so that the lazy teacher can quickly check the correct results.

const listTheFactors = () => {
  // initialize variables
  let num = 900900;
  let result = 0;
  let arr = [];

  // loop through the main num to find the combinations of divisible factors
  for (let i = 0; i < num; i++) {
    if (num % i === 0) {
      result = num / i;

      // check on the order and ensure the first factor is smaller than the second factor and push to the array container
      if (i < i + 1 && i < result) {
        arr.push(`${i} * ${result}`);
      }
    }
  }
  // return the array as a string
  return `900900 = ${arr.join("\n= ")}`;
};

// console.log(listTheFactors());
