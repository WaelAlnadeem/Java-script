1-
// This is an in-line comment.
// ghjhhggf;
/*fdghhgfd*/
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
2-
Use the var keyword to create a variable called myName.
var myName;
// Example
var ourName;

// Define myName below this line
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
3- (Assign the value 7 to variable a. Assign the contents of a to variable b)

myVar = 5;
// Setup
var a;
var b = 2;

// Only change code below this line
var a = 7;
var b= a;
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Define a variable a with var and initialize it to a value of 9.
var a = 9;
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Initialize the three variables a, b, and c with 5, 10, and "I am a" respectively so that they will not be undefined.


// Initialize these three variables
var a = 5;
var b= 10;
var c= "I am a";

// Do not change code below this line

a = a + 1;
b = b + 5;
c = c + " String!";
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

Modify the existing declarations and assignments so their names use camelCase.
// Declarations
var studlyCapVar = 10;
var properCamelCase = "A String";
var titleCaseOver = 9000;

// Assignments
studlyCapVar  = 10;
properCamelCase  = "A String";
titleCaseOver = 9000;
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Change the 0 so that sum will equal 20.
var sum = 10 + 10;
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Change the 0 so the difference is 12.
var difference = 45 - 33;
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Change the 0 so that product will equal 80.
var product = 8 * 10;
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Change the 0 so that the quotient is equal to 2.
var quotient = 66 / 33;
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Change the code to use the ++ operator on myVar.
var myVar = 87;
myVar++;
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Change the code to use the -- operator on myVar
var myVar = 11;
myVar --;
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Create a variable myDecimal and give it a decimal value with a fractional part (e.g. 5.7).
var ourDecimal = 5.7;
var myDecimal = 5.6;
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Change the 0.0 so that product will equal 5.0.
var product = 2.0 *2.5;
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Change the 0.0 so that quotient will equal to 2.2.
var quotient = 4.4 / 2.0;
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Set remainder equal to the remainder of 11 divided by 3 using the remainder (%) operator
var remainder= 11%3;
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Convert the assignments for a, b, and c to use the += operator.
var a = 3;
var b = 17;
var c = 12;

// Only modify code below this line

a += 12;
b += 9;
c += 7;
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Convert the assignments for a, b, and c to use the -= operator.
var a = 11;
var b = 9;
var c = 3;

// Only modify code below this line

a -= 6;
b -=15;
c -=1;
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Convert the assignments for a, b, and c to use the *= operator.
var a = 5;
var b = 12;
var c = 4.6;

// Only modify code below this line

a *=  5;
b *= 3;
c *= 10;
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Convert the assignments for a, b, and c to use the /= operator.
var a = 48;
var b = 108;
var c = 33;

// Only modify code below this line

a /=  12;
b /=  4;
c/=  11;
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Convert Celsius to Fahrenheit
function convertToF(celsius) {
  var fahrenheit;
  // Only change code below this line
  fahrenheit = (celsius * (9/5)) + 32;
  
  // Only change code above this line
  return fahrenheit;
}

// Change the inputs below to test your code
convertToF(30);
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Declare String Variables 
var myFirstName= "wael";
var myLastName  = "alnadeem";
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Escaping Literal Quotes in Strings

var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Quoting Strings with Single Quotes
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Escape Sequences in Strings
var myStr = "FirstLine\n\\SecondLine\\\rThirdLine";
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Concatenating Strings with Plus Operator
var myStr = "This is the start. " + "This is the end.";
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Concatenating Strings with the Plus Equals Operator
var myStr = "This is the first sentence. ";

myStr += "This is the second sentence."
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Constructing Strings with Variables
var myName = "Wael";
var myStr = "my name is" + myName + " and I am swell!"  ;
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Appending Variables to Strings
var someAdjective = "awesome!";
var myStr = "Learning to code is ";
myStr += someAdjective;
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Find the Length of a String
var lastNameLength = 0;
var lastName = "Lovelace";

// Only change code below this line.

lastNameLength = lastName.length;
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Use Bracket Notation to Find the First Character in a String
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Understand String Immutability
var myStr = "Jello World";

// Only change code below this line

myStr = "Hello World"; // Fix Me
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Use Bracket Notation to Find the Nth Character in a String
var lastName = "Lovelace";

// Only change code below this line.
var thirdLetterOfLastName = lastName[2];
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Use Bracket Notation to Find the Last Character in a String
var lastName = "Lovelace";

// Only change code below this line.
var lastLetterOfLastName = lastName[lastName.length - 1];
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Use Bracket Notation to Find the NthtoLast Character in a String 
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName[lastName.length - 2];
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Word Blanks

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  // Your code below this line
  result+= "My "+myAdjective+" "+myNoun+" "+myVerb+" very "+myAdverb+".";

  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Store Multiple Values in one Variable using JavaScript Arrays
var myArray =  ["John", 23]
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Nest one Array within Another Array
var myArray = [["the universe", 42], ["everything", 101010]];
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Access Array Data with Indexes
var myArray = [1,2,3];
var myData = myArray[0];
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Modify Array Data With Indexes 
var myArray = [1,2,3];
myArray[0]= 3;
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Access MultiDimensional Arrays With Indexes
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

// Only change code below this line.
var myData = myArray[2][1];
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Manipulate Arrays With push
var myArray = [["John", 23], ["cat", 2]];


// Only change code below this line.

myArray.push(["dog", 3]);
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Manipulate Arrays With pop 
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line.
var removedFromMyArray= myArray.pop() ;
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Manipulate Arrays With shift
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line.
var removedFromMyArray = myArray.shift();
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Manipulate Arrays With unshift 
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line.
myArray.unshift(["Paul",35]);
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Shopping List
var myList = [["cat", 7],["dog" , 8],["sded" , 55],["sdgsb", 5], ["sdgssdgb", 56] ];
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\






