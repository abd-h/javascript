/* Use the Test Method

Regular expressions are used in programming languages to match parts of strings. You create 
pattern to help you do that matching.

If you want to find "The" word the in the string "The dog chased the cat", you could use the following regular expression: /The/ . Notice that quote marks are not required within the regular expression. 

JavaScript has multiple ways to use regex. One way to test a regex is using the .test() method.
The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not.*/

let testStr = "freeCodeCamp";
let testRegex = /Code/;
console.log(testRegex.test(testStr)); // true

/*
 Apply the regex myRegex on the string myStri using the .test() method.;


let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex; // Change this line*/

let myStr = "Hello, World";
let myRegex = /Hello/;
let result = myRegex.test(myStr);
console.log(result); // true
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Match Literal Strings

In the last challenge, you searched for the word Hello using the regular expression 
/Hello/. That regex searched for a literal match of the string Hello. Here's another 
example searching for a .iteral match of the string Kevin: */

let testStr1 = "Hello, my name is Kevin.";
let testRegex1 = /Kevin/;
console.log(testRegex1.test(testStr1)); // returns true

// Any other forms of Kevin will not match. For example, the regex /Kevin/ will not match kevin or 
// KEVIN.

let wrongRegex = /kevin/;
console.log(wrongRegex.test(testStr1));  // returns false
/**::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 
Match a Literal String with Different Possibilities

Using regexes like /coding/, you can look for the pattern coding in another string.

This is powerful to search single strings, but it's limited to only one pattern. You can search 
for multiple patterns using the alternation or  Or operator: |.

This operator matches patterns either before or after it. For example, if you wanted to match the strings yes or no, the regex you want is /yes|no/.

You can also search for more than just two patterns. You can do this by adding more patters with 
more Or operators seperating them,like /yes|no|maybe/.

Complete the regex petRegex to match the pets dog, cat, bird, or fish.
 */

let petStr = "James has pet cat";
let petRegex = /dog|cat|bird|fish/;
console.log(petRegex.test(petStr));// returns true
/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 
        Ignore Case While Matching

You can match both cases using what is called flag. There are other flags but here you'll 
focus on the flag that ignores case - the i flag. You canusr it by appending it to regex. An example of using this flag is /ignorecase/i. This regex can match the strings ignorecase, 
IgnoreCase or iGnorecaSE.

Write a regex fccRegex to match freeCodeCamp, no matter its case. Your regex should not 
match any abbreviations or variations with spaces. */

let fccStr = "freeCodeCamp";
let fccRegex = /FREECODECAMP/i;
console.log(fccRegex.test(fccStr)); // true