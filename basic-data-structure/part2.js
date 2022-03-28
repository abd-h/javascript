/* Create complex multi-dimensional arrays
    One of the most powerful features when thinking of arrays as data structures, is that arrays can contain, or even be completely made up of other arrays. We have seen arrays in previous challenges, but fairly simple ones. However, arrays can contain an infinite depth of arrays that can contain other array, each with their own arbitary levels of depth, and so on.
    
    In this way, an array can very quickly become a very complex data structure, known as a muldi-dimensionl, or nested arrays. Consider the following example: */
    
    let nestedArray = [
        ["depth"],
        [
            ["deeper"], ["deeper"]
        ],
        [
            [
                ["deepest"], ["deepest"]
            ],
            [
                [
                    ["deepest-est?"]
                ]
            ]
        ]
    ];

    /*  the deep array is nested 2 levels deep. the deeper arrays are 3 levels deep. The deepest arrays are 4 levels, and the deepest-est? is 5
    
    While this example may seem convolted, this level of complexity is unheard of, or even unusual, 
    when dealing with large amounts of data. However, we can still very easily access the deepest levelsof an array this complex with bracket notation:  */

    console.log(nestedArray[2][1][0][0][0]);
  // This logs the string deepest-est?. And now that we know where that piece of data is, ce can reset it if  we need to:
  
  nestedArray[2][1][0][0][0] = "deeper still";
  console.log(nestedArray[2][1][0][0][0]); /* returns "deeper still"
  
  We have defined a variable, myNestedArrays, set equal to an array. Modify myNestedArray, using any combination of strings, numbers, and booleans for data elements, so that it has exactly five levels of depth (remember, the outer-moost array is level 1). Somewhere on the third level, include the string deep, on the fourth level, including the string deeper, and on the fifth level, include the string deepest.
  
  let myNestedArray = [
  // Only change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
  // Only change code above this line
];*/

    let myNestedArray = [
        ['unshift', false, 1, 2, 3, 'complex', 'nested'], 
        ['loop', 'shift', 6, 7, 1000, 'method'],
        ['concat', false, true, 'spread', 'array', ['deep']], 
        ['mutate', 1327.98, 'splice', 'slice', 'push', [['deeper']]], 
        ['iterate', 13849, 7, '8.4876', 'arbitrary', 'depth', [[['deepest']]]]
    ];

    console.log(myNestedArray);