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

/* Note: Class expressions must be declared before they can be used (they are subject to the same 
hoisting restrictions as decribed in the class declarations section).

Class body and method definitions
The body of a class is the part that is in curly brackets {}. This is where you define classe 
members, such as methods or constructors.

Strict mode
The body of a class is executed in the strict mode, i.e., code written here is subject to stricter 
syntax for increased performance, some otherwise silent errors will be thrown, and certain keywords 
are reserved for future versions of ECMAScript.
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Constructor

The constructor method is a special method for creating and initializing an object created
with a class. There can only be one special method with tha name "constructor" in a class.
A SyntaxError will be thrown if the class contains more than one occurrence of a constructor method.

A constructor can use the super keyword to call the constructor of the super class.

Static initialization blocks
Class static initialization blocks  allow flexible initialization of class static properties
including the evaluation of statement during initialization, and granting access to private scope.

Multiple static blocks can be declared, and these can be interleaved with the declaration of static properties and methods ( all staticitems are eveluated in declaration order).*/

// Prototype methods

class Regtangle3 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    // getter
    get area() {
        return this.calcArea()
    }
    calcArea() {
        return this.height * this.width;
    }
}

const square = new Regtangle3(10, 10);
console.log(square.area); /* 100
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: 

Generator methods*/

class Polygon {
    constructor(...sides) {
        this.sides = sides;
    }
    *getSides() {
        for(const side of this.sides) {
            yield side;
        }
    }
}

const pentagon = new Polygon(1,2,3,4,5);
console.log([...pentagon.getSides()]); /* [1, 2, 3, 4, 5] 
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Static method and properties

The static keyword defines a static method or property for a class. Static members 
(properties and methods) are called without instantiating their class and cannot be called 
theough a class instance. Static methods are often used to create utility functions for  an 
application, whereas static properties are useful for caches, fixed-configuration, or any other
data you don't need to be replicated across instances.*/

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static displayName = "Point";
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
console.log(p1.displayName); // undefined
console.log(p1.distance); // undefined
console.log(p2.displayName); // undefined
console.log(p2.distance) // undefined

console.log(Point.displayName) // Point
console.log(Point.distance(p1, p2)); /** 7.0710678118654755
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Binding this with prototype and static methods

When a static or prototype method is called without a value for this, such as by assigning the method to avariable and then calling it,  the this value will be undefined inside the method.
This behavior will be the same even if the "use strict" directive isn't present, because code wihin
the class body's syntacticboundary is always executed in strict mode. */

class Animal {
    speak() {
        return this;
    }
    static eat() {
        return this;
    }
}

let obj1 = new Animal();
console.log(obj1.speak()); // Animal object
let speak = obj1.speak;
console.log(speak()); // undefined

console.log(Animal.eat()); // class Animal
let eat = Animal.eat;
console.log(eat()); // undefined

/* If we rewrite the above code using traditional function-based sytax in non-strict mode,
then this method calls are automatically bound to the initial this value, which by default 
is the global object. In strict mode, autobinding, will not happen; the value of this remains 
as passed. */

function Animal2() {};

Animal.prototype.speak = function() {
    return this;
}

Animal2.eat = function() {
    return this;
}

let myObj = new Animal();
let speaks = myObj.speak;
console.log(speaks()); // global object (in non-stritc mode)

let eats = Animal2.eat;
console.log(eats()); /** global object (in non-strict mode)
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

        Instance properties
        Instance properties must be defined inside of class methods:
        
        class Rectangle3 {
            constructor(height, width) {
                this.height = height;
                this.width = width;
            }
        }
        Field declarations
        Public field declarations
        
        With the JavaScript field declaration syntax, the above example can be written as:*/

        class Rectangle3 {
            height = 0;
            width;
            constructor(height, width) {
                this.height = height;
                this.width = width;
            }
        }
    /** By declaring fields up-front, class definitions become more self-documenting, and the 
     * fields are always present.
     * 
     * As seen above, the fields can be declared with or without a default value.
     * ************************************************************************
     
    Sub classing with extends
    The extends keyword is used in class declaration or class expressions to create a class as 
    a child of another class. */
    
    class Animals {
        constructor(name) {
            this.name = name;
        }

        speak() {
            return `${this.name} makes noise.`;
        }
    }

    class Dog extends Animals {
        constructor(name) {
            super(name); // call super class constructor and pass in the name parameter
        }

        speak() {
            return `${this.name} barks.`;
        }
    }
     
    let d = new Dog("Terrier");
    console.log(d.speak()); // Terrier barks

