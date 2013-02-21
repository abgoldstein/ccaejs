// Exercise 3.1 - Functions
// Exercise 3.1.1 - Write a sum function. It should take an array of numbers and return the sum of them.
//Exercise 3.1.1 - Write a sum function. It should take an array of numbers and return the sum of them.
function sum(myNumbers)
{
	var total = 0;
	for (i=0; i<myNumbers.length; i++)
         total += myNumbers[i];
	return total;
}
var myNumbers = new Array(1, 2, 3, 4, 5);
alert( "The sum of these numbers is " + sum(myNumbers) );


// Exercise 3.1.2 - What is the default return value of a function? Write some code to demonstrate your answer.
function noReturnValue()
{
	var x=5;
}
alert( "The default return value of a function is " + noReturnValue() );


// Exercise 3.1.3 - Write the Caesar Cipher encrypt function.
// A Caesar cipher is a very basic style of encryption where all letters are shifted by a number of letters.
// For example, if the phrase is "Dog" and the cipher is 2, the encrypted message becomes "Fqi" because D->E->F, o->p->q, and g->h->i.
// Ask the user for a sentence and a cipher, then use your encrypting function and display your results.
//
// More details can be found here - http://en.wikipedia.org/wiki/Caesar_cipher
// I have excluded a bunch of information here. You'll probably need an ASCII chart, a way to get substrings, and to count characters.
// Try using the internet to fill in your missing toolset. I can help you if you get stuck.
var EncryptArray = [['A',0],['B',1],['C',2],['D',3],['E',4],['F',5],['G',6],['H',7],['I',8],['J',9],['K',10],['L',11],
	['M',12],['N',13],['O',14],['P',15],['Q',16],['R',17],['S',18],['T',19],['U',20],['V',21],['W',22],['X',23],['Y',24],['Z',25]];
var matchFound = "NO";
var encryptNum = 0;
var tempResult = 0;
var encryptResult = 0;
var convertedText = [];
var textToEncrypt = prompt("Please enter text to encode: ");
var key = prompt("Please enter key for encoding: ");
var uppercaseToEncrypt = textToEncrypt.toUpperCase();
ccEncrypt(uppercaseToEncrypt);

function ccEncrypt(uppercaseToEncrypt)
{	//First convert character to upper case and then loop through toEncryptArray to find matching character number
	for(i=0; i<textToEncrypt.length; i++)  //for each character in input text
	{
		for(j=0; j<EncryptArray.length; j++)  //loop through toEncryptArray and find numeric match
		{
			if (uppercaseToEncrypt.charAt(i) == EncryptArray[j][0])
			{	
				tempResult = (EncryptArray[j][1]);
				matchFound = "YES";
				break;
			}
		}
		
		//Only handling A-Z.  If a number or other character is in the code I set it to 0.
		if (matchFound == "NO")
			tempResult = 0;
		else
			matchFound = "NO";
				
		//This formula does the actual encryption on a number by number basis:
		encryptNum = tempResult + parseInt(key,10);
			
		//decrypt the result on a number by number basis:
		var result = ccDecrypt(encryptNum);

		//save result in convertedText
		convertedText.push(result);
	}
	convertedText=convertedText.join("");
	alert("convertedText is " + convertedText);
}


// Exercises 3.1.4 - Write the Caesar Cipher decrypt function.
// Write a function to take an encrypted message and decrypt it with a given cipher. Show the user the decrypted message.
function ccDecrypt(numToDecrypt)
{	
	//decrypt the result on a number by number basis:
	for(j=0; j<EncryptArray.length; j++) 
	{
		if (numToDecrypt == EncryptArray[j][1])
		{
			var result = EncryptArray[j][0];
			break;
		}
	}

	return result;
}


// Exercise 3.1.5 - Test it! Try encrypting a string and then sending it to a neighbor for decryption. How do you do?
