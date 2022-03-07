/* Match All Letters and Numbers

Using character classes, you were able to search for all of the alphaber with [a-z].
This kind of character classes is common enough that there is a shortcut for it, although
it includes a few extra characters as well. 

The closest character class in JavaScript to mathc the alphabet is \w. this shorcut is equal to 
/[A-Za-z0-9_]+/. This character class matches upper and lowercase letters plus numbers. Note,
this character class also includes the underscore character (_).
*/

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "43";
let varNames = "important_var";
console.log(longHand.test(numbers));
console.log(shortHand.test(numbers));
console.log(longHand.test(varNames));
console.log(shortHand.test(varNames));
// all four of these test calls would return true.

/* These shortcut characterclasses are also known as shortHand character classes.

Use the shorthand character class \w to cound the number of aphanumeric characters in 
various quotes and strigs. */

let wizardsStr = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;
console.log(wizardsStr.match(alphabetRegexV2).length); // returns 31
/**::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 * 
Match Everything But letters and Numbers

You can search the opposite of  the \w with \W. Note, the oppisite pattern users a 
capital lettre. This shortcut is the same as [^A-Za-z0-9]. */

let shortHand2 = /\W/;
let numbs = "42%";
let sentence = "Coding!";
console.log(numbs.match(shortHand2));
console.log(sentence.match(shortHand2));
/* The first match call wourd return the value ["%"] and the second value woud return ["!"] 

Use the shorthand character class \W to count the numbers of non-alphanumeric characters in 
varouse quotes and strings.*/

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
console.log(quoteSample.match(nonAlphabetRegex).length); // returns 6;
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Match All Numbers

The shortcut to look for digit characters is \d, with a lowercase d. This is equal to the 
character class [0-9], which looks for a single character of any number between zero and nine.

Use the shorthand character class \d to count how many digits are in movie titles. Writen out numbers ("six" instead of 6) do not count.
*/

let movieName = "2001: A Space Oddyssey";
let numRegex = /\d/g;
console.log(movieName.match(numRegex).length); // returns 6
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Match All Non-Numbers

The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9],
which looks for a single character that is not a number between zero and nine.

Use the shorthand character class for non-digits \D to count how many non-digits are in a movie
titles.
*/

let filmNames = "2001: A Space Oddyssey";
let filmRegex = /\D/g;
console.log(filmNames.match(filmRegex));


