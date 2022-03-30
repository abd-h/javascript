/*  Define a Constructor Function
    Constructors are functions that creat new objects. They define properties and behaviors that will belong to the new object. Think of them as a blueprint for the creation of new objects. 
    
    Here is an example of  a constructor:   */

    function Bird() {
        this.name = "Albert",
        this.color = "blue",
        this.numLegs = 2;
    }

/* This constructor defines a Bird object with properties name, color, and numLegs
    set to Abert, blue, 2 respectively. Constructors follow a few conventions:
        .   Constructores are defined with a capitalized name to distinguish them from other function that are not constructors
        .   Constructors use the keyword this to set properties of the objext they will create. Inside the constructor, this refers to the new object it will create. Inside the constructor, this refers to the new object it will create.
        .   Constructor define properties and behaviors instead of returning a value as other functions might.

        Create a constructor, Dog, with  properties name, color, numLegs that are set to a string, a string and a number, respectively. 
        
        function Dog() {
            this.name = "Beagle";
            this.color = "Blond";
            this.numLegs = 4;
        }
**********************************************************************************************

        Use a Constructor to Create Objects
        Here's the Bird constructor from the previous challenge:

        function Bird() {
            this.name = "Albert";
            this.color = "blue";
            this.numLegs = 2;
        }
        */

        let blueBird = new Bird();
/*      Notice that the new operator is used when calling a constructor. This tells JavaScript to   
        create a new instance of Bird called blueBird. 
        Without the new operator, this inside the constructor would not point to the newly created object, giving unexpected results. Now blueBird has all the properties defined inside the Bide constructor: */
        
        console.log(blueBird.name);// returns Albert
        console.log(blueBird.color); // blue
        console.log(blueBird.numLegs); // 2

        // Just like any other object , its properties can be accessed and modified:

        blueBird.name = "Elvira";
        console.log(blueBird.name); /* returns Elvira 
        ********************************************************************
        
        Extend Constructors to Receive Arguments
        To more easily create different Bird objects, you can design your Bird constructor to accept parameters:
        */

        function Dog(name, color) {
            this.name = name;
            this.color = color;
            this.numLegs = 4;
        }

        let terrier = new Dog("Beagle", "Ginger");
        console.log(terrier.name); /* returns Beagle 
        ***********************************************************************
        
        Verify an Object's Constructor with instanceof
        Anytime a constructor function creates a new object, that object is said to be an instance of its constructor. JavaScript gives a convenient way to verify this with the instanceof operator. instanceof allows you to compare an object to a constructor, returnong true or
        false based on whether or not that object was created with the constructor. 
        
        Here's ecample: */

        let Bird2 = function(name, color) {
            this.name = name;
            this.color = color;
            this.numLegs = 4;
        }

        let crow = new Bird2("Alexis", "Black");
        
        console.log(crow instanceof Bird2); // returns true

        // If an object is created without using a constructor, instanceof will verify that it is not a instance of that constructor.

        let canary = {
            name: "Mildred",
            color: "Yellow",
            numLegs: 2
        };
        console.log(canary instanceof Bird2); // returns false

/*      Create a vew instance of the House constructor, calling it myHouse and passing a number of 
        bedrooms. Then, use instanceof to verify that it is an instance of House. */       

        function House(numOfRooms, city) {
            this.numOfRooms = numOfRooms; 
            this.city = city;
        }

        let myHouse = new House(4, "London");
        console.log(myHouse instanceof House);// true

/*      Understand Own Properyies 
        In the following example, the BigCat constructor defines two properties: name, numLegs and speed: */

        function BigCat(name, speed) {
            this.name = name; // own property
            this.speed = speed;
        }        

        // Prototype properties for shared properties
        BigCat.prototype.numLegs = 4;

        let cheater = new BigCat("Apax", 45);
        let lion = new BigCat("Preditors", 23)

        let ownProps = [];

        for(let property in cheater) {
            if(cheater.hasOwnProperty(property)) {
                ownProps.push(property)
            }
        }
        console.log(ownProps)

        // Iterate Over All Properties
/*      There are two type of properties, Own properties and prototype properties. 
        Own properties  are defined directly on the object instance itself. And prototype properties are defined on the prototype .
        
        function Bird(name) {
            this.name = name; // own property
        }

        Bird.prototype.numLegs = 2; // prototype property
        */        

//      Here's how to you add lion's own properties to the array ownProps2 and 
//      prototype properties to the array prototypeProps2.

        let ownProps2 = [],
            prototypeProps2 = [];

        for (let ownProperty in lion) {
            if(lion.hasOwnProperty(ownProperty)) {
                ownProps2.push(ownProperty)
            } else {
                prototypeProps2.push(ownProperty)
            }
        }    

        console.log(ownProps2);// ['name', 'speed']
        console.log(prototypeProps2); // ['numLegs']