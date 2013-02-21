// Exercise 1.review - Ask the user for their name. Welcome them with a personalized message.
// Exercise 1.review - Ask the user for their name. Welcome them with a personalized message.
var name = prompt("What is your name?");
alert("Welcome," + name );
// 2.1 - Conditionals
// Exercise 2.1.1 - Ask the user for 2 numbers. Tell them if the first or second number was bigger.
var num1 = prompt("Please give me a number");
var num2 = prompt("Please give me a second number");
if (num1 > num2) {
	alert("First number is greater"); }
	else if (num2 > num1) {
		alert ("Second number is greater");}
	else { alert ("They're equal");}

// Exercise 2.1.2 - Ask the user for a number. Tell the user whether it is odd or even.
var num3 = prompt("Please give me a number");
if (num3 % 2 == 0) {
   alert ("Your number is even"); }
else { 
   alert("Your number is odd"); }
 

// 2.2 - Loops
// Exercise 2.2.1 - Use a loop to count from 10 to 1. Alert each value as you count.
for (var i=10; i>0; i-- ) {	
   alert( i );}


// Exercise 2.2.2 - Use a loop to count from 10 to 20. Add each number to a total sum and alert that value at the end.
var GrandTotal = 0;
for (var i=10; i<21; i++ ) {
   GrandTotal += i;
   }
alert("The total sum is" + GrandTotal);

// Exercise 2.2.3
// Generate a random number (I haven't told you how to do this. Try Googling for it)
// Ask the user to try to guess the number (Give them the possible range)
// Tell the user if they got the number or if they were too high or too low.
// Let the user continue guessing until they get to the right answer.

var RandomNumber = Math.floor ( Math.random () * 11 );
var UserGuess = 0;
prompt ( "Guess a number between 1 and 10", UserGuess );
while ( UserGuess != RandomNumber ) 
	if ( UserGuess < RandomNumber ) {
		prompt ( "Your number is too low.  Try again!", UserGuess );
        }
    else if ( UserGuess > RandomNumber ) {
	    prompt ( "Your number is too high.  Try again!", UserGuess );
        };
alert ("Great, you got it! );

// 2.3 - Arrays
// Create an array of usernames. They can be anything.
// Ask the user for their name. Check to see if that name is on the list.
// If the user is on the list, welcome them in. Otherwise, tell them to leave!
// Bonus: Now that this is working, try Googling for an easier way to do this.
var UserNames = ["Washington", "Adams", "Jefferson", "Lincoln", "Johnson"];
var ThisUserName = "";
prompt( "Hi! What's your name?", ThisUserName );
for ( var Index in UserNames ) {
  if ( UserNames[Index] == ThisUserName ) {
	alert( "Welcome!");
    }
	else {
	alert( "User Name Not Found" );
   };
}

// COME BACK TO THE GOOGLE

// Exercise 2.3.2
// Generate 10 random numbers and show them all to the user.
// Ask the user for the index of the biggest number. Tell them whether or not they were right.


// Exercise 2.3.3 - Modify your code from exercise 2.2.3 to allow the user to replay.
// Add a scoreboard array to keep track of how many guesses it took them to win.
// Show the user the scoreboard each time and congratulate them if they beat their best.