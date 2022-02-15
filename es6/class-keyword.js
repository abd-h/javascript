/*          Use class Sytax to Define a Constructor function

ES6 provides a new sytax to create objects, using the class keyword.

It  should be noted that the class syntax is just syntax, and not a fully-fledged class-based
implementation of an object-oriented program, unlike in languages such as Java, Python, Ruby, etc.

In ES5, we usually define a constructor function and use the new keyword to insrantiate an object.*/

var SpaceShuttle = function(targetPlanet) {
    this.targetPlanet = targetPlanet;
}

// The class syntax simply replaces the constructor function creation:

class SpaceShettle1 {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}

var zues = new SpaceShuttle("Jupitor");
console.log(zues.targetPlanet);
/* It should be noted that the class keyword declares a new function, to which a constructor
is added. this constructor is invoked when new is called to create a new object.

Note: UpperCamelCase should be used by convention for ES6 class names, as in 
SpaceShettle used above. 

The constructor method is special method for creating and initializing an object created with a 
class. 

Use the class keyword and write a constructor to create the Vegetable class.

The Vegetable class allows you to create  a vegetable object with a property name that gets passed
to the constructor.

// Only change code below this line

// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'*/

    class Vegetable {
        constructor(veggies) {
            this.veggies = veggies;
        }
    }

    const carrot = new Vegetable("Carrots");
    console.log(carrot.veggies);
    /*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
     
            Classes
    Classes are a template for creating objects. They encapsulate data with code to work on that 
    data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.

    Defining Classes
    Classes are in fact "special functions", and just as you can define function expression and 
    function declarations, the class sytax has two components: class expression and class declarations.

    Class declarations 
    One way to define a class is using a class declaration. To declare a class, you use the class
    keyword with the name of the class ("Rectangle" here). */

    class Rectangle {
        constructor(height, width) {
            this.height = height;
            this.width = width;
        }
    }

    /*          Hoisting
An important difference between function declarations and class declarations is that while 
functions can be called in code that appeats before thet are defined, classes must be defined 
before they can be constructed. Code like the following will throw a Refference error:

const p = new Rectangle();

class Rectangle {}

This occurs because while the class is hoisted its values are not initialized.
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Class expressions
A class expression is another way to define a class. Class expression can be named or unnamed.
The name given to a named class expression is local to the class's body. Hovever, it can be accessed via the name property.
*/

// Unnamed class expression
let UnnamedRectangle = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};
console.log(UnnamedRectangle.name); // Output  "UnnamedRectangle"

// named class expression
let NamedRectangle = class Rectangle2 {
    constructor (height, width) {
        this.height = height;
        this.width = width;
    }
};
console.log(NamedRectangle.name) // Rectangle2;

/* Note: Class expressions must be declared before they can be used (they are subject to the same hoisting restrictions as decribed in the class declarations section).

Class body and method definitions
The body of a class is the part that is in curly brackets {}. This is where you define classe members, such as methods or constructors.

Strict mode
The body of a class is executed in the strict mode, i.e., code written here is subject to stricter syntax for increased performance, some otherwise silent errors will be thrown, and certain keywords 
are reserved for future versions of ECMAScript.
*/

