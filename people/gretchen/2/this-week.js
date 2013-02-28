// Exercise 1.review - Ask the user for their name. Welcome them with a personalized message.
var YourName = prompt( "Exercise 1.review  What is your name?", "Your Name Here" );
alert( "Welcome, " + YourName + " !" );
// 2.1 - Conditionals
// Exercise 2.1.1 - Ask the user for 2 numbers. Tell them if the first or second number was bigger.
var num1 = prompt( "Exercise 2.1.1  Please enter a number", "Your First Number Here" );
var num2 = prompt( "Now enter a second number", "Your Second Number Here" );
if ( num1 > num2 ) {
	alert( "First number is greater." ); 
  }
else if ( num2 > num1 ) {
		alert( "Second number is greater." );
    }
	  else { alert( "They're equal" );
    };

// Exercise 2.1.2 - Ask the user for a number. Tell the user whether it is odd or even.
var num3 = prompt( "Exercise 2.1.2  OK, enter another number to see if it's even or odd ", "Your Number Here" );
if ( num3 % 2 == 0 ) {
   alert( "Your number is even." ); 
   }
else { 
   alert( "Your number is odd." ); 
   };
 
// 2.2 - Loops
// Exercise 2.2.1 - Use a loop to count from 10 to 1. Alert each value as you count.
alert( "Exercise 2.2.1  Countdown" );
for ( var i=10; i>0; i-- ) {	
   alert( i ); 
 };
alert( "Ignition" );

// Exercise 2.2.2 - Use a loop to count from 10 to 20. Add each number to a total sum and alert that value at the end.
var GrandTotal = 0;
for ( var i=10; i<21; i++ ) {
   GrandTotal += i;
   };
alert( "Exercise 2.2.2  The total sum is " + GrandTotal + ".");

// Exercise 2.2.3
// Generate a random number (I haven't told you how to do this. Try Googling for it)
// Ask the user to try to guess the number (Give them the possible range)
// Tell the user if they got the number or if they were too high or too low.
// Let the user continue guessing until they get to the right answer.
var RandomNumber = Math.floor( 1 + Math.random()*10 );
var UserGuess = 0;
UserGuess = prompt( "Exercise 2.2.3  Guess a number 1 to 10.", "Your Number Here" );
while ( UserGuess != RandomNumber ) {
	if ( UserGuess < RandomNumber ) {
		   UserGuess = prompt( "Your number is too low.  Try again!", "Your Number Here" );
       }
  else if ( UserGuess > RandomNumber ) {
	     UserGuess = prompt( "Your number is too high.  Try again!", "Your Number Here" );
        };
};
alert( "Great, you got it!" );

// 2.3 - Arrays
// Create an array of usernames. They can be anything.
// Ask the user for their name. Check to see if that name is on the list.
// If the user is on the list, welcome them in. Otherwise, tell them to leave!
// Bonus: Now that this is working, try Googling for an easier way to do this.
alert( "Exercise 2.3" );
var UserNames = [ "Washington", "Adams", "Jefferson", "Lincoln", "Johnson" ];
var ThisUserName = "";
ThisUserName = prompt( "Hi! What's your name?", "Your Name Here" );
Found = false;
for ( var Index in UserNames ) {
  if ( UserNames[ Index ] == ThisUserName ) {
	  alert( "Welcome! " + ThisUserName );
    Found = true;
    break;
    }
};
if (!Found) {
  alert( ThisUserName + " wasn't found.  To use this site, you need to set up an account." );
};

// BACK TO THE BONUS QUESTION
alert( "Exercise 2.3 Alternative" );
var AnotherUserName = "";
AnotherUserName = prompt( "Hi! What's your name?", "Your Name Here" );
if ( UserNames.indexOf[ AnotherUserName ] == -1 ) {
  alert( AnotherUserName + " wasn't found.  To use this site, you need to set up an account." );
}
else { alert( "Welcome! " + AnotherUserName );
};

// Exercise 2.3.2
// Generate 10 random numbers and show them all to the user.
// Ask the user for the index of the biggest number. Tell them whether or not they were right.
alert( "Exercise 2.3.2" );
var RandomArray = [ -1,-1,-1,-1,-1,-1,-1,-1,-1,-1 ];
var LargestNumber = 0;
var LargestIndex = -1;
var UserIndex = -1;

for( var i=0; i<=9; i++ ) {
  RandomArray[ i ] = Math.floor( 1+Math.random()*10 );
  if ( RandomArray[ i ] > LargestNumber ) {
    LargestNumber = RandomArray[ i ];
    LargestIndex = i;
  };
};

UserIndex = prompt( " What's the index of the largest number in this array?", "Your Number From 0 to 9 Here" );
//There may be duplicates of the largest number, so can't just compare the locations
if( RandomArray[ UserIndex ] == LargestNumber ) {
  alert( "That's right! The largest number is " + LargestNumber + "." );
  alert( RandomArray );
}
else { 
  alert( "Sorry, The largest number is " + LargestNumber + ". It's first seen at position " + LargestIndex + "." );
  alert( RandomArray );
};

// Exercise 2.3.3 - Modify your code from exercise 2.2.3 to allow the user to replay.
// Add a scoreboard array to keep track of how many guesses it took them to win.
// Show the user the scoreboard each time and congratulate them if they beat their best.
alert( "Exercise 2.3.3" );
var KeepPlaying = "Y";
while ( KeepPlaying == "Y" || KeepPlaying == "y" ) {
// fill up the array
  for( var i=0; i<=9; i++ ) {
  RandomArray[ i ] = Math.floor( 1+Math.random()*10 );
  if ( RandomArray[ i ] > LargestNumber ) {
    LargestNumber = RandomArray[ i ];
    LargestIndex = i;
    };
  };
  KeepPlaying = prompt( "Want to keep playing?", "Y or N?" );
}