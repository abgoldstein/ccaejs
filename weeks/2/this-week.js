document.write("<pre>");

// Exercise 1.review - Ask the user for their name. Welcome them with a personalized message.
var username = prompt("What is your name?");
document.writeln("Welcome, " + username + "!");

// 2.1 - Conditionals
// Exercise 2.1.1 - Ask the user for 2 numbers. Tell them if the first or second number was bigger.
var num1 = prompt("Enter a number, please");
var num2 = prompt("Enter a number, please");
if (num1 > num2)
  document.writeln("Number 1 was greater.");
else if (num2 > num1)
  document.writeln("Number 2 was greater.");
else if (num1 == num2)
  document.writeln("The numbers were equal.");
else
  document.writeln("Error!");

// Exercise 2.1.2 - Ask the user for a number. Tell the user whether it is odd or even.
var number = prompt("Enter another number");
if (number % 2 == 0)
  document.writeln("That number even.");
else
  document.writeln("That number was odd");

// Exercise 2.1.3 - Ask the user what month they were born in. Tell them what season that month is in.



// 2.2 - Loops
// Exercise 2.2.1 - Use a loop to count from 10 to 1. Alert each value as you count.


// Exercise 2.2.2 - Use a loop to count from 10 to 20. Add each number to a total sum and alert that value at the end.


// Exercise 2.2.3
// Generate a random number (I haven't told you how to do this. Try Googling for it)
// Ask the user to try to guess the number (Give them the possible range)
// Tell the user if they got the number or if they were too high or too low.
// Let the user continue guessing until they get to the right answer.



// 2.3 - Arrays
// Create an array of usernames. They can be anything.
// Ask the user for their name. Check to see if that name is on the list.
// If the user is on the list, welcome them in. Otherwise, tell them to leave!
// Bonus: Now that this is working, try Googling for an easier way to do this.


// Exercise 2.3.2
// Generate 10 random numbers and show them all to the user.
// Ask the user for the index of the biggest number. Tell them whether or not they were right.


// Exercise 2.3.3 - Modify your code from exercise 2.2.3 to allow the user to replay.
// Add a scoreboard array to keep track of how many guesses it took them to win.
// Show the user the scoreboard each time and congratulate them if they beat their best.

document.write("</pre>");