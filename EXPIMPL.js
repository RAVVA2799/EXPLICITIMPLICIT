var a=12 + ""    //Output is "12" as number 12 is converted to string "12"
var a="15" * 2    //Output is 30 as string 15 is converted to number 15
var b="15" - "11" //Output is 4 as both the strings are converted to number
var c=undefined + 6 //Output is NaN as undefined could not be converted to number
var c="Hello" + null  //Output is "Hellonull" as null is converted to string "null"
var a =null + 25     //Output is 25 as null is converted to 0.
var a=true + true //Output is 2 as true is converted to number 1.
var a=false + 10 //Output is 10 as false is converted to number 0.
var a=10 * [6] //Output is 60 as [6] is converted to number 6.
var a=10 * [10, 20] //Output is NaN as [10, 20] could not be converted to number
var a=[1] + [1,2] //Output is "11,2" as [1] is converted to "1" and [1,2] is converted "1,2". Finally the two are concatenated to give the result "11,2"

console.log(a);
console.log(a);
console.log(b);
console.log(c);
console.log(c);
console.log(a);          // IMPLICIT COERCION
console.log(a);
console.log(a);
console.log(a);
console.log(a);
console.log(a);



//EXPLICIT COERCIONNumber("25") //Output is 25 as "25" string is converted to number 25
var a =Number("") //Output is 0 as "" string is converted to 0
var a =Number([]) //Output is 0 as [] is converted to 0
var a =Number(null) //Output is 0 as null is converted to 0
var a =Number(true) //Output is 1 as true is converted to 1
var a =Number(false) //Output is 0 as false is converted to 0
var a =Number("Test") //Output is NaN as "Test" could not be converted to number

console.log(a);
console.log(a);
console.log(a);
console.log(a);
console.log(a);
console.log(a);