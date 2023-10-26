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

const findCombinations = () => {
    let totalCombinations = 0;
    let combinations = [];
    
    for (let i = 0; i < 4; i++) {
        for (let j = i + 1; j < 4; j++) {
        combinations.push([i, j]);
        totalCombinations++;
        }
    }
    
    for (let i = 0; i < 4; i++) {
        combinations.push([i]);
        totalCombinations++;
    }
    
    return `Alice has ${totalCombinations} possible combinations of rings: ${combinations}`;
}

console.log(findCombinations());