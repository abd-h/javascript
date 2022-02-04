/*
Split a String into an Array Using the split Method

The split method splits a string into an array of strings. It takes an argument for the delimiter, 
which canbe a character to use to break up the string or a regular expression. For example, if  
the delimiter is a space, you ge an array of words, and if the delimiter is an empty string, you gey an array of each character in the string. 

Here are two examples that split ane string by spaces, then another by digits using a regular expression: */

const str = "Hello World";
const bySpace = str.split(" ");
console.log(bySpace); // returns ["Hello", "World"]

const otherString = "How9are7you2today";
const byDigits = otherString.split(/\d/);
console.log(byDigits); /* returns ["How", "are", "you", "today"] 

Since stirngs are immutable, the split method makes it easier to work with them.

Use the split method inside the splitify function to split str into an array of words. The funciton
should return the array. Note that the words are now always separated by spaces, and the array sould not contain punctuation.

function splitify(str) {
  // Only change code below this line


  // Only change code above this line
}

splitify("Hello World,I-am code");*/

function splitify(str) {
    return str.split(/\W+/);
}

//Your code should use the split method.

console.log(splitify("Hello World,I-am code")); // should return ["Hello", "World", "I", "am", "code"].

console.log(splitify("Earth-is-our home")); // should return ["Earth", "is", "our", "home"].

console.log(splitify("This.is.a-sentence")); // should return ["This", "is", "a", "sentence"].