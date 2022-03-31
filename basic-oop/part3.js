/*  Use Inheritance So You Don't Repeat Yourself
    Ther's a princple in programming called Don't Repeat Yourself (DRY). The reason repeated code is a proplem is because any change requires fixing code in multiple places. This usually means more work for programmers and more room for errors. 
    
    Notice in the example below that the describe method is shred by Bird and Dog.
*/
    function Bird(name) { 
        this.name = name;
    }
    function Dog(name) {
        this.name = name;
     }

    Bird.prototype = {
        constroctor: Bird,
        describe() {
            return  `My name is ${this.name}`;
        }
    }

    Dog.prototype = {
        constroctor: Dog, 
        describe() {
            return `My name is ${this.name}`;
        }
    }

    // The describe method is repeated in two places. The code can be edited to follow the DRY principle by creating a supertype (or parent) called Animal:

    function Animal() { };

    Animal.prototype = {
        constructor: Animal, 
        describe() {
            return `My name is ${this.name}`;
        },
        eat() {
            return `nom nom nom nom`
        }
    }

    function Cat(name) {
        this.name = name;
    }

    function Bear(name) {
        this.name = name;
    }

/*  Set the Child's Prototype to an Instance of the Parent
    In the previous challenge you saw the first step for  inheriting behaviour from the supertype (or parent) Animal: makeing a new instance of Animal.
    
    Now, its time to set the prototype of the subtype  (or child - in this case, Cat and Bear to be instance of Animal.*/

    Cat.prototype = Object.create(Animal.prototype);
    Bear.prototype = Object.create(Animal.prototype);

    // Remember that the prototype is like the "recipe" for creating an object. In a way, the 
    // recipe for Cat now includes all the key "ingredients" from Animal.

    let cat = new Cat("Ginger");
    console.log(cat.describe());    /* return My name is Ginger
    cat inherits all of Animal's properties, including the eat method. 
    _________________________________________________________________________________
    
    Reset an Inherited Constructor Property
    When an object inherits its prototype from another object, it also inherits the supertype's 
    constructor property.
    */

    function Reptile(name) {
        this.name = name;
     };
   
    Reptile.prototype = Object.create(Animal.prototype);
    let snake = new Reptile("Slippy");
     snake.constructor;
/*  But snake and all instances of Reptile show show that they were constructed by  Reptile and not
    Animal. To so, you can manually set the constructor property of  Reptile to the Reptile object */ 
    
    Reptile.prototype.constructor = Reptile;
    console.log(snake.constructor === Animal) // returns true
/*__________________________________________________________________________________

     Add Methods After Inheritance
     A constructor function that inherits its prototype object from a supertype constructor function can still have itts own methods in addition to inherited methods.

     For example, Sharks is a constructor that inherits its prototype from fish*/

     function Fish() { };
     Fish.prototype.eat = function() {
         return `Eat medium to large fishs `;
     }
     
     function Shark() { };
     Shark.prototype = Object.create(Fish.prototype);
     Shark.prototype.constroctor = Shark;

/*  In addition to what is inherited from Fish, wou want to add behavior that is unique to Shark
    objects. Here, Shark will get a glide() function. Function are added to Shark's prototype the 
    same way as any constructor function. */

    Shark.prototype.glide = function() {
        return  `gliding all the way through the deep sea`;
    }
     
    let shark = new Shark();
    console.log(shark.glide()); // returns gliding all the way through the deep sea
    console.log(shark.eat()); // Eat medium to large fishs
/*_______________________________________________________________________________________

    Override Inherited Methods
    In previous lessons, you learned that an object can inherit its behavior (methods) from another object by referencing its prototype object: 
     
    ChildObject.prototype = Object.create(ParentObject.prototype);
    Then the ChildObject received its own methods by  chaining them onto its prototype:

    ChildObject.prototype.methodName = function() {.... };
    It's possible to override an inherited method. It's done the same way - by adding a method 
    ChildObject.prototype using the samemethod name as the one to override. Here's an example of Shark overriding the eat() method inherited from Fish: */    

    console.log(shark.eat()); // returns Eat medium to large fishs (as it set on parent constructor)
    // shark.eat = function() {
    //     return `Sharks are not fussy about what they eat.`
    // }
    Shark.prototype.eat = function() {
        return 'Eats other small fishes'
    }
    console.log(shark.eat()); // Eats other small fishes
    console.log(shark instanceof Shark); // true
