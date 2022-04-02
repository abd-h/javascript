/* Create a JavaScript Promise

A promise in JavaScript is exactly what it sounds like- you use it to make a promise to do something, usually asynchronously. When the task completes, you either fulfill your promise 
or fail to do so. Promise is a constructor function, so you need to use the new keyword to 
create one. It takes a function, as its argumrnt, with weo parameters - resolve and reject.
These are methods used to determin the outcome of the promise. The syntax looks like this:

const myPromise = new Promise((resolve, reject) => {

});

Create a new promise called makeServerRequest. Pass in function with resolve and reject
parameters to the constructor.

const makeServerRequest = new Promise((resolve, reject) => {
    
})

////////////////////////////////////////////////////////////////////////////////////////////////

Complete a Promise with resolve and reject

A Promise has three states: pending, fulfilled, and rejected. The promise you created in the last challenge is forever stuck in the pending state because you did not add a way to complete the 
promise. The resolve and reject parameters given to the promise argument are used to do this.
resolve is used when you want your promise to succeed, and reject is used when you want it to 
fail. These are methods that take one argument, as seen below.

const myPromise = new Promise((resolve, reject) => {
    if (condition here) {
        resolve("Promise was fulfilled");
    } else {
        reject("Promise was rejected");
    }
});

The example above uses strings for the argument of these functions, but it can really be anything.
Often, it might be an object, that you would use data from, to on your website or elsewhere.

Make the promise handle success and failure. If responseFromServer is true, call the resolve method
to successfully complete the promise. Pass resolve a string with the value "We got the data". If 
respondFromServer is false, use the reject method instead and pass it the string: "Data not received". */

const respondFromServer = true;
const requestFromServer = new Promise((resolve, reject) => {
    if (respondFromServer) {
       return resolve("We got the data");
    } else {
      return  reject("Data not received")
    }
});


const isDataThere = () => {
   return requestFromServer
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.log(error);
     })
}
isDataThere()

/* Handle a Fulfilled Promise with then

Promises are most useful when you have a process that takes an unknown amount of time in your
code (i.e. something asynchronous), often a server request. When you make a server request it takes
some amount of time, and after it completes you usually want do  something with the response from 
the server. This can be achieved by using the then method. The then method is executed immediatly 
after your promise is fulfilled with resolve. Here's an example: 

myPromis.then(result => {

});

result comes from the argument given to the resolve method.

Handle a Rejected Promise with catch

catch is the method used when your promise has been rejected. It is executed immediately after
a promise's reject method is called. Here's the syntax:

myPromise.catch(error) => {

} 
error is the argument passed in to the rejected method*/

/**::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 * 
 Take an example, you don't know you will get time on the weekend or not, means either you will take them to a party.

 But actually, you don't know you will get time on the weekend or not, means either you are going to
 complete that promise or maybe not.

 So there may be below chances- 

    .   Pending: You don't know you will get time or not
    .   Fulfilled: You give them a party
    .   Rejected: You don't give them a party

So promise start with the pending state then after fulfilled and at the end it in the Rejected 
state.
    
 */

function makePartyPromise(partyPromise) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(partyPromise) {
                resolve("I given party to friends")
            } else {
                reject("I am not given party to friends");
            }
        }, 5, 1000);
    });
}

let partyPromise = makePartyPromise(true);
partyPromise
        .then(success => console.log(success))
        .then(reason => console.log(reason = "I have time this weekend"))
        .finally(() => console.log("Freinds are ready for party!"))







