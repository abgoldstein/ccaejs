// Exercise 3.1 - Functions
// Exercise 3.1.1 - Write a sum function. It should take an array of numbers and return the sum of them.
function sum(numberarray) {
var currentSum = 0;
// For each loops
for (var index in numberarray){
currentSum = currentSum + numberarray[index];
}
return currentSum;
}


// Exercise 3.1.2 - What is the default return value of a function? Write some code to demonstrate your answer.


// Exercise 3.1.3 - Write the Caesar Cipher encrypt function.
// A Caesar cipher is a very basic style of encryption where all letters are shifted by a number of letters.
// For example, if the phrase is "Dog" and the cipher is 2, the encrypted message becomes "Fqi" because D->E->F, o->p->q, and g->h->i.
// Ask the user for a sentence and a cipher, then use your encrypting function and display your results.
//
// More details can be found here - http://en.wikipedia.org/wiki/Caesar_cipher
// I have excluded a bunch of information here. You'll probably need an ASCII chart, a way to get substrings, and to count characters.
// Try using the internet to fill in your missing toolset. I can help you if you get stuck.
function caesarCipher(shiftAmount, message)

var messageArray = message.split(' ');
var newMessage

for (var index in messageArray){
	var wordLength = messageArray(index).length
	if (index <> 0)
		//add a space if this is not the first word
		{newMesssage = ' ';}
	for (var letterPos = 0; letterPos < wordLength; letterPos++)
	{currentLetter = messageArray[index].charAt(letterPos);
	//change it with the Caesar cipher
	//** ADD CODE HERE
	//build the new message up
	newMessage = newMessage + encryptedLetter;
	}
}



// Exercises 3.1.4 - Write the Caesar Cipher decrypt function.
// Write a function to take an encrypted message and decrypt it with a given cipher. Show the user the decrypted message.


// Exercise 3.1.5 - Test it! Try encrypting a string and then sending it to a neighbor for decryption. How do you do?messageArray 