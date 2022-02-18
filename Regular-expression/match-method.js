/*          Extract Matches

So far, you have only been checking if  a pattern exists or not within a string. You can also 
ectract the actual matches you found with the .match() mathod.

Io use the .match() method, apply the method on a string and pass in the regex inside the parentheses.

Here's an example:*/

"Hello World".match(/Hello/);

let ourStr = "Regular Expressions";
let ourRegex = /(Expressions)/;
console.log(ourStr.match(ourRegex)); // ["Expressions"]

/*  Note that the .match syntax is the "oposite" of the .test method you have been using 
thus far:

"string".match(/regex/);
/regex/.test("string");

Apply the .match() method to extract the string coding.

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /change/; // Change this line
let result = extractStr; // Change this line
*/

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result1 = extractStr.match(codingRegex);
console.log(result1); // ["coding"]
/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

            Find More Than the First Match

So far, you have only been able to extract or search a pattern once.*/

let testStr2 = "Repeat, Repeat, Repeat";
let repeatRegex = /Repeat/ig;
console.log(testStr2.match(repeatRegex));// ["Repeat", "Repeat", "Repeat"]

/* Using the regex starRegex, find and extract both Twinkle word from the string 
twinkleStar.

Note: You can have multiple flags on your regex like /search/gi 

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /change/; // Change this line
let result = twinkleStar; // Change this line*/

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result2 = twinkleStar.match(starRegex);
console.log(result2); // ['Twinkle', 'twinkle']
/***************************************************************
 
Match Anything with Willdcard Period

Sometimes you won't (or don't need to) know the exact characters in your patters. Thinking of all 
words that match, say, a misspelling would take a long time. Luckily, you cansave time using the 
wildcard character: .

The wildcard character . will match any one character. The wildcard is also called dot and period. 
You can use the wildcard character just like any othre character in the regex. For example, if you
wanted to mach hug, huh, and hum, you can use the regex /hu./ to match all four words.*/

let humStr = "I'll hum a song",
    hugStr = "Bear hug",
    huRegex = /hu./;
console.log(huRegex.test(humStr), huRegex.test(hugStr)); // true, true

/* Complete the regex unRegex so that it matches the strings run, sun, fun, nun, and bun. 
Your regex should use the wildcard character.

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /change/; // Change this line
let result = 
*/

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let unResult = unRegex.test(exampleStr);
 console.log(unResult);
console.log(unResult);