/**             Create Strings using template Literals
 * 
     A new feature of ES6 is the template literal. This is a special type of string that
     makes creating complex strings easier.
    
     Template literals allow you to create multi-line strings and to use string interpolation 
     featuresto create strings. 

     Consider the code below:  */

     const person = {
         name: "Zodiac Hasbro",
         age: 56
     };

     const greeting = `Hello, my name is ${person.name}! I am ${person.age} years old.`;
     console.log(greeting); // Hello my name is Zodiac Hasbro! I am 56 years old.

     /* A lot of things happened there. Firstly, the example uses backticks (`), not 
     quotes (' or ""), to wrap the string. Secondly, notice that the string is multi-line, 
     both in the code and the output. This saves inserting \n within stirngs. The ${variable} syntax used obove is a placeholder.
     
     Basically, you won't have to use concatination with the + operator anymore. To add variables to strings, you just drop the variable in a template string and wrap it with ${a + b}. 
     This new way of creating strings gives you more flexibility  to create robust strings.
     
     Use template literal sytax with backtick so create an array of list element (li) strings.
     Each list element's text should be one of the array elements from the failure property on the result object and have a class attribute with the value text-warning. The makeList function should return the array of list item strings.
     
     Use an iterator method (any kind of loop) to get the desired output (shown below).
      [
    '<li class="text-warning">no-var</li>',
    '<li class="text-warning">var-on-top</li>',
    '<li class="text-warning">linebreak</li>'
    ]


    const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);
*/


const result = {
    success: ["max-length", "no-amd", "prefer-arrow-function"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-sami", "no-dup-keys"]
};
 
function makeList(arr) {
    return arr.reduce((a, b) => {
        a.push(`<li class="text-warning>${b}</li>`);
        return a;
    }, [])
}
const failuresList = makeList(result.failure);
console.log(failuresList);/*
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Write Concise Object Literal Declaration Using Object Property shorthand

ES6 adds some nice support for easily defining object literals. 

Consider the following code: */

const getMousePosition = ((x, y) => ({
    x: x, 
    y: y
}));
console.log(getMousePosition(3, 5)); /*{x: 3, y: 5} 

getMousePosition is a simple function that returns an object containing two properties.
ES6 provides the syntactic suger to eliminate the redundancy od having to write x: x. 
You can  simply write x once, and it will be converted to x:x (or something equivalent) 
under the hood. Here is the same function from above rewritten with (different function
    name) to use this new syntax: */

    const getMousePosition2 = (x, y) => ({x, y})
    console.log(getMousePosition(4, 6)); // {x: 4, y: 6}

    /* Use object property shorthand with object literals to create and return an object with name, age and gender properties.
    
    const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
    name, age, gender
  };        
  // Only change code above this line
};
console.log(createPerson("Bond", 34, "Male"))*/

const createPerson = (name, age, gender) => ({
    name, age, gender
})
console.log(createPerson("Bond", 34, "Male")); /* {name: 'Bond', age: 34, gender: 'Male'}
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Write Concise Declarative Function with ES6

When defining function within objects in ES5, we have to use the keyword function as follows:*/
const newPerson = {
    name: "Taylor",
    sayHello: function() {
        return  `Hello! my name is ${this.name}`;
    }
};

/* With ES6, you can remove the function keyword and colon altogether when defining functions in objects. Here's an example of this sytax: */

const newerPerson = {
    name: "Thomas",
    sayHello() {
        return `Hello my name is ${this.name}`
    }
};

/* Refactor the function setGear inside the object bicycle to use the shorthand sytax described
above.

// Only change code below this line
const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);*/

const bicycle = {
    gear: 2,
    setGear(newGear) {
         this.gear = newGear;
    }
};
bicycle.setGear(3)
console.log(bicycle.gear)


