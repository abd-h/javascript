/* Find the Longest Word in a String

Return the length of the longest word in the provided sentence.

Your response should be a number.*/

function findLongestWordLength(str) {
    return Math.max(
        ...str.split(" ")
        .slice()
        .reduce((longest, word) => {
            longest.push(word.length);
            return longest;
        }, [])
    );
}
// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); //  returns a number.

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); //  returns 6.

console.log(findLongestWordLength("May the force be with you")); //  returns 5.

console.log(findLongestWordLength("Google do a barrel roll")); //  returns 6.

console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow")); //  returns 8.

console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")); //  returns 19.