function myfunc()
{
    document.getElementById("one").innerHTML="Paragraph Changed.";
}



/* onchange An HTML element has been changed
   onclick  user clicks an HTML element
   onmouseover  user moves mouse over an HTML element
   onmouseout   user moves mouse away from HTML element
   onkeydown    user pushes a keyboard key
   onload       browser has finished loading the page

   var txt= "yuiophjkl";
   var sln= txt.length;
   var x= "We are the so-called \"Vikings\" from the north.";


   var str = "Please locate where 'locate'  occurs!";
   var pos = str.indexOf("locate");
   var pos = str.lastIndexOf("locate");
   var pos = str.indexOf("locate", 15); second parmeter for starting position for search

   slice(start, end)
   substring(start, end)    cannot accept negative indexes
   substr(start, length)

   str = "Please visit Microsoft!";
   var n = str.replace("Microsoft", "W3Schools");

   /i to replace case insensitive
   /g  to replace all matches

   toUpperCase()
   toLowerCase()
   text1.concat(" ", text2)
   str.trim() removes whitespace from both sides of a string
   str.charAt()
   str.charCodeAt()


   var txt= "a, b, c, d, e";
   txt.split(",");
   txt.split(" ");
   txt.split("|");

   var txt = "Hello";
   txt.split("");
   H
   E
   L
   L
   o

   JS will try to convert strings to numbers in all numeric operations
   var myn= 32;
   myn.toString(10); returns 32
   myn.toString(32); returns 10
   myn.toString(16); returns 20
   myn.toString(8);  returns 40
   myn.toString(2);  returns 100000



new Date()
new Date(year, month, day, hours, minutes, seconds, milliseconds)
new Date(milliseconds)
new Date(date string)

<br> is for next line
var x = false
var y = new boolean(false)
typeof x     ;boolean
typeof y     ;object

==   expects equality in values
===  expects equality in type and values
objects cannot be compared

var person ={fname:"john", lname:"Doe", age:25};
var text = "";
var x;
for( x in person){
    text += person[x];
}

for/in statement loops through the properties of an object
for/of statement loops through the values of an iterable objects

document.write('Cleared') clears the entire page
<button onclick="this.innerHTML=date()">time is?<button>


5 different datatypes that can contain values: number, string, boolean, object and function
6 types of objects: number , string, boolean, object, date and array
2 types that cannot contain value: null and undefined
type of "string"
type of 3.14
type of NaN
typeof is an operator not a variable and always returns a string


toString()
String()
toExponential() returns a string, with number written in exponential form
toFixed() returns a string, with number written in specified number of decimals
toPrecision() returns a string, with number written with specified length

unary operator can be used to convert number to a string
var y= "5";
var x= +y;

/pattern/modifiers;
var patt = /w3schools/i;
/i for case insensitive
str.search(), str.replace()
/g global search , find all matches
/m perform multiline matching
[abc] find any of the characters between the brackets
[0-9] find any of the digits between the brackets
(x|y) find any of the alternatives separated with |
\s is for whitespaces
\d is for digits
\b find a match at the beginning of the word like\bWORD or at the end of the word like WORD\b
\uxxxx find unicode character specified by hexadecimal xxxx
quantifiers defines quantities 
n+   matches any string that contains atleast one n, n* matches any string that contains zero or more occurances of n, n? matches any string that contains zero or one occurance of n

pattern.test(string) searches string for pattern return true or false depending on the result
pattern.exec(string) searches a string for specific pattern and returns found text as an object

<input id="demo" type="number" min="5" max="10" step="1">

EvalError  error occured in the eval() function
RangeError a number "out of range" has occured
ReferenceError  an illegal refernce has occured
SyntaxError syntax error has occured
TypeError type error has occured
URIError  error in encodeURI has occured



if value is assigned to a variable that has not been declared , it will automatically become a global variable
Hoisting is JS's  default behaviour of moving declarations to the top
IN JS a variable can be declared after it has been used
Variables declared with let or const are not hoisted
Strict mode is declared by adding "use strict"; to the beginning of a script or function
 
*/



