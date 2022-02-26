/*      Truncate a String

Truncate a string (first argument) if it  is longer than the given maximum string length 
(sencond argument). Return the truncated string with ... */

function truncateString(str, num) {
    if(str.length > num) {
        return str.substring(0, num).concat("...")
    } else {
        return str.substring(0, num)
    }
}
console.log(truncateString("A-tisket a-tiscket A green and yellow basket", 8));

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); // return the string A-tisket....

console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11)); // return the string Peter Piper....

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)); // return the string A-tisket a-tasket A green and yellow basket.

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)); // return the string A-tisket a-tasket A green and yellow basket.

console.log(truncateString("A-", 1)); // return the string A....

console.log(truncateString("Absolutely Longer", 2)); // return the string Ab....