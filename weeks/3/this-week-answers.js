document.write("<pre>");

// Exercise 3.1 - Functions
// Exercise 3.1.1 - Write a sum function. It should take an array of numbers and return the sum of them.
function sum(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++)
    sum += numbers[i];

  return sum;
}

var numbers = [1, 5, 9, 20];
var total = sum(numbers);
if (total == 35)
  document.writeln("Sum function works!");

// Exercise 3.1.2 - What is the default return value of a function? Write some code to demonstrate your answer.
function arbitraryFunction() {
  var x = 0;
}
var defaultReturnValue = arbitraryFunction();
document.writeln("The default return value of a function is " + defaultReturnValue);

// Exercise 3.1.3 - Write the Caesar Cipher encrypt function.
// A Caesar cipher is a very basic style of encryption where all letters are shifted by a number of letters.
// For example, if the phrase is "Dog" and the cipher is 2, the encrypted message becomes "Fqi" because D->E->F, o->p->q, and g->h->i.
// Ask the user for a sentence and a cipher, then use your encrypting function and display your results.
//
// More details can be found here - http://en.wikipedia.org/wiki/Caesar_cipher
// I have excluded a bunch of information here. You'll probably need an ASCII chart, a way to get substrings, and to count characters.
// Try using the internet to fill in your missing toolset. I can help you if you get stuck.
function encrypt(message, cipher) {
  var letters = message.split("");
  var encryptedMessage = "";

  for (var i = 0; i < message.length; i++) { 
    var letter = letters[i];
    var encryptedLetter = cipherize(letter, cipher);
    encryptedMessage += encryptedLetter;
  }

  return encryptedMessage;
}

function cipherize(letter, cipher) {
  var asciiCode = letter.charCodeAt(0);
  asciiCode += parseInt(cipher);

  // 32 - 126 are human readable ACSII values
  if (asciiCode < 32)
    asciiCode = 126 - (asciiCode % 32);
  else if (asciiCode > 126)
    asciiCode = 32 + (asciiCode % 126);

  letter = String.fromCharCode(asciiCode);
  return letter;
}

var cipher = prompt("What cipher do you want to use to encrypt a message?");
var message = prompt("Please enter a message to be encrypted");
encryptedMessage = encrypt(message, cipher);
document.writeln("Encrypted, \"" + message + "\" turns into \"" + encryptedMessage + "\"");

// Exercises 3.1.4 - Write the Caesar Cipher decrypt function.
// Write a function to take an encrypted message and decrypt it with a given cipher. Show the user the decrypted message.
function decrypt(secret, cipher) {
  var letters = message.split("");
  var decryptedMessage = "";

  for (var i = 0; i < message.length; i++) { 
    var letter = letters[i];
    var decryptedLetter = cipherize(letter, cipher * -1);
    decryptedMessage += decryptedLetter;
  }

  return decryptedMessage;
}

document.writeln("Let's see if we can decrypt \"" + encryptedMessage + "\" back into regular text");
var decryptedMessage = decrypt(encryptedMessage, cipher);
document.writeln("Was the original message \"" + decryptedMessage + "\"?");

// Exercise 3.1.5 - Test it! Try encrypting a string and then sending it to a neighbor for decryption. How do you do?

document.write("</pre>");