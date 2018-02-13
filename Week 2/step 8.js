var x = "hello world";
undefined
var z = 14;
undefined
var w = 0;
w = true; 
undefined
var cars = ["Saab", "Volvo", "BMW"];
undefined

console.log('The value of my variable foo is: ' + "hello world");
The value of my variable foo is: hello world
undefined

console.log('The value of my variable foo is: ' + x);
The value of my variable foo is: hello world
undefined

console.log('The value of my variable foo is: ' + 14);
The value of my variable foo is: 14
undefined

console.log('The value of my variable foo is: ' + z);
The value of my variable foo is: 14


console.log('The value of my variable foo is: ' + true);
The value of my variable foo is: true
console.log (w);
true

console.log('The value of my variable foo is: ' + "Saab","Volvo","BMW" );
VM374:1 The value of my variable foo is: Saab Volvo BMW
undefined
console.log('The value of my variable foo is: ' + cars);
VM376:1 The value of my variable foo is: Saab,Volvo,BMW



