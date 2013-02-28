document.write('<pre>');


// Exercise 1.1.1 - Fix me!
//document.write(Hello, World!);
document.writeln("Hello, World!");

// Exercise 1.1.2 - Alert anything else
document.writeln("anything else");

// Exercise 1.2.1 - Create a new variable that is the sum of a and b. Alert it to the user.
var a = 10;
var b = 56;
var sum = a + b;
document.writeln("The sum of a and b is " + sum);

// Exercise 1.2.2 - Try joining these strings together with a +. Alert it to the user.
var message = "Hello";
var message2 = ", World!";
document.writeln(message + message2);


// Exercise 1.2.3 - Prompt allows you to get input from the user. Given the username, alert a personalized message.
var username = prompt("What is your name?");
document.writeln("Welcome, " + username);


// Exercise 1.2.4 - Ask the user for their name. Then ask for their age. Alert a message back combining both values into a sentence.
var age = prompt("What is your age?");
var youngerAge = Math.floor(age / 2);
document.writeln(age + "!? " + username + ", you hardly look a day above " + youngerAge);



document.write('</pre>');