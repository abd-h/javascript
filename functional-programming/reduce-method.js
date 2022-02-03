/*              Use the reduce Method to Analyze Data

Array.prototype.reduce(), or simply reduce(), is themist general of all array operations in JavaScript.
You can solve almost any array processing problem using the reduce method.

The reduce method allows for more general forms of array processing, and it's prossible to show that 
voth filtere and map can be derived as special applications of reduce. the reduce method iterates over each item in an array and returns a single value (i.e. string, number, object, array). This is achieved via a callback function that is called on each iteration.

The callback function accepts four arguments:
        The first argument is known as the accumulator, which gets assigned the return value of the callback function from the previous iteration, the second is the current element being processed, the third is the index of that element and the fourth is the array upon which reduce is called.
        
In addition to callback function, reduce has an additional parameter which takes an initial value for the accumulator. If this secon parameter is not used, then the furst iteration is skipped and the second iteration gets passed the first  and second arguments.*/

const users = [
    {name: "John", age: 34},
    {name: "Amy", age: 20}, 
    {name: "comperCat", age: 10}
];

const sumOfAges = users.reduce((obj, user) => {
    obj[user.name] = user.age;
    return obj
},{})
console.log(sumOfAges); /* The console would display the value {John: 34, Amy: 20, comperCat: 10}

The variable watchList holds an array of objects with information on several movies. Use reduce to find 
the average IMDB rating of the movies directed by Christopher Nolan. Recall from prior challenges how 
to filter data and map over it to pull what you need. You may need to create othe variables, and return the 
average rating from getRating function. Note that the rating values are saved as strings in the object and needs to be xonverted into numbers before they are used in any mathematical operations.*/

// The global variable
const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

// function getRating(watchList) {
//   // Only change code below this line
//   let averageRating;


//   // Only change code above this line
//   return averageRating;
// }

// console.log(getRating(watchList));

function getRating(watchList) {
    let  averageRating= [];
    watchList.filter(director => {
        if(director.Director === "Christopher Nolan") {
           averageRating.push(director);
        }
    });
    return averageRating.reduce((a, b) => {
      return a + Number(b.imdbRating) / averageRating.length
    },0)
};
console.log(getRating(watchList));

/*             Use Higher-Order Function map, filter, or reduce to Solve a complex Problem

Now that you have woked through a few a challenges using higher-order functions like map(), 
filter(), and reduce(), you now get to apply them to solve a complex challenge.

Complere the code for the squareList function using any conbination of map(), filer(), and reduce().
The function should return anew array containing the squares of only the psitive integers (decimal 
numbers are not intergers) when an array of real numbers is passed to it. An example of an array of 
real numbers is [-3, 4, 8, 5, 3, -3, 2].

Note: Your function should not use any kind of for or while loops or forEach() function.

const squareList = arr => {
  // Only change code below this line
  return arr;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);*/

const squareList = ((arr) => {
    let isInteger = [];
    arr.filter(a => (a === parseInt(a) && a > 0)? isInteger.push(a * a) : []);
    return isInteger
});

console.log(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])); // should return [16, 1764, 36].

console.log(squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3])); // should return [9, 100, 49].

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);