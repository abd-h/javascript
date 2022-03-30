/* Understand the Constructor Property
    There is a special constructor property located on the object instance crow and lion
    that is created below. */
    let Bird2 = function(name, color) {
            this.name = name;
            this.color = color;
            this.numLegs = 4;
        }

        function BigCat(name, speed) {
            this.name = name; // own property
            this.speed = speed;
        }        

        // Prototype properties for shared properties
        BigCat.prototype.numLegs = 4;

    let crow = new Bird2("Alex", "blue");
    let lion = new BigCat("Preditor", 23);

    console.log(lion.constructor === BigCat);
    console.log(crow.constructor === Bird2);
    // Both of  these console.logs calls would display true in the console.
    
/*  Note that the constructor property is an reference to the constructor function that created the 
    instance. the advanages of the constructor property is that it's possible to check for this     
    property to find out what kind of object it is. Here's an example of how this could be used:  */

    function Dog(name) {
        this.name = name;
    }

    Dog.prototype.numLegs = 4;

    let beagle = new Dog("Grey");

    function joinDogFraternity(candidate) {
        if(candidate.constructor === Dog) {
            return true;
        } else {
            return false;
        }
    }
    
    console.log(joinDogFraternity(beagle))
// Note: Since the constructor property can be overwritten, it's generally better to use the instanceof method to check type of an object.

/********************************************************************************
    Change the Prototype to a New Object
    Up until now you have been adding properties to the prototype individualy:

    BigCat.prototype.numLegs = 4;
    This becomes tedious after more than a few properties.
    */

    BigCat.prototype.eat = function() {
        return "nom nom nom";
    }

    BigCat.prototype.decsribe = function() {
        return `My name is ${this.name}`;
    }

/*  A more efficient way is to set the prototype to anew object that already contains the properties.
    This way, the properties are added all at once: */

    Dog.prototype = {
        eat() {
            return `nom nom nom`;
        },
        describe() {
            return `My name is ${this.name}`;
        }
    }

    let greyHound = new Dog("German");
    console.log(greyHound.describe()); /* returns My names German
    
    Remember to Set the Constructor Property when Changing the Prototype
    There is ine crucial side effect of manually setting the prototype to a new object. It erases the 
    constructor property! This property can be used to check constructor function created the instance, 
    but since the property has been overwritten, it now gives false results:
    */

    console.log(greyHound.constructor === Dog); // returns false
    console.log(greyHound.constructor === Object) // returns true
    console.log(greyHound instanceof Dog) // true

//  To fix this, whenever a prototype is manually set  to a new object, remember to define the constructor property:

    BigCat.prototype = {
        constructor: BigCat,
        continent: "Africa",
        eat() {
            return `My favourite prey is Wildebeest yum yum yum`;
        },
        describe() {
            return `My name is ${this.name} you'll find me ${this.continent} `;
        }
    }

    let lioness = new BigCat("King of the Jungle", "Top speed is estimated to be 40mph");
    console.log(lioness.constructor === BigCat); // true
    console.log(lioness.constructor === Object) // false
    console.log(lioness instanceof BigCat); // true

/*  Understand Where an Object's Prototype Comes From
    Just like people inherit genes from their parents, an object inherits its prototype directly from 
    the constructor function that created it. Ror ecample, here the Preditor constructor the hyena 
    object.  */

    function Preditor(name) {
        this.name = name;
    }
    Preditor.prototype = {
        constructor: Preditor,
        continent: "Africa", 
        eat() {
            return `I am recycler and I can eat bones.`;
        }, 
        describe() {
            return  `My names ${this.name} and you'll find me in ${this.continent}`;
        }
    }

    let hyena = new Preditor("Hyena");
    // hyena inherits its prototype from the Preditor constructor function. You can show this relationship with
    // the isPrototypeOf() method.

    console.log(Preditor.prototype.isPrototypeOf(hyena)); // returns true
    /*++++++++++++++++++++++++++++++++++++++++++++++++++++++++
       ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
        
       Understand the Prototype Chain
       All objects in JavaScript (with a few exceptions) have a prototyepe. Also, an object's prototype 
       itself is an object. */
    
       console.log(typeof Preditor.prototype); // returns object
    //  Because a prototype is an object, a prototype can have its own prototype! In this case, 
    //  the prototype of Preditor.prototype is Object.prototype:
    
    console.log(Object.prototype.isPrototypeOf(Preditor.prototype))
    // How is this useful? You may recall the hasOwnProperty method from a previous challenge:

    let wildDogs = new Preditor("Apex Hunter's", "Top speed 55mph");
    console.log(wildDogs.hasOwnProperty("name"));
/*  
    The hasOwnProperty method is defined in Object.prototype, which can be accessed by Preditor.prototype,
    which can then be accessed by wildDogs. This is an example of the prototype chain. In this prototype 
    chain, Preditor is the supertype for wildDogs, while wildDogs is the subtype. Object is a supertype for both 
    Preditor and wildDogs. Object is a supertype for all objects in JavaScript. Therefore, any object can use the 
    hasOwnProperty method. */    

    
    