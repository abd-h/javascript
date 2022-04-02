/*  Classes
    Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and sematics that are not shared with ES5 class-like sematics
    
    Defining classes 
    Classes are in fact "special functions", and just as you can define function expressions and function declarations, the class syntax has two components: class expression and class declaration.
    
    Class declarations 
    One way to define a class is using a class declaration. To declare a class, you use the class keyword with the name of the class ("Rectangle" here).    */
    
    class Rectangle {
        constructor(height, width) {
            this.height = height;
            this.width = width;
        }
    }
/*  Hoisting
    An important difference between function declaration and class declarations is that while function can be called in code that appears before they are defined, classes must be defined 
    before they can be constructed. Code like the following will throw a ReferenceError:
    
    const p = new Rectangle(); // ReferenceError

    class Rectangle {};
    This occurs because while the class is hoisted its values are initialized.

    Class expression
    A class expressoin is another way do define a class. Class expression can be named or unnamed. 
    The name given to a named class expression is local to the class's body. However, it can be accessed via the name property.  */

    // unnamed 
    let Square = class {
        constructor(height, width) {
            this.height = height;
            this.width = width;
        }
    };
    console.log(Square.name)// returns name;
    
    // named
    let Circle = class Circle2 {
        constructor(height, width) {
            this.height = height;
            this.width = width;
        }
    }
    console.log(Circle.name) // Circle2

/*  Note: Class expressions must be declared before they can be used (they are subject to the same 
    hoisting restructions as described in the class declarations above). 
    
    Class body and method definitions
    the body of a class is the part that is in curly brackets {}. This is whare you define class 
    members, such as methods or constructor.

    Strict mode 
    The body of a class is executed in strinct mode, i.e., code written here is subject to stricter 
    syntax for increased performance, some otherwise silent erres will be thrown, and certain 
    keywords are reserved for future vresions of ECMAScript.

    Constructor
    The constructor method is a special method for creating and initalizing an object created with a class. There can only be one special method with the name "constructor" in a class. A SyntaxError will be throwh if the class contains more than one occurrence of a constructor method.

    A consturctor can use the super keyword to call the constructor of the super class. */    

    // Prototype methods
    
    class Rectangle2  {
        constructor(height, width) {
            this.height = height;
            this.width = width;
        } 
        // getter
        get area() {
            return this.calcArea;
        }
        // method 
        calcArea() {
            return this.height * this.width;
        }
    }

    const square = new Rectangle2(10, 10);
    console.log(square.area())    
