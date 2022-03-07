/*
Match Letters of the Alphabet

You saw how you can use character sets to specify a group of characters to match, but that's a lot 
of typing when you need to match a large range of characters (for example, every letter in the alphabet). Fortunately, there is a built-in featuring that makes this short and simple.

Inside acharacter set, you can define a range of characters to match using a hyphen character: -.

For example, to match lowercase letters a through e you would use [a-e].
*/

let catStr = "cat",
     batStr = "bat",
     matStr = "mat", 
     bgRegex1 = /[a-e]at/;

console.log(catStr.match(bgRegex1));   // ['cat']  
console.log(batStr.match(bgRegex1));   // ["bat"]  
console.log(matStr.match(bgRegex1));  // null

// Match all the letters in the string quoteSample.

// Note: Be sure to match both uppercase and lowercase letters.

let quoteSample1 = "The quick brown fox jumps over the lazy dog",
    alphabetRegex = /[A-Za-z]/g,
    result3 = quoteSample1.match(alphabetRegex);
console.log(result3.length); // returns 35    

/* March Numbers and Letters of the Alphabet
Using the hyphen (-) to match a range of characters is not limited to letters. It also works to  match a range of numbers.

For example, /[0-5]/  matches any number between 0 and 5, including the 0 and 5.

Also, it is possible to combine a range of letters and numbers in single character set.*/

let jennyStr = "Jenny 8675309",
    jennyRegex = /[a-z0-9]/ig;
console.log(jennyStr.match(jennyRegex)); // returns ['J', 'e', 'n', 'n', 'y', '8', '6', '7', '5', '3', '0', '9'];

/* Create a single regex that matches a range of letters between h and s, a range of numbers
between 2 and 6. Remember to include the appropriate flags in the regex. 

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /change/; // Change this line
let result = myRegex; // Change this line*/

let newQuoteSample = "Blueberry 3.14592653s are delicious.",
    newRegex = /[h-s2-6]/ig,
    newResult = newQuoteSample.match(newRegex);
console.log(newResult);    
/*********************************************************************** 
 
            Match Single Characters Not Specified

So far, you have created a set  of characters that you want to match, but you could also create a 
set of characters that you do not want to match. These types of character set are called negated characters sets.

To create a negated character set you place a caret character (^) after the opening bracket and before the characters you do not want to match.

For example, /[^aeiou]/gi matches all characters that are not a vowel. Note that characters like
., !, [, @, / and white space are matched - the negateed vowel character set only excludes the 
vowel characters.

Create a single regex that matches all characters that are not a number or a vowel. Remember 
to include the appropriate flags in the regex.

let quoteSample = "3 blind mice.";
let myRegex = /change/; // Change this line
let result = myRegex; // Change this line
*/

let quoteS = "3 blind mice.",
    myREgex = /[^0-9aeiou]/ig,
    myResult = quoteS.match(myREgex);
console.log(myResult)    