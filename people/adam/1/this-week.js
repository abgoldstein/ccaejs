// Exercise 1.1.1 - Fix me!
alert("Hello, World!");

// Exercise 1.1.2 - Alert anything else
alert("Anything else!");

// Exercise 1.2.1 - Create a new variable that is the sum of a and b. Alert it to the user.
var a = 10;
var b = 56;
var sum = a + b;
alert("The sum is: " + sum);


// Exercise 1.2.2 - Try joining these strings together with a +. Alert it to the user.
var message = "Hello";
var message2 = ", World!";
var joined = message + message2;
alert("The joined strings say: " + joined);


// Exercise 1.2.3 - Prompt allows you to get input from the user. Given the username, alert a personalized message.
var username = prompt("What is your name?");
alert("Thanks! Good to meet you, " + username + "!");


// Exercise 1.2.4 - Ask the user for their name. Then ask for their age. Alert a message back combining both values into a sentence.
username = prompt("What is your name?");
var age = prompt("How old are you?");
alert("Really, " + name + "? You hardly look a day over " + (age - Math.floor(age / 2)) + "!");