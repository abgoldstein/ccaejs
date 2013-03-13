// Exercise 3.1 - Functions
// Exercise 3.1.1 - Write a sum function. It should take an array of numbers and return the sum of them.

alert ( "Exercise 3.1.1" );

function SumIt( NumArray ) {
var RunningTotal = 0;
  for ( var Index in NumArray ) {
    RunningTotal += NumArray[ Index ];
  };
return RunningTotal;
};

alert( "The sum is " + SumIt( [ 1, 2, 3, 4, 5 ] ) + ".");

// Exercise 3.1.2 - What is the default return value of a function? Write some code to demonstrate your answer.
alert ( "Exercise 3.1.2" );

//Define an empty function
function DefaultReturnValue() {};
alert( "The default return value of a function is " + DefaultReturnValue() );

// Exercise 3.1.3 - Write the Caesar Cipher encrypt function.
// A Caesar cipher is a very basic style of encryption where all letters are shifted by a number of letters.
// For example, if the phrase is "Dog" and the cipher is 2, the encrypted message becomes "Fqi" because D->E->F, o->p->q, and g->h->i.
// Ask the user for a sentence and a cipher, then use your encrypting function and display your results.
//
// More details can be found here - http://en.wikipedia.org/wiki/Caesar_cipher
// I have excluded a bunch of information here. You'll probably need an ASCII chart, a way to get substrings, and to count characters.
// Try using the internet to fill in your missing toolset. I can help you if you get stuck.
alert ( "Exercise 3.1.3 Encrypt" );
//Warmups
var atoi_check = [ "A".charCodeAt(),"Z".charCodeAt(),"a".charCodeAt(),"z".charCodeAt() ];
alert( atoi_check );
var itoa_check = [ String.fromCharCode("A".charCodeAt()), String.fromCharCode("Z".charCodeAt()), String.fromCharCode("a".charCodeAt()), String.fromCharCode("z".charCodeAt()) ];
alert( itoa_check );

//Just encrypting letters because assuming Caesar used Roman not Arabic numerals. Don't know what he did for punctuation so leaving that out.

function Encode ( CharNum, Cipher, RangeLowest, RangeHighest ) {
 var ShftCharNum = CharNum + Cipher;
 if (( CharNum >= RangeLowest ) && ( CharNum <= RangeHighest )) {
      // If need to wrap to beginning of alphabet, do it
      if ( ShftCharNum > RangeHighest ) {
        return( RangeLowest + ( ShftCharNum - RangeHighest ) - 1 );
      } else { return( ShftCharNum ); };
    };
 //else the character is not in the range
 return( -1 );
};

function CC_Encrypt ( Sentence, CipherStr ) {
  var EncryptedSentence = "";
  var CharNum;
  var ENum;
  
  var EArray = Sentence.split("");
  var Cipher = parseInt( CipherStr );

  for ( i=0; i<Sentence.length; i++ ) {
    //Get the unicode value of the character
    CharNum = EArray[i].charCodeAt();
    
    Enum = Encode ( CharNum, Cipher, "A".charCodeAt(), "Z".charCodeAt() ); 
    if ( ENum > -1 ) { 
       //temp print-out for upper case
       alert( ENum + "Value" + String.fromCharCode( ENum ) );
       EncryptedSentence += String.fromCharCode( ENum );  
       continue;
    };

    // See if it's lower case;
    Enum = Encode ( CharNum, Cipher, "a".charCodeAt(), "z".charCodeAt() );
    if ( ENum  > -1 ) {
       //temp print-out for lower case
       alert( ENum + "Value" + String.fromCharCode( ENum ) );
       EncryptedSentence += String.fromCharCode( ENum );  

    }  //Else it's an Unrecognized Character.  Just going to substitute a dash.
    else { EncryptedSentence += String.fromCharCode( 45 )};
  };
  return EncryptedSentence;
};

var UserSentence = "";
var EncryptedSentence = "";
var UserCipherString = "";
var UserCipher = -1;

UserSentence = prompt( "What sentence do you want to encrypt?", "Your Sentence Here" );
UserCipherString = prompt( "What cipher do you want to use?", "Your Cipher Here" );
//Brittle, but assuming no leading spaces and ignore any following chars and see if can make it a num
UserCipher = UserCipherString;
EncryptedSentence = CC_Encrypt( UserSentence, UserCipher );
alert( "Your encrypted sentence is " + EncryptedSentence );


// The following abandoned for now - come back when get encrypt to work
// Exercises 3.1.4 - Write the Caesar Cipher decrypt function.
// Write a function to take an encrypted message and decrypt it with a given cipher. Show the user the decrypted message.

alert ( "Exercise 3.1.4 Decrypt" );

function Decode ( CharNum, Cipher, RangeLowest, RangeHighest ) {
 var ShftCharNum = CharNum - Cipher;
 if (( CharNum >= RangeLowest ) && ( CharNum <= RangeHighest )) {
      // If need to wrap to end of alphabet, do it
      if ( ShftCharNum < RangeLowest ) {
        return( RangeHighest - ( RangeLowest - ShftCharNum ) + 1 );
      } else { return( ShftCharNum ) };
    };
  //else the character is not in the range
  return( -1 );
};

function CC_Decrypt ( Sentence, CipherStr ) {
  var DecryptedSentence = "";
  var CharNum;
  var DNum;
  
  var Cipher = parseInt( CipherStr );
  var DArray = Sentence.split("");
  for ( i=0; i<Sentence.length; i++ ) {
    //Get the unicode value of the character
    CharNum = DArray[i].charCodeAt();
    DNum = Decode ( CharNum, Cipher, "A".charCodeAt(), "Z".charCodeAt())
    if (  DNum > -1 ) {
       //temp print-out
       alert( DNum );
       alert( String.fromCharCode( DNum ) );
       DecryptedSentence += String.fromCharCode( DNum ); 
       continue;
    };
    DNnum = Decode ( CharNum, Cipher, "a".charCodeAt(), "z".charCodeAt());
    if ( DNum > -1 ) {
       //temp print-out
       alert( DNum );
       alert( String.fromCharCode( DNum ) );
       DecryptedSentence += String.fromCharCode( DNum );  
    //Unrecognized Character.  Just going to substitute a dash.
    } else { DecryptedSentence += String.fromCharCode( 45 )};
  };
  return DecryptedSentence;
};

UserSentence = prompt( "What sentence do you want to decrypt?", "Your Sentence Here" );
UserCipherString = prompt( "What cipher was used?", "Your Cipher Here" );
//Brittle, but for here assume no leading character and ignore any following ones
UserCipherString = UserCipherString.substr(0,1);
alert (UserCipherString);
UserCipher = UserCipherString.charCodeAt();
alert( "Your decrypted sentence is " + CC_Decrypt( UserSentence, UserCipher ));


// Exercise 3.1.5 - Test it! Try encrypting a string and then sending it to a neighbor for decryption. How do you do?
alert ( "Exercise 3.1.5 Test it! Come Back And Do This" );