// One may also exend traditional function-based "classes":

function Animal3 (name) {
    this.name = name;
}

Animal3.prototype.speak = function() {
    return `${this.name} makes noise.`
}

class Dog2 extends Animal3 {
    speak(){
        return `${this.name} barks all the time.`
    }
}
// Object.setPrototypeOf(Dog2.prototype, Animal3);
let yorkshire = new Dog2("Yorkshire Terrier");
console.log(yorkshire.speak());

// If there is a cosntructor present in the subclass, it needs to first call super() before using 
// "this"

// One may also extend traditional function-based "classes":

function Animal4(name) {
    this.name = name;
}

Animal4.prototype.speak = function() {
    return `${this.name} makes a noise`;
}

class Dog4 extends Animal4 {
    speak() {
        return  `${this.name} barks a little`;
    }
}

let d1 = new Dog4("Mitzie");
console.log(d1.speak()); /* Mitzie barks a little

For similar methods, the child's method takes precedence over parent's method

Note: that classes cannot extend regular (non-constructible) objects. If you want to inherit from
a regular object, you can instead use Object.setPrototypeOf(); */

const Animals2 = {
    speak() {
        return  `${this.name} makes strange barking noise`
    }
}

class Dog3 {
    constructor(name) {
        this.name = name;
    }
}

// If you do not do this you will get a TypeError when you invoke speak

Object.setPrototypeOf(Dog3.prototype, Animals2);

let dog = new Dog3("Mitze");
console.log(dog.speak())// Mitze makes strange barking noise

/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Species

You might want to return Array objects in your derived array class MyArray. The species 
pattern lets you override default  constructors.

For example, when using methods such as map() that returns the default constructor, you 
want these methods to return a parent Array object instead of the MyArray object. Yhe Symbol.species
symbol lets you do this:
*/

class MyArray extends Array {
    // Overwrite species to the parent Array constructor
    static get [Symbol.species]() { return Array;}
}

let a = new MyArray(1, 2, 3);
let mapped = a.map(x => x * x);
console.log(mapped); // [1, 4, 9]
console.log(mapped instanceof Array); true;
console.log(mapped instanceof MyArray);

/* Super class calls with super

The super keyword is used to call corrosponding methods of supper class. 
This is one advantage over prototype-based inheritance.*/

class Cat {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes meow noise`);
    }
}

class Lion extends Cat {
   speak() {
       super.speak();
     return `${this.name} roars.`;
   }
}

let lion = new Lion("Fuzzy");
console.log(lion.speak()); 
// output Fuzzy makes meow noise
// output Fuzzy roars.
/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Mix-ins

Abstract subclasses or mix-ins are template for classes. An ECMAScript classes can only have a
single superclass, so multiple ingeritance from tooling classes, for example, is not possible. The 
functionality must be provided by the superclass. 

A function with a superclass as input and a subclass extanding that superclass as output can be 
used to implement mix-ins in ECMAScript: */

let calculatorMixin = Base => class extends Base {
    randomize() {}
};

let randomizerMixin = Base => class extends Base {
    rendomize() { }
}

// A class that uses these mix-ins can be written like this:

class foo { }
class Bar extends calculatorMixin1(randomize(foo)) {};

// Re-running a class definition
// A class can't be redefined. Attemting to do so produces a SyntaxError.










// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#class_expressions

//Species