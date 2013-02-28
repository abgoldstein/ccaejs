document.write("<pre>");

// Exercises 5.1 - Anonymous functions
// Exercise 5.1.1 - This code will not execute. What are the two possible solutions?
var sum = function(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++)
    sum += numbers[i];

  return sum;
}

numbers = [1, 17, 42, 9];
total = sum(numbers);
document.writeln("The sum of the numbers " + numbers + " is " + total);

// Exercise 5.1.2 - Write a product function as an anonymous function
var productFunction = (function(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++)
    sum *= numbers[i];

  return sum;
});
total = productFunction(numbers);
document.writeln("The product of the numbers " + numbers + " is " + total);

document.write("</pre>");

// Exercise 5.1.3 - Switch the output
// The class can't decide on using alert vs document.writeln. Petitions are being signed; revolution is on the horizon.
// In comes the ability to take a function parameter.
//
// Define multiple functions that can display a message to the user. Ask them for their preference.
// Then greet them with a message through that channel.
var outputChoice = prompt("What is your output preference? 1 for using alerts, 2 for using document.write");
  
var alertOutput = function(message) {
  alert(message);
}
var writelnOutput = function(message) {
  document.writeln(message);
}

if (outputChoice == 1)
  outputChoice = alertOutput;
else if (outputChoice == 2)
  outputChoice = writelnOutput;

outputChoice("Hey there! How's our connection?");

document.write("</pre>");