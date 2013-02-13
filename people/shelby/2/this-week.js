// Exercise 1.review - Ask the user for their name. Welcome them with a personalized message.
alert("hello");

// 2.1 - Conditionals
// Exercise 2.1.1 - Ask the user for 2 numbers. Tell them if the first or second number was bigger.
var firstnumber = prompt("Give me a number");
var secondnumber = prompt("Now give me a second number");
if (firstnumber>secondnumber) {
	alert("The first number is bigger.");
} else if (secondnumber>firstnumber) {
	alert("The second number is bigger.")
} else if (firstnumber === secondnumber){
	alert("The first number and the second number are equal")
} else {
	alert("There is a problem. Maybe you did not enter two numbers.")
}

// Exercise 2.1.2 - Ask the user for a number. Tell the user whether it is odd or even.

var eonumber = prompt("Now give me a new number");
if (eonumber % 2 == 0) {
	alert("This number is even.")
} else {
	alert("This number is odd.")
}

// Exercise 2.1.3 - Ask the user what month they were born in. Tell them what season that month is in.

var birthmonth = prompt("What month were you born in?");
if (birthmonth == "March" || birthmonth == "April" || birthmonth == "May") {
	alert("You were born in springtime! Birds are singing.")
} else if (birthmonth == "June" || birthmonth == "July" || birthmonth == "August") {
	alert("You were born in the summertime! Sunny days on the Charles river.")
} else if (birthmonth == "September" || birthmonth == "October" || birthmonth == "November") {
	alert ("You were born in the autumn! The leaves are turning.") 
} else {
	alert ("You were born in winter! Hot chocolate and sitting by the fire.")
}


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