/*_____________________________________________________________________________________________

    Use a Mixin to Add Common Behavior Between Unrelated Objects
    As you have seen, behavior is shared through inheritance. However, there are cases when inheritance is not the best solution. Inheritance does not work well for  enrelated objects like Bird and Airplane. They can both fly, but a Bird is not a type of Airplane and vice versa.

    For unrelated objects, it's better ti use mkixins. A mixin allow other objects to use a colleciton of funcitons. */    

    let flyMixin = function(obj) {
        return obj.fly = function() {
            return `flying all the way, wooooosh!`
        }
    };

    let bird = {
        name: "Donald", 
        numLegs: 4
    };

    let plane = {
        model: 777,
        numPassangers: 524
    };

    flyMixin(bird);
    flyMixin(plane);
    console.log(bird.fly()); // returns flying all the way, wooooosh!
    console.log(plane.fly()); // returns flying all the way, wooooosh!

/*  Create a mixin named glideMixin that defines a method named glide. Then use the glideMixin to give both bird and boat the avility to glide. */

let boat = {
    size: "300m",
    name: "Worrier",
    type: "Race Boat."
}

let bird2  = {
    name: "Donald",
    numLegs: 2
}

function glideMixin(obj) {
    return obj.glide = function() {
        return 'Alas, this is flighless bird!';
    }
}

glideMixin(bird2);
glideMixin(boat);
console.log(bird2.glide());
console.log(boat.glide());

/*__________________________________________________________________________

    Use Closure to Protect Properties Within an Object from Being Modified Externally
    In the previous challenge, bird had a public property name. It is considered public because it can be accessed and changed outside of bird's definition. */

    bird.name = "duffy";
/*  Therefore, any part of you code can easily change the name of bird to any value. Think about 
    thinkgs kike passwords and bank accounts being easily chageable by any part of your codebase.
    That could cause a lot of  issues. 

    The simplest way to make this public property private is by creating a variable withn the constructor function. This changes the scopre of that variable to be within the constructor function versus available globelly. This way, the variable can only accessed and changed by methods also within the constructor function.*/    

    function Chicken() {
        let hatchedEgg = 10;
        this.getHatchedEggCount = function() {
            return hatchedEgg;
        };
    }
    let hen = new Chicken();
    console.log(hen.getHatchedEggCount()) // returns 10
/*  Here getHatchedCount is a privileged method, because it has access to the private variable 
    hatchedEgg. This is possible because hatchedEgg is declared in the same contex as 
    getHatchedEggCount. In JavaScript, a function always has access to the context in wich it has 
    created. this is called closure.

    Changed how weight is declared in the Bird function so it is a pravate variable. Then, create a methof getWeight that returns the value of weight 15.

    function Bird() {
  this.weight = 15;


    }   */

    function Bird3() {
        let weight = 15;
        this.getWeight = function() {
            return weight;
        }
    }
    let eagle = new Bird3();
    console.log(eagle.getWeight());

    /*__________________________________________________________________________
    
        Use an IIFE to Create a Module
        An immediately invoked function expression (IIFE) is often used to group related functionality into a single object or module. For example, an earlier challenge defined two mixins: */

        function glideMixin2(obj) {
            obj.glide2 = function() {
                return "gliding on the water";
            }
        }
        glideMixin2(boat);
        console.log(boat.glide2()); // returns gliding on the water;

        function flyMixin2(obj) {
            obj.fly = function() {
                return "Flying, wooosh";
            };
        }
    // We can group the mixins into a module as follows:

    let motionModule = (function() {
        return {
            glideMixin3(obj) {
                obj.glide3 = function() {
                    return "gliding all the way to the sea"
                }
            }, 
            flyMixin3(obj) {
                obj.fly = function() {
                    return 'Flying all the way to Toronto';
                }
            }
        }
    }())
   
/*  Note that you have an immediately invoked function expression (IIFE) that returns an object 
    motionModule. This returned object contain all of the mixin behaviors as properties of the 
    object. The advantage of the module pattern is that all of the motion behaviors can be packaged 
    into a single object that can then be used by other parts of your code. Here is an example 
    using it: */

     motionModule.glideMixin3(boat);
    console.log(boat.glide3()); // gliding all the way to the sea