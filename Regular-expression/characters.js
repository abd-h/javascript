/* Match Characters that Ocor one or More Times
Sometimes, you need to match acharacter (or group of characters) that appears one or more times
in a row. This means it occurs atleast once, and may be repeated.

You can use the + character to check if that is the case. Remember, the charactre or pattern has to 
be present consectively. That is the character has to repeated one or more after the other.

For example, /a+/g would find one match in abc and return ["a"]. Because of the +, it would also
a single match in aabc and return ["aa"]. 

If it were instead checking the string abab, it would find two matches and return ["a", "a"]  because the characters are not in a row - there is a b between them. Finally, since there is no a in the string bcd, it wouldn't find match.

You want to find matches when the letter s occurs one or more times in Mississippi. Write a
regex that uses the + sign.

let difficultSpelling = "Mississippi";
let myRegex = /change/; // Change this line
let result = difficultSpelling.match(myRegex);
*/

let difficultSpelling = "Mississippi spellligs",
    dsRegex = /s+/g,
    resultDS = difficultSpelling.match(dsRegex);
console.log(resultDS);    

/*
Match Charactera that Occur Zero or More Times

The last challenge used the plus + sign to look for characters that occur one or more times.
There's also an option that matches characters that occur zero or more times.

The character to do this is the asterisk or star: *.  
*/

let soccerWord = "gooooooooalg!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
console.log(soccerWord.match(goRegex));
console.log(gPhrase.match(goRegex));
console.log(oPhrase.match(goRegex));

/* In order, the three match calls would return the values ["gooooooooo"], ["g"], and null.

For this challenge, chewieQuote has been initialized as the string Aaaaaaaaaaaarrgh! behind 
the scenes. Create a regex chewieRegex that uses the * character to match an uppercase A character 
immediately followed by zero or more lowercase a characters in chewieQuote. Your regex does 
not need flags or character classes, and it should not match any of the other quotes.

// Only change code below this line
let chewieRegex = /change/; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);  */

let chewieRegex = /Aa*/;
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!"
let resultChewie = chewieQuote.match(chewieRegex);
console.log(resultChewie);
/**********************************************************************

Find Characters with Lazy Matching 
In regular expressions, a greedy match finds the longest possible part of a string that fits the 
regex pattern and returns it as amatch. The alternative is called a lazy match, wich finds the smallest possible part of the string that satisfies the regex pattern. 

You can apply the regex /t[a-z]*i/ to the string "titanic". The regex is basically a pattern that 
starts with t, ends with i,  and has some letters in between.

Regular expressions are by default greedy, so the match would return ["titani"]. It finds the largest sub-string possible fo fit the pattern.

However, you can use the ? chatacter to change it to lazy matching. "titanic" matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"];

Note: Parsing HTML with regular expressions should be avoided, but pattern matching an HTML string with regular expressions is completely fine. 

Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>".
Remember the wildcard . in a regular expression matches any character.   */

let text = "<h1>Winter is coming</h1>";
let textRegex = /<h.*?1>/g;
console.log(text.match(textRegex)); /*  output ['<h1>']
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Find One or More Criminals in a Hunt

Time to pause and test your new regex writing skills. A group of criminals escaped from jail and ran away, but you don't know how many. However, youj do know that they stay close together when they are around other people. You are resposible for finding all of the criminals ar once.

Here's an example to review how to do this:

The regex /z+/ matches the letter z when it appears one or more times in a row. It would find matches in all of the following strings:
"z"
"zzzzzzz"
"ABCzzzz"
"abczzzzzzzzzzzzzzzzzzzzzzabc"
But it does not find matches in the following strings since ther are no letter z characters:

""
"ABC"
"abcabc"

Write a greedy regex that finds one or more criminals within agroup of other people. A criminal is 
represented by the capital letter C. */

let reCriminals = /C+/;
console.log("C".match(reCriminals)); // C
console.log("CC".match(reCriminals)); // CC
console.log("P1P5P4CCCcP2P6P3".match(reCriminals)); // CCC
console.log("P6P2P7P4P5CCCCCP3P1".match(reCriminals)); // CCCC
console.log("P1P5P4CCCcP2P6P3".match(reCriminals)); // CCCCC
console.log("".match(reCriminals));// null
/**:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::;:::::::::::::
 
            Match Beginning String Patterns
Prior challenges showed that regular expressions can be used to look for a number of 
matches. They  are also used to search for patterns in specific position in strings. 

In an earlier challenge, you used the caret charecter (^) inside a character set to create a 
negagte character set in the form [^thingsThatWillNotBeMatched]. Outside of a character 
set, the caret is used to search for patterns at the beginning of strings.
 */

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
console.log(firstRegex.test(firstString));
let notFirstString = "You can't find Ricky now.";
console.log(firstRegex.test(notFirstString));
/* The first call would return true, while the second call would return false.

Use the caret character in a regex to find Cal only in the beginning of the string rickyAndCal.*/

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
console.log(calRegex.test(rickyAndCal)); // returns true
/**:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: 

Match Ending String Patterns

In the last challeng, you learned to use the caret character to search for patterns at the 
beginning of strings. There is also a way to search for patterns at the end of strings.

You can search the end of strings using the dollar sign character $ at the end of regex.
*/
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
console.log(storyRegex.test(theEnding));
/* The first test call would return true, while the second would return false.

Use the anchor character ($) to match the string caboose at the end of the string caboose. */

let caboose = "The last car of train is the caboose";
let lastRegex = /caboose$/;
console.log(lastRegex.test(caboose));