// Exercise 1.review - Ask the user for their name. Welcome them with a personalized message.


// 2.1 - Conditionals
// Exercise 2.1.1 - Ask the user for 2 numbers. Tell them if the first or second number was bigger.
/*
var1 = prompt("Please enter a number");
var2 = prompt("Please enter a different number");

if (var1 > var2) {
	alert("The first number was greater");	
}
else if (var1 == var2) {
	alert("The numbers are the same")
}
else {
	alert("The second number was greater");
}


// Exercise 2.1.2 - Ask the user for a number. Tell the user whether it is odd or even.
var3 = prompt("Please enter a number");

if (var3%2 == 0) {
	alert("Your Number was even");
}
else if (var3%2 == 1){
	alert("Your number was odd");
}
else {
	alert("Invalid input");
}



// Exercise 2.1.3 - Ask the user what month they were born in. Tell them what season that month is in.
month = prompt("What month were you born in? Please enter in uppercase.");
//make month into uppercase
// not sure how yet
//month = toUpperCase(month);

if (month in ("DECEMBER", "JANUARY", "FEBRUARY", "MARCH")) {
	alert ("You were born in the winter.");
}
else if (month in ("APRIL", 'MAY', "JUNE") ) {
	alert("You were born in the spring.");
}
else if (month in ("JULY", "AUGUST")) {
	alert("You were born in the summer.")
}
else if (month in ("SEPTEMBER", 'OCTOBER', "NOVEMBER")) {
	alert("You were born in the fall");
}
else {
	alert('This month was not recognized');
}



// 2.2 - Loops
// Exercise 2.2.1 - Use a loop to count from 10 to 1. Alert each value as you count.
var i = 1

for(; i <= 10; i++)
	{alert(i); }
	//the alert happens before the increment


// Exercise 2.2.2 - Use a loop to count from 10 to 20. Add each number to a total sum and alert that value at the end.
sum = 0
for(i = 10; i < 20; i++)
	sum += i;
alert("The sum is " + sum);



// Exercise 2.2.3
// Generate a random number (I haven't told you how to do this. Try Googling for it)
// Ask the user to try to guess the number (Give them the possible range)
// Tell the user if they got the number or if they were too high or too low.
// Let the user continue guessing until they get to the right answer.

var randomNumber=Math.floor(Math.random()*11)

while (true)
	{	
	userGuess = prompt("Guess a number from 0 to 10");
	if (userGuess < randomNumber)
		alert("Your number was  too low. Please guess again");
	else if (userGuess > randomNumber) 
		{alert("Your number was  too high. Please guess again");}
	else if (userGuess = randomNumber)
		{alert("You are correct!");
		break;
		}
	else alert("Invalid input");
	}

*/

// 2.3 - Arrays
// Create an array of usernames. They can be anything.
// Ask the user for their name. Check to see if that name is on the list.
// If the user is on the list, welcome them in. Otherwise, tell them to leave!
// Bonus: Now that this is working, try Googling for an easier way to do this.

var validUsers = ['Lassie', 'Spike', 'Chuckles']
potentialUser = prompt("Please enter your name.")
var success = 'N'


for (var index in validUsers)
	{if (potentialUser ==  validUsers[index])
		{
		alert('Welcome ' + potentialUser);
		success = 'Y';
		break
	};	
	}

//alert(success);
if (success ==='N')
	alert("You are not authorized");



// Exercise 2.3.2
// Generate 10 random numbers and show them all to the user.
// Ask the user for the index of the biggest number. Tell them whether or not they were right.


// Exercise 2.3.3 - Modify your code from exercise 2.2.3 to allow the user to replay.
// Add a scoreboard array to keep track of how many guesses it took them to win.
// Show the user the scoreboard each time and congratulate them if they beat their best.