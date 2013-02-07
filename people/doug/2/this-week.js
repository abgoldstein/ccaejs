// Exercise 1.review - Ask the user for their name. Welcome them with a personalized message.
var username = prompt("What is your name?");
alert("Thanks! Good to meet you, " + username + "!");

// 2.1 - Conditionals
// Exercise 2.1.1 - Ask the user for 2 numbers. Tell them if the first or second number was bigger.

var num1 = prompt("Enter first number");
var num2 = prompt("Enter second number");
if (num1 > num2) {
	alert("First number is bigger");
}else if (num1 < num2) {
	alert("Second number is bigger");
}else{
	alert("The numbers are the same");
}

// Exercise 2.1.2 - Ask the user for a number. Tell the user whether it is odd or even.
var num3 = prompt("Enter a number, I will check for odd or even");
if (num3%2 == 0) {
	alert("Number is even")
} else {
	alert("Number is odd")
}

// Exercise 2.1.3 - Ask the user what month they were born in. Tell them what season that month is in.
var birthmonth= prompt("What month number were you born in?");
if (birthmonth>=1 && birthmonth <=3){
	alert("You were born in the winter")
} else if (birthmonth>=4 && birthmonth <=6){
	alert("You were born in the spring")
} else if (birthmonth>=7 && birthmonth <=9){
	alert("You were born in the summer")
} else {
	alert("You were born in the winter")
}


// 2.2 - Loops
// Exercise 2.2.1 - Use a loop to count from 10 to 1. Alert each value as you count.
for (var i=10;i>=0;i--)
{
	alert(i)
}

// Exercise 2.2.2 - Use a loop to count from 10 to 20. Add each number to a total sum and alert that value at the end.
var sum=0;
for (var i=10;i<=20;i++)
{
	sum=sum+i;
	alert(sum);
}

// Exercise 2.2.3
// Generate a random number (I haven't told you how to do this. Try Googling for it)
// Ask the user to try to guess the number (Give them the possible range)
// Tell the user if they got the number or if they were too high or too low.
// Let the user continue guessing until they get to the right answer.
var myrandom=Math.random*10;
boolean notyet=true;
var myguess=0;
while (notyet==true){
	myguess=prompt("Enter a number between 0 and 10");
	if (myguess == myrandom){
		alert("You got it!");
		notyet=false;
	}
	else if (myguess > myrandom){
		alert("You are too high");
	}
	else{
		alert("You are too low");
	}
}


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