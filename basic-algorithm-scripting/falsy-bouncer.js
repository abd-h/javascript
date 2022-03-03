/* False Bouncer 

Remove all falsy valuesfrom an array.

Falsy values in JavaScript are falsel, null, 0, " ", undefined, and NaN*/

function bouncer(arr) {
    return arr.filter(a => a)
}
console.log(bouncer([7, "ate", "", false, 9]));

console.log(bouncer(["a", "b", "c"])); //  return ["a", "b", "c"].

console.log(bouncer([false, null, 0, NaN, undefined, ""])); //  return [].

console.log(bouncer([null, NaN, 1, 2, undefined])); // should return [1, 2].