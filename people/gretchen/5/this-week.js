document.write("<pre>");
var i; // for indexes in this file
var numbers = [1, 17, 42, 9]; //added var for numbers declaration
var total;

// Exercises 5.1 - Advanced function usage
// Exercise 5.1.1 - This code will not execute. What are the two possible solutions?

//numbers = [1, 17, 42, 9]; 
// total = sum(numbers);
// document.writeln("The sum of the numbers " + numbers + " is " + total);

// var sum = function(numbers) {
//  var sum = 0;
// for (var i = 0; i < numbers.length; i++)
//   sum += numbers[i];

// return sum;
//}


//For exercise 5.1.1
document.writeln( "Exercise 5.1.1 Expecting total = 69." );

//Solution 1 - Named Function
function NamedSumFn( numarray){
  var sum = 0;
  for (i = 0; i < numarray.length; i++) {
    sum += numarray[i];
  };
  return sum;
};
total = NamedSumFn( numbers )
document.writeln( "5.1.1 Solution 1: Named Function - The sum of the numbers " + numbers + " is " + total );


//Solution 2 - Simple Anonymous Function
var SumAnonFn;

SumAnonFn = function( AnArray ) {
   var sum;
   for (i = 0, sum=0; i < AnArray.length; i++) {
     sum += AnArray[i];
  };
  return sum;
};
total = SumAnonFn( numbers );

document.writeln("5.1.1 Solution 2: Simple Anonymous Function - The sum of the numbers " + numbers + " is " + total );


//Solution 3: Prototypeexample from Web
Array.prototype.sum = function() {
var L;
for (i = 0, L = this.length, sum = 0; i < L; sum += this[i++]);
return sum;
}

document.writeln("5.1.1 Solution 3 from Web: The sum of the numbers " + numbers + " is " + numbers.sum() );


// Exercise 5.1.2 - Write a product function as an anonymous function

document.writeln( "Exercise 5.1.2 Product Anonymous Function");
var ProductAnonFn;

ProductAnonFn = function( AnArray ) {
   var product;
   for (i = 0, product =1; i < AnArray.length; i++) {
     product *= AnArray[i];
  };
  return product;
};
total = ProductAnonFn( numbers );

document.writeln("5.1.2 Anon Function - The product of the numbers " + numbers + " is " + total + " Check = " + "6426" );


// Exercise 5.1.3 - Switch the output
// The class can't decide on using alert vs document.writeln. Petitions are being signed; revolution is on the horizon.
// In comes the ability to take a function parameter.
//
// Define multiple functions that can display a message to the user. Ask them for their preference.
// Then greet them with a message through that channel.

document.writeln( "Exercise 5.1.3 Output Preference Function" );
var Prefers;
var ChoiceFn;

var AlertMsg = function( message ) { alert( message ); };
var WritelnMsg = function( message ) { document.writeln( message ); };

Prefers = prompt("How do you want to see output, alert or writeln?", "Enter a(lert) or w(riteln)" );

switch ( Prefers ) { 
  case "a":
    ChoiceFn = AlertMsg;
    break; 
  case "w":
    ChoiceFn = WritelnMsg;
    break; 
  default:
    alert( "Unrecognized response so will follow this with another alert");
    ChoiceFn = AlertMsg;
};
//Now call it
ChoiceFn( "Hi" );
