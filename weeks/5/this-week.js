document.write("<pre>");

// Exercises 5.1 - Advanced function usage
// Exercise 5.1.1 - This code will not execute. What are the two possible solutions?
var sum = function(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++)
    sum += numbers[i];

  return sum;
}

var numbers = [1, 17, 42, 9];
var total = sum(numbers); 
document.writeln("The sum of the numbers " + numbers + " is " + total);



// Exercise 5.1.2 - Write a product function as an anonymous function



	
var productfunction = function (number1, number2) {
   var theproduct = number1 * number2;
   document.writeln (theproduct);
} (9, 15);



document.write("</pre>");

// Exercise 5.1.3 - Switch the output
// The class can't decide on using alert vs document.writeln. Petitions are being signed; revolution is on the horizon.
// In comes the ability to take a function parameter.
//
// Define multiple functions that can display a message to the user. Ask them for their preference.
// Then greet them with a message through that channel.

function alertdisplay (text) {
	var texttoprint = text;
	alert (texttoprint);
}

function documentdisplay (text) {
	var texttoprint = text;
	document.writeln (texttoprint);
	};

var preference = prompt("Enter 1 if you prefer alert display and enter 2 if you prefer documentwrite display.");
if (preference == 1) {
	alertdisplay("Hello! You prefer alerts.")
}
else if (preference == 2) {
	document.writeln("Hello! You prefer document display.")
}
	
else {
	alert ("Invalid input.");
}
