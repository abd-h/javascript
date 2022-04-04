/*  Spinal Tap Case
    Convert a string to spinal case. Spinal case is all lowercase-words-joined-by-dashes.
*/
    function spinalCase(str) {
      return str.replace(/([a-z])([A-Z])|_|-+\s/g, "$1-$2").toLowerCase().split(" ").join("-")
    }

    console.log(spinalCase("thisIsSpinalTap"))
    console.log(spinalCase("This Is Spinal Tap")); // returns the string this-is-spinal-tap.

    console.log(spinalCase("thisIsSpinalTap")); // returns the string this-is-spinal-tap.

    console.log(spinalCase("The_Andy_Griffith_Show")); // returns the string the-andy-griffith-show.

console.log(spinalCase("Teletubbies say Eh-oh")); // returns the string teletubbies-say-eh-oh.

console.log(spinalCase("AllThe-small Things")); // returns the string all-the-small-things.