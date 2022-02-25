/* Confirm the ending

Check if a string (first argument, str) end with the given terget string(second argument, target).

This challenge can solved with the .endsWith() method, which was introduced in ES2015. 
But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead. */

function confirmEnding(str, target) {
    
    return str.substr(-target.length) === target;
    
}

console.log(confirmEnding("Bastian", "n")); //  returns true.

console.log(confirmEnding("Congratulation", "on")); //  returns true.

console.log(confirmEnding("Connor", "n")); //  returns false.

console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")); //  returns false.

console.log(confirmEnding("He has to give me a new name", "name")); //  returns true.

console.log(confirmEnding("Open sesame", "same")); //  returns true.

console.log(confirmEnding("Open sesame", "sage")); //  returns false.

console.log(confirmEnding("Open sesame", "game")); //  returns false.

console.log(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")); //  returns false.

console.log(confirmEnding("Abstraction", "action")); //  returns true.

//Your code should not use the built-in method .endsWith() to solve the challenge.