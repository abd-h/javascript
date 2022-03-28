/*  Add Key-Value Pairs to JavaScript Objects
    At their most basic, objects are just collection of key-value pairs. In other words, they are 
    pieces of data (values) mapped to unique identifiers called properties (keys). Take a look 
    at an example:  */

    const takkenCharacter = {
        player: "Hwoarang",
        fightingStyle: "Tae Kwon Doe", 
        human: true
    };

/*  The above code defines a Takken video game character object called takkecCharacter. It
    has three properties, each of which map to specific value. If you want to add an additional 
    property, such as "origin", it can be done by assigning origin to the object: */

    takkenCharacter.origin = "South Korea";

/*  this uses dot notation. If you were to observe the takkenCharacter object, it will now include the origin property. Hwoarang also had distinct orange hair. You can add this property with brackey 
notation by doing: */  

    takkenCharacter['hair color'] = "Dyed Orange";
/*  
    Bracket notation is required if your property has a space in it or if you want to use a variable to name the property. In the above case, the property is enclosed in quotes to denote it as a string and will be added exactly as shown. Without quotes, it  will be evaluated as a variable and the name of the property will be whatever value the variable is. Here's an example with a variable:  */

    const eyes = "eye color";

    takkenCharacter[eyes] = "Brown";

    console.log(takkenCharacter)
/* After adding all the examples, the object will look like this:
    {
        player: "Hwoarang", 
        fightingStyle: "Tae Kwon Doe",
        human: true,
        origin: "South Korea",
        "hair color": "Dyed Orange",
        "eye color": "Brown"
    } 
    
    A foods object has been created with three entries. using the syntax of your choice, add three more entries to it: bananas with a value of 13, grapes with a value of 35, and strawberries with a value of 27.

    let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Only change code below this line

// Only change code above this line

console.log(foods);  */

let foods = {
    apples: 25, 
    oranges: 32, 
    plums: 28, 
};
foods.banana = 13;
foods.grapes = 35;
foods.straberries = 27;

/**:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 
    Modify an Object Nested Within an Object
    Now let's take a look at a slightly more complex object. Object properties can be nested to an 
    arbitrary depth, and their values can be any type of data supported by JavaScript, including arrays and even other objects. Consider the following: */

    let nestedObject = {
        id: 28802695164,
        date: 'December 31, 2016',
        data: {
            totalUsers: 99, 
            online: 80, 
            onlineStatus: {
                active: 67, 
                away: 13, 
                busy: 8
            }
        }
    };
/*  nestedObject has three properties: id (value is number), date (value is string), and data (value is an object with ist nested structure), While structure can quickly become complex, we can
still use the same notation onlineStatus object, we use dot notation to  reference the property: */    
    nestedObject.data.onlineStatus.busy = 10;
    console.log(nestedObject);

/* ************************************************************************

    Access Property Names with Bracket Notation
    In the first object challenge we mentioned the use of bracket notation as  a way to access property values using the evaluation of a variable. for instance, imagine that our foods object is being used in a program for  a supermarket cash register. We have some function that sets the selectedFood and we want to check our foods object for the presence of that food. This might look like: 

    let selectedFood = getCurrenFood(scannedItem);
    let inventory = foods[selectedFood];
    
    This code will evaluate the value stored in the selecteFood variable and return the value of that ket in the foods object, or undefined if it is not present. Bracket notation is very useful because sometimes object porperties are not known before runtime or we need to access
    them in a more dynamic way.

    We've defined a function, checkInventory, which recieves a scanned item as an argument. return the current value of the scannedItem key in the foods2 object. You can assume that only valid keys will be provided as an argument to checkInventory.
    */    

        let foods2 = {
            apples: 25, 
            oranges: 32, 
            plums: 28, 
            bananas: 13, 
            grapes: 35, 
            strawberries: 27
        };

        function checkInventory(scannedItems) {
            return foods2[scannedItems];
        }
        console.log(checkInventory("apples"));

