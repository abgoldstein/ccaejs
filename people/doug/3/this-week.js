// Exercise 3.1 - Functions
// Exercise 3.1.1 - Write a sum function. It should take an array of numbers and return the sum of them.

function mySummer(myArray){

	var mySum=0;
	var numInArray=myArray.length;
	for (var i=0; i<numInArray; i++){
		console.log("i index = " + i);
		//console.log("myArray[i] = " + myArray[i]);
		mySum+=myArray[i];
		console.log("mySum is now = " + mySum);
	}

	return mySum;

}

var testVals = [2,4,6,8,10];

var whatsSum = mySummer(testVals);

alert("Sum of the values is " + whatsSum);


// Exercise 3.1.2 - What is the default return value of a function? Write some code to demonstrate your answer.
function dummyReturn(){
}

var myDummy=dummyReturn();

if (typeof myDummy==null){
	alert("The default return value is null");
}
else{
	alert("The default return value is " + typeof(myDummy));
}




// Exercise 3.1.3 - Write the Caesar Cipher encrypt function.
// A Caesar cipher is a very basic style of encryption where all letters are shifted by a number of letters.
// For example, if the phrase is "Dog" and the cipher is 2, the encrypted message becomes "Fqi" because D->E->F, o->p->q, and g->h->i.
// Ask the user for a sentence and a cipher, then use your encrypting function and display your results.
//
// More details can be found here - http://en.wikipedia.org/wiki/Caesar_cipher
// I have excluded a bunch of information here. You'll probably need an ASCII chart, a way to get substrings, and to count characters.
// Try using the internet to fill in your missing toolset. I can help you if you get stuck.


var testChar = "a";

var myCharAt = testChar.charAt(0);
console.log("myCharAt is " + myCharAt);

var newVal = testChar.charAt(0)-"a";
console.log("newVal is " + newVal);





// Exercises 3.1.4 - Write the Caesar Cipher decrypt function.
// Write a function to take an encrypted message and decrypt it with a given cipher. Show the user the decrypted message.


// Exercise 3.1.5 - Test it! Try encrypting a string and then sending it to a neighbor for decryption. How do you do?