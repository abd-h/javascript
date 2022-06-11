/*  Deop it 
    Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it. 
    
    Then return the rest of the array one the condition is satisfied, otherwise, arr should be returned as an empty array.*/


    function dropElements(arr, func) {
        let s =[];
        let g = [];
        let d= [];
          arr.filter((a, b) => {
              if(func(a)) {
                  s.push(b)
              }
          })
         g.push(...arr.slice(s[0], s[s.length -1]+ 1))
        if(g[g.length -1] > arr[arr.length-1]) {
            
            d.push(...g);
            d.push(arr[arr.length-1])
        } else {
            return g;
        }
        return d;
    }
    
    console.log(dropElements([1, 2, 3], function(n) {return n < 3}))

    console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;})); //  returns [3, 4].

    console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;})); //  returns [1, 0, 1].

    console.log(dropElements([1, 2, 3], function(n) {return n > 0;})); //  returns [1, 2, 3].

    console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;})); //  returns [].

    console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})); //  returns [7, 4].

    console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})); //  returns [3, 9, 2].