// Exercise 1.1.1 - Fix me!
alert( "Exercise 1.1.1  Hello, World!" );

// Exercise 1.1.2 - Alert anything else

alert( "Exercise 1.1.2  Here's a second alert." );

// Exercise 1.2.1 - Create a new variable that is the sum of a and b. Alert it to the user.
var a = 10;
var b = 56;
var c = a + b;
alert( "Exercise 1.2.1 C= " + c );

// Exercise 1.2.2 - Try joining these strings together with a +. Alert it to the user.
var message = "Hello";
var message2 = ", World!";
alert( "Exercise 1.2.2 Concatenate Strings: " + message + message2 );

// Exercise 1.2.3 - Prompt allows you to get input from the user. Given the username, alert a personalized message.
// username = prompt("What is your name?");

var UserName;
UserName = prompt( "Exercise 1.2.3  What is your name?", "Your Name Here" );
alert( "Welcome, " + UserName + "!" );

// Exercise 1.2.4 - Ask the user for their name. Then ask for their age. Alert a message back combining both values into a sentence.

var UserName; var UserAge;
UserName = prompt( "Exercise 1.2.4  What is your name?", "Your Name Here" );
UserAge = prompt( "What is your age?", "Enter a Number Here" );
if ( UserAge >= 18 ) {
   alert( "Congratulations, " + UserName + "! At " + UserAge + " you've reached voting age!" );
}
else {
   var YearsTilVotingAge = 18 - UserAge;
   if ( UserAge == 17 ) {
   alert( "Great, " + UserName + "! In " + YearsTilVotingAge + " year you'll be able to vote!" );
   }
   else { 
	alert( "Great, " + UserName + "! In " + YearsTilVotingAge + " years you'll be able to vote!" );
}};
