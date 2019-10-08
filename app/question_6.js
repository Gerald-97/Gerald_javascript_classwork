var ans = 7 / 0;

alert(typeof(ans));

//  "" + 1 + 0          ans: 10     adding numbers to empty strings produces a number

// "" - 1 + 0           ans: -1     same here

// true + false         ans: 1      regards true as 1 and false as 0, so the sum returns 1

// 6 / "3"              ans: 2      takes the string of a single number as a number

// "2" * "3"            ans: 6      same here

// 4 + 5 + "px"         ans: 9px    adding a string of letters to a number returns a string with the letters attached

// "$" + 4 + 5          ans: $45    adding numbers to a string returns a string with the numbers attached

// "4" - 2              ans: 2      string of single number acts as a number

// "4px" - 2            ans: NaN    string isn't a single number so cannot be solved arithmetically

// 7 / 0                ans: Infinity

// "  -9  " + 5         ans: -9  5  unlike signs make the value act as a string and attaches the number

// "  -9  " - 5         ans: -14    but like signs make the value act as a number

// null + 1             ans: 1      similar to adding a number to ana empty string

// undefined + 1        ans: NaN    undefined values cannot partake in actions

// " \t \n" - 2         ans: -2     
