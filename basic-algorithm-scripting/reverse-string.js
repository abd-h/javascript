/* Reverse a String

Reverse the provided string.

You may need to turn the string into an array before you can reverse it. 
Your result must be string.*/

function reverseString(str) {
    return str.split("").reverse().join(" ");
}
console.log(reverseString("hello")); // returns a string.

console.log(reverseString("hello")); // returns the string olleh.

console.log(reverseString("Howdy")); // returns the string ydwoH.

console.log(reverseString("Greetings from Earth")); // returns the string htraE morf sgniteerG.