/* Mutations
Return true if the string in the first element of the array contains all of the letters of  the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string
are present in the first, ingnoring.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Allien", "line"], should return true because all the letters in line are present in allien.
*/

function mutation(arr) {
   let x = arr[1].toLowerCase().split("");
   let y = arr[0].toLowerCase().split("");

  let l =  x.map(a => y.includes(a));
  return l.every(a => a === true)
}
console.log(mutation(["hello", "hey"])); // return false.

console.log(mutation(["hello", "Hello"])); // return true.

console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])); // return true.

console.log(mutation(["Mary", "Army"])); // return true.

console.log(mutation(["Mary", "Aarmy"])); // return true.

console.log(mutation(["Alien", "line"])); // return true.

console.log(mutation(["floor", "for"])); // return true.

console.log(mutation(["hello", "neo"])); // return false.

console.log(mutation(["voodoo", "no"])); // return false.

console.log(mutation(["ate", "date"])); // return false.

console.log(mutation(["Tiger", "Zebra"])); // return false.

console.log(mutation(["Noel", "Ole"])); // return true.