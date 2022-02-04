/*  
Combine an Array into a Spring Using the join Method

The join method is used to join the elements of an array together to create a string. 
It takes an argument for the delimiter that us used to separate the array element in the 
string. Here's an example:  */

const arr = ["Hello", "World"];
const str = arr.join(" ");
console.log(str); // returns Hello World

/* Use the join method (among others) inside the sentensify function to make a sentence from the word 
in the string str. The function should return a string. For example, I-like-Star-Wars would be converted to I like Star Wars. For this challenge, do not use the replace method. 

function sentensify(str) {
  // Only change code below this line


  // Only change code above this line
}

sentensify("May-the-force-be-with-you");*/

function sentensify(str) {
    return str.split(/\W+/)
                  .join(" ");
}

//Your code should use the join method.

//Your code should not use the replace method.

console.log(sentensify("May-the-force-be-with-you")); // return a string.
console.log(sentensify("May-the-force-be-with-you")); // returns the string May the force be with you.
console.log(sentensify("The.force.is.strong.with.this.one")); // returns the string The force is strong with this one.
console.log(sentensify("There,has,been,an,awakening"));// returns the string There has been an awakening.

/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Apply Functional Programming to Convert Strings to URL Slugs

The last several challenges covered a number of useful aray and string methods that follow functional 
programming principlels. We've also learned about reduce, which is apuwerful method used to reduce 
problems to simpler forms. From computing averages to sorting, any array operation can be achieved by 
applying it. Recall that map and filter are special cases of reduce.

let's combine what we've learned to solve a practical problem.

Many content management sites (CMS) have the titles of a post added to  apart of the URL for simple bookmarking purposes. For example,  if you write a medium mmost title Stop Using Reduce, it's likely 
the URL would have some form of the title string in it (...!stop-using-reduce). You may have already noticed this on the freeCodeCamp site.

Fill in the urlSlug function so it converts a string titile and returns the hyphenated version for the URL. You can use any of the methods covered in this section, and don't use replace. Here are the 
requirements:

The imput is a string with spaces and title-cased words

The output should be all lower-cased letters

The output should be all lower-case letters

The output should not have any spaces.

// Only change code below this line
function urlSlug(title) {
return title.split(" ").join("-").replace(/^[^W]/, "");

}
// Only change code above this line
console.log(urlSlug(" A Mind Needs Books Like A Sword Needs A Whetstone"));
*/

function urlSlug(title) {
    title = title.toLowerCase();
    
    return title.split(" ").filter(a => {
        if(a !== " ") {
            return a
        }
    })
    .join("-")
}

console.log(urlSlug("Winter Is Coming")); // should return the string winter-is-coming.

console.log(urlSlug(" Winter Is  Coming")); // should return the string winter-is-coming.

console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone")); // should return the string a-mind-needs-books-like-a-sword-needs-a-whetstone.

console.log(urlSlug("Hold The Door")); // should return the string hold-the-door.