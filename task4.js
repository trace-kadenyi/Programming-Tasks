// Alice owns 4 rings: one agate ring, two identical diamond rings and one citrine ring.
// Every time Alice leaves the house she wears a different combination of her rings, with the following
// constraints:
// - She never wears rings on her thumbs.
// - She always wears at least one ring.
// - She always wears at least one ring on her right ring finger.
// - She wears a maximum of two rings on one finger.
// - Since the diamond rings look identical, they are interchangeable.
// - She can wear the rings on one or both hands.
// 2
// Write a program that tells Alice 365 possible combinations (and the number of total combinations) so
// that she can wear a different combination every day of the year.

const findRingCombinations = (arr) => {
  // initialize an array to store all possible combinations
  let combination = [];

  // find the factor of the array length
  let factor = Math.pow(2, arr.length);

  // loop through the factor
  for (let i = 0; i < factor; i++) {
    // initialize an array to store the combination
    let container = [];
    // loop through the array
    for (let j = 0; j < arr.length; j++) {
      if (i & Math.pow(2, j)) {
        container.push(arr[j]);
      }
    }
    // push the combination to the combination array
    if (container.length > 0) {
      combination.push(container);
    }
  }

  // sort the combination array by length
  combination.sort((a, b) => a.length - b.length);

  // print the combination
  console.log(combination.join("\n"));
  return `\nALICE HAS A TOTAL OF ${combination.length} RING COMBINATIONS.`;
};

// console.log(findRingCombinations(["agate", "diamond", "diamond", "citrine"]));