/*************************************************************************
    
    Use the delete Keyword to Remove Object Properties
    Now you know what objects are and their basic features and advantages. In short, they are key-value stores which provide a flexible, intuitive way to structure data, and they provide very fast lookup time. Throughout the est of these challenges, we will describe several common operations you can perform on object so you can become comfortable applying these useful data structures in you programs.
    
    In earlier challenges, we have both added to adn modifies an object's key-value pairs. Here er eill see how we can remove a key-value pair from an object. 

    Let's revisit our foods object example one last time. If we wanted to remove the apples key, we can remove it by using the delete keyword like this: */
    
    delete foods2.apples;
    console.log(foods2); /* returns {oranges: 32, plums: 28, bananas: 13, grapes: 35, strawberries: 27}

    ***************************************************************************
    
    Check if an Object has a Property
    Now we can add, modify, and remove keys from objects. But what if we just wanted to know if an object has a specific property? JavaScript provides us with two different way to do this. One uses the hasOwnProperty() method and the other uses the in keyword. If we have an object users
    with a property of Alan, we could check fo its presece in either of the following ways:

    users.hasOwnProperty("Allan");
    "Alan" in users;
    Both of these would return true.

    Finish writing  the function so that it returns true if the object passed to it contains all four names, Alan, Jeff, Sarah and Ryan and returnss false otherwise.
    */

    let newUsers = {
        Alan: {
            age: 27, 
            online: true
        },
        Jeff: {
            age: 32, 
            online: true
        },
        Sarah: {
            age: 48, 
            online: true
        },
        Ryan: {
            age: 19, 
            online: true
        }
    };

    function isEveryoneHere(userObj) {
        return (
            userObj.hasOwnProperty("Alan") 
            && userObj.hasOwnProperty("Jeff") 
            && userObj.hasOwnProperty("Sarah") 
            && userObj.hasOwnProperty("Ryan"))? true 
            : false;
    }
    console.log(isEveryoneHere(newUsers)) /* returns true
    ********************************************************************************
    
    Iterate Through th Keys of an Object  with a for...in Statement
    Sometimes you may need to iterate through all the keys within an objext. This requires a specific syntax in JavaScript called a for ...in statement. For our newUsers object, could look like this:
    */
     for (let user in newUsers) {
         console.log(user);
     }
/*  This would log Alan, Jeff, Sarah and Ryan - each value on its own line.

     In this statement, we defined a variable user, and as you can see, this variable was reset during each iteration to each of the objec's keys as the statement looped through the object 
    , 
    resulting in each newUser's name being printed on the console.

    NOTE: Objects do not maintain an odering  to stored key like array do: thus a key;s position on 
    an object, or the relative order in whivh it appears, is irrelevant when referencing or accessing that key.

    We've defined a function countOnline which accepts one argument (a users object). 
    use a for ...in statement within this function loop through the users object passed into the function and return the number of users whose oneline property is set to true. An example of  a users object which could be passed to countOnline is shown below. Each user will have an online property with either a true or false value.

    {
        Alan: {
            online: false
        }, 
        Jeff: {
            online: true
        }, 
        Sarah: {
            online: false
        }
    }
    const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  // Only change code below this line

  // Only change code above this line
}

console.log(countOnline(users));
*/

    const users2 = {
        Alan: {
            online: false
        }, 
        Jeff: {
            online: true
        }, 
        Sarah: {
            online: false
        }
    }

    function countOnline(usersObj) {
        let users = [];
        console.log(users);
        for( user in usersObj) {
            
            if(usersObj[user].online) {
               users.push(user)
            }
        }
        return users
    }

    console.log(countOnline(users2))

/********************************************************************************

        Generate an Array of All Object Keys with Object.keys()
        We can also generate an array which contains all the keys stored in an object using the Object.Keys() method and passing in an object as the argument. This will return an arry with strings representing each property in the object. Again, there will be specific order
        to the entries in the array.

        Finish writing the getArrayOfUsers function so that it returns an array containing all the properties in the object it receives as an argument.
*/    

    const keyUsers = {
        Alan: {
            age: 27, 
            online: false
        }, 
        Jeff: {
            age: 32, 
            online: true
        }, 
        Sarah: {
            age: 48,
            online: true
        },
        Ryan: {
            age: 19,
            online: true
        }
    };

    function getArrayOfUsers(obj) {
        return Object.keys(obj);
    }
    console.log(getArrayOfUsers(keyUsers)) /* returns  ['Alan', 'Jeff', 'Sarah', 'Ryan']
    
    *********************************************************************
    
    Modify an Array Sored in an Object
    Now you've seen all the basic operations for JavaScript objects. You can add, modify, and 
    remove key-value pairs, check if keys exist, and iterate over all the keys in an object. As you 
    continue learning JavaScript you will see even more versatile applications of objects. Additionally, the Data Structure lessons located in Coding Interview prep section of the currivulum also cover additional features. Now that you've learned the basics of arrays and objects, you're fully prepared to begin tackling more complex problems using JavaScript!

    Take a look at the object we'be provided in the code editor. The user object contains three keys. The data key contains five keys, one of which contains an array of friends. From this,
    you can see how flexible objects are as data structures. We've started writing a function addFriend. Finish writing so that it takes a user object and adds the name of the friends argument to the array stored in user.data.friends and returns that array.
    */

        let frUser = {
            name: "Kenneth",
            age: 28, 
            data: {
                username: "kennethCodesAllDay",
                joinDate: "March 26, 2016", 
                orginasation: "freeCodeCamp",
                friends: [
                    "Sam",
                    "Kira",
                    "Tomo"
                ],
                location: {
                    city: "San Francisco",
                    state: "CA",
                    country: "USA"
                }
            }
        };

        function addFriend(userObj, friends) {
            userObj.data.friends.push(friends);
            return userObj.data.friends;
        }
        console.log(addFriend(frUser, "Pete")) // ['Sam', 'Kira', 'Tomo', 'Pete']