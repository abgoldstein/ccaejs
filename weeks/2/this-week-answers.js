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
var birthMonth = prompt("In what month were you born?");
birthMonth = birthMonth.toLowerCase();
if (birthMonth == "december" || birthMonth == "january" || birthMonth == "february")
  document.writeln("Winter! Snowtime.");
else if (birthMonth == "march" || birthMonth == "april" || birthMonth == "may")
  document.writeln("Spring! Flowertime!");
else if (birthMonth == "june" || birthMonth == "july" || birthMonth == "august")
  document.writeln("Summer! Beachtime.");
else if (birthMonth == "september" || birthMonth == "october" || birthMonth == "november")
  document.writeln("Fall! Sweatertime.");
else
  document.writeln("What month is that?");

// 2.2 - Loops
// Exercise 2.2.1 - Use a loop to count from 10 to 1. Alert each value as you count.
for (var i = 10; i > 0; i--) {
  document.writeln("The value of i is " + i);
}

// Exercise 2.2.2 - Use a loop to count from 10 to 20. Add each number to a total sum and alert that value at the end.
var sum = 0;
for (var i = 10; i <= 20; i++) {
  sum += i;
  document.writeln("The sum so far is " + sum);
}

// Exercise 2.2.3
// Generate a random number (I haven't told you how to do this. Try Googling for it)
// Ask the user to try to guess the number (Give them the possible range)
// Tell the user if they got the number or if they were too high or too low.
// Let the user continue guessing until they get to the right answer.
var randomNumber = Math.floor(Math.random() * 100 + 1);
alert(randomNumber);
var notGuessedYet = true;

while (notGuessedYet) {
  var guess = prompt("Guess a number between 1 and 100");

  if (guess < randomNumber)
    document.writeln("Too low.");
  else if (guess > randomNumber)
    document.writeln("Too high.");
  else if (randomNumber == guess) {
    document.writeln("You got it!")
    notGuessedYet = false;
  }  
}

// 2.3 - Arrays
// Create an array of usernames. They can be anything.
// Ask the user for their name. Check to see if that name is on the list.
// If the user is on the list, welcome them in. Otherwise, tell them to leave!
// Bonus: Now that this is working, try Googling for an easier way to do this.
var names = ["Adam", "Meghan", "Charley", "Scarlet"];
var username = prompt("Please enter your username");

if (names.indexOf(username) != -1)
  document.writeln("Welcome in!");
else
  document.writeln("You're not on the list.");

// Exercise 2.3.2
// Generate 10 random numbers and show them all to the user.
// Ask the user for the index of the biggest number. Tell them whether or not they were right.
var randomNumbers = [];
var highestSoFar = 0;
var indexOfHighest = 0;

for (var i = 0; i < 10; i++) {
  var newNumber = Math.floor(Math.random() * 100 + 1);
  randomNumbers.push(newNumber);

  if (newNumber > highestSoFar) {
    highestSoFar = newNumber;
    indexOfHighest = i;
  }
}

document.writeln("Numbers: " + randomNumbers.join(", "));
var guess = prompt("Which of these numbers is the biggest?");
if (guess == indexOfHighest)
  document.writeln("Yup, that's right! " + randomNumbers[indexOfHighest] + " is biggest");
else
  document.writeln("Nope, it's the number at index " + indexOfHighest + " - " + highestSoFar);

// Exercise 2.3.3 - Modify your code from exercise 2.2.3 to allow the user to replay.
// Add a scoreboard array to keep track of how many guesses it took them to win.
// Show the user the scoreboard each time and congratulate them if they beat their best.
var scoreBoard = [];
var keepPlaying = true;
while (keepPlaying) {
  var randomNumber = Math.floor(Math.random() * 100 + 1);
  alert(randomNumber);
  var numberOfGuesses = 0;
  var notGuessedYet = true;

  while (notGuessedYet) {
    var guess = prompt("Guess a number between 1 and 100");

    if (guess < randomNumber)
      document.writeln("Too low.");
    else if (guess > randomNumber)
      document.writeln("Too high.");
    else if (randomNumber == guess) {
      document.writeln("You got it!")  
      notGuessedYet = false;
    }

    numberOfGuesses++;
  }

  document.writeln("Thanks for playing! It took you " + numberOfGuesses);
  scoreBoard.push(numberOfGuesses);
  document.writeln("Here are all of your scores so far: " + scoreBoard.join(", "));

  var wantToContinue = prompt("Do you want to play again? (Y)es | (N)o");
  wantToContinue = wantToContinue.toLowerCase();
  if (wantToContinue == "n")
    keepPlaying = false;
}