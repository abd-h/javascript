/*
    Make a Person 
    Fill in the object constructor with the following methods below.

    getFirstName()
    getLastName()
    getFullName()
    setFirstName(first)
    setLastName(last)
    setFullName(firstAndLast)

    Run the tests to see the expected output for each method. The methods that take an argument must accept only one argumnt and it ahs to be a string. These methos must be the only available means of interacting with the object.
*/

    const Person = function(firstAndLast) {
        let firstName = firstAndLast.split(" ")[0];
        let lastName = firstAndLast.split(" ")[1];
        this.getFirstName = (() => firstName);
        this.getLastName = (() => lastName);
        this.getFullName = (() => `${firstName} ${lastName}`);
        this.setFirstName = ((first) => firstName = first);
        this.setLastName = ((last) => lastName = last);
        this.setFullName = ((firstAndLast) => {
            firstName = firstAndLast.split(" ").slice(0, 1);
            lastName = firstAndLast.split(" "). slice(1);
            return `${firstName} ${lastName}` == firstAndLast
        })
    }

    const bob = new Person("Bob Ross")
    console.log(bob.getFullName());

    console.log(bob instanceof Person) //  return true.

    console.log(bob.firstName); //  return undefined.

    console.log(bob.lastName ); //  return undefined.

    console.log(bob.getFirstName()) //  return the string Bob.

    console.log(bob.getLastName()) //  return the string Ross.

    console.log(bob.getFullName()) //  return the string Bob Ross.

    bob.setFirstName("Haskell");
  
    console.log(bob.getFullName()) //  return the string Haskell Ross after bob.setFirstName("Haskell").

    bob.setLastName("Curry")

    console.log(bob.getFullName()) //  return the string Haskell Curry after bob.setLastName("Curry").

    console.log(bob.getFullName()) //  return the string Haskell Curry after bob.setFullName("Haskell Curry").

    console.log(bob.getFirstName()) // should return the string Haskell after bob.setFullName("Haskell Curry").

    console.log(bob.getLastName()) //  return the string Curry after bob.setFullName("Haskell Curry").