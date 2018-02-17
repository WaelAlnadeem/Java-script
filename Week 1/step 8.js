var x = "hello world";

var z = 14;

var w = 0;
    w = true; 

var cars = ["Saab", "Volvo", "BMW"];


console.log('The value of my variable foo is: ' + "hello world");
// The value of my variable foo is: hello world


console.log('The value of my variable foo is: ' + x);
// The value of my variable foo is: hello world


console.log('The value of my variable foo is: ' + 14);
// The value of my variable foo is: 14


console.log('The value of my variable foo is: ' + z);
// The value of my variable foo is: 14


console.log('The value of my variable foo is: ' + true);
// The value of my variable foo is: true
console.log (w);
// true

console.log('The value of my variable foo is: ' + "Saab","Volvo","BMW" );
// The value of my variable foo is: Saab Volvo BMW

console.log('The value of my variable foo is: ' + cars);
// The value of my variable foo is: Saab,Volvo,BMW

console.log('The Type of my variable x is: ' + 'a string');
// The Type of my variable x is: a string

console.log('The Type of my variable z is: ' + 'a number');
// The Type of my variable w is: a number

console.log('The Type of my variable w is: ' + 'a boolean');
// The Type of my variable w is: a boolean

console.log('The Type of my variable cars is: ' + 'a object');
// The Type of my variable w is: a object

typeof x
// "string"

typeof w
// "boolean"

typeof cars
// "object"

typeof z
// "number"


let x = 62;
let y = "hello world";
let u = "How are you?";
if (typeof x == typeof y ) {
    console.log('SAME TYPE');
}
else {  console.log(' Not the SAME TYPE')
     }
// Not the SAME TYPE


if (typeof u == typeof y ) {
    console.log('SAME TYPE');
}
else {  console.log(' Not the SAME TYPE')
     };
// SAME TYPE






