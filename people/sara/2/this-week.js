// Exercise 1.review - Ask the user for their name. Welcome them with a personalized message.
var username = prompt("What is your name?");
alert("Hello, " + username + "!");

// 2.1 - Conditionals
// Exercise 2.1.1 - Ask the user for 2 numbers. Tell them if the first or second number was bigger.
var num1 = prompt("Please enter a number: ");
var num2 = prompt("Please enter a second number: ");
if (num1 > num2)
	alert (num1 + " is the largest number.");
else if (num1 < num2)
	alert (num2 + " is the largest number.");
else
	alert ("The numbers are equal.");


// Exercise 2.1.2 - Ask the user for a number. Tell the user whether it is odd or even.
var num1 = prompt("Please enter a number: ");
if (num1 % 2 == 0)
	alert ("The number is even.");
else
	alert ("The number is odd.");

// Exercise 2.1.3 - Ask the user what month they were born in. Tell them what season that month is in.
var month = prompt("What month were you born in? ");
if (month=="December" || month == "January" || month=="February")
	alert (month + " is in Winter.");
else if (month=="March" || month == "April" || month=="May")
	alert (month + " is in Spring.");
else if (month=="June" || month == "July" || month=="August")
	alert (month + " is in Summer.");
else if (month=="September" || month == "October" || month=="November")
	alert (month + " is in Fall.");
else
	alert (month + " does not exist!");



// 2.2 - Loops
// Exercise 2.2.1 - Use a loop to count from 10 to 1. Alert each value as you count.
for (i=10; i>0; i--)
	alert ("The value of i is " + i);


// Exercise 2.2.2 - Use a loop to count from 10 to 20. Add each number to a total sum and alert that value at the end.
// This one works.  The answer is 165.
sum = 0;
for (i=10; i<=20; i++)
{
	sum += i;
}
alert ("The Sum of the numbers from 10 to 20 is" + sum);


// Exercise 2.2.3
// Generate a random number (I haven't told you how to do this. Try Googling for it)
// Ask the user to try to guess the number (Give them the possible range)
// Tell the user if they got the number or if they were too high or too low.
// Let the user continue guessing until they get to the right answer.
var randomnumber=Math.floor(Math.random()*100);
var num1 = prompt("Please enter a number between 1 and 100: ");
alert("Saving the random number code for later");


// 2.3 - Arrays
// Create an array of usernames. They can be anything.
// Ask the user for their name. Check to see if that name is on the list.
// If the user is on the list, welcome them in. Otherwise, tell them to leave!
// Bonus: Now that this is working, try Googling for an easier way to do this.
var validNames = ["Sara", "Zoe", "Jacob", "Robert", "Ruby", "Luke", "Anakin"];
var nameEntered = prompt("What is your name?");
if (validNames.indexOf(nameEntered) != -1)
	alert("Welcome");
else
	alert("PRIVATE: please leave");

// Exercise 2.3.2
// Generate 10 random numbers and show them all to the user.
// Ask the user for the index of the biggest number. Tell them whether or not they were right.
var randomNumberArray = [];
for(i=0; i<=9; i++)
{
	randomNumberArray[i].push(Math.floor(Math.random()*100));
	alert(randomNumberArray[i]);
}

var userInput = prompt("Please enter the index of the biggest number: ");
if(userInput == i)
	alert("You are correct!");
else
	alert("You are incorrect!");


// Exercise 2.3.3 - Modify your code from exercise 2.2.3 to allow the user to replay.
// Add a scoreboard array to keep track of how many guesses it took them to win.
// Show the user the scoreboard each time and congratulate them if they beat their best.