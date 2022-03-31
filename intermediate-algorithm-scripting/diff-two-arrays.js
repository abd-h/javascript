/*  Diff Two Arrays
    Compare two arrays and return a new array with items found in one of the two given arrays, but not both. In other words, return the symmetetric difference of the two arrays.

    Note: You can return array with its elements in any order.
    */

    function diffArray(arr1, arr2) {
       return [...arr2.reduce((a, b) => {
            if(arr1.indexOf(b) === -1){
                a.push(b);
            }
            return a;
        }, []),
        ...arr1.reduce((a, b) => {
            if(arr2.indexOf(b) === -1){
                a.push(b);
            }
            return a;
        }, [])];
    }

    console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
    console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));// return ["pink wool"].

    console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));// return an array with one item.

    console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))// should return ["diorite", "pink wool"].

    console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));// return an array with two items.

    console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]));// return [].

    console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]));// return an empty array.

    console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));// return [4].

    console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));// return an array with one item.

    console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));// return ["piglet", 4].

    console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));// return an array with two items.

    console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]));// return console.log(diffArray(["snuffleupagus", "cookie monster", "elmo"].

    console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]));// return an array with three items.

    console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));// return [1, "calf", 3, "piglet", 7, "filly"].

    console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));// return an array with six items.