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
    console.log(carrot.veggies); // Carrots
 
/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: 

Use getters and setters to Control Access to an Object
You can obtain values from an object and set the value of a property within an object.

These are classically called getters and setters.

Getter functions are ment to simply return (get) the value of an object's privet variable 
to the user without the user directly accessing the private variable.

Setter functions are meant to modify (set) the value of an object's privet variable based on the 
value passed into the setter function. This change could invoke calculations, or even overwritting
the previous value completely.*/

class Book {
    constructor(author) {
        this._author = author;
    }

    // getter
    get writer() {
        return this._author;
    }

    // setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}
const novel = new Book("anonymous");
console.log(novel.writer); // anonymous
novel.writer = "newAuthor";
console.log(novel.writer); /* newAuthor

Notice the syntax used to invoked the and setter. They do not even look like functions.
Getters and setters are important because they hide internal implementation details.

Note: It is convention to ptocede the name of a private variable with an inderscore (_). 
However, the practice it self does not make a variable privet.

Use the class keyword to create a Thermostat class. The constructor accepts a Fahrenheit
temperture in Celsius.

In the class, create a getter to obtain the temperature in Celsius and a setter to the to set 
the temperature in Celsius.

Remember the C = 5 / 9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of 
temperature in Fahrenheit, and C is the value the same temperature in Celsius.

Note: When you implement this, you will track the temperature inside in one scale, 
either Fahrenheit or Celsius.

This is the power of a getter and a setter. You are creating an API for another user, who 
can get the correct result regardless of which one you tract.

In other words, you are abstracting implimentation details from the user.

// Only change code below this line

// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius*/

class Thermostat {
    constructor(farenheit) {
        this._farenheit = farenheit;
    }

    // getter 
    get temperature() {
        return  (5 / 9) * (this._farenheit -32);
    }
    set temperature(celsius) {
        return this._farenheit = (celsius * 9) / 5 + 32;
    }
}

const thermos = new Thermostat(76);
let temp = thermos.temperature;
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);


