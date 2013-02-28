document.write("<pre>");

// Exercises 5.1 - Advanced function usage
// Exercise 5.1.1 - This code will not execute. What are the two possible solutions?
numbers = [1, 17, 42, 9];
total = sum(numbers);
document.writeln("The sum of the numbers " + numbers + " is " + total);

var sum = function(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++)
    sum += numbers[i];

  return sum;
}

// Exercise 5.1.2 - Write a product function as an anonymous function

document.write("</pre>");

// Exercise 5.1.3 - Switch the output
// The class can't decide on using alert vs document.writeln. Petitions are being signed; revolution is on the horizon.
// In comes the ability to take a function parameter.
//
// Define multiple functions that can display a message to the user. Ask them for their preference.
// Then greet them with a message through that channel.