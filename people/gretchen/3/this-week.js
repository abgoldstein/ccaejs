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

alert( "The sum is " + SumIt( [1, 2, 3, 4, 5 ] ) + ".");

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
alert ( "Exercise 3.1.3 Come Back To This Sad Little Mess.  At least it parses." );
//Warmups
var atoi_check = [ "A".charCodeAt(),"Z".charCodeAt(),"a".charCodeAt(),"z".charCodeAt() ];
alert( atoi_check );
var itoa_check = [ String.fromCharCode("A".charCodeAt()), String.fromCharCode("Z".charCodeAt()), String.fromCharCode("a".charCodeAt()), String.fromCharCode("z".charCodeAt()) ];
alert( itoa_check );

function CC_Encrypt ( Sentence, Cipher ) {
  var EncryptedSentence = [];
  var ENum;
  var CipherWrap;
  //setup ascii variables for bounds checking
  var UpperCaseLowest ="A".charCodeAt();
  var UpperCaseHighest ="Z".charCodeAt();
  var LowerCaseLowest ="a".charCodeAt();
  var LowerCaseHighest ="z".charCodeAt();

  for ( var EIndex in Sentence ) {
  	//for now show what came in
  	alert( Sentence [ EIndex ] );
   
    //Get the ascii value of the character
    ENum = Sentence[EIndex].charCodeAt();
  //for now show what looked up
    alert( ENum );

    if ( ENum < UpperCaseLowest || ENum > LowerCaseHighest || ( ENum > UpperCaseHighest && ENum < LowerCaseLowest )) {
      alert( "Unrecognized Character.  Just going to substitute a dash for this exercise." );
      EncryptedSentence[EIndex]="-";
    }
    else {
      //Is it upper case and in the wrap range?  These clauses depend on relative order of uc and lc in ascii table 
      if ( ENum <= UpperCaseHighest && ENum > ( UpperCaseHighest - Cipher )) {
        CipherWrap = UpperCaseHighest - ENum;
        ENum = UpperCaseLowest + CipherWrap;
        EncryptedSentence[EIndex] = String.fromCharCode( ENum );
      }

      else {
         //Is it lower case and in the wrap range?  These clauses depend on relative order of uc and lc in ascii table 
         if ( ENum <= LowerCaseHighest && ENum > ( LowerCaseHighest - Cipher )) {
           CipherWrap = LowerCaseHighest - ENum;
           ENum = LowerCaseLowest + CipherWrap;
           EncryptedSentence[EIndex] = String.fromCharCode( ENum );
         } 
         else {
           //It's either upper or lower case but no wrap is needed
           Enum = ENum + Cipher;
           EncryptedSentence[EIndex] = String.fromCharCode(ENum);
         };
      };
    };
  };
  return EncryptedSentence;
};

var UserSentence = "";
var UserCipher = 0;
UserSentence = prompt( "What sentence do you want to encrypt?", "Your Sentence Here" );
UserCipher = prompt( "What cipher do you want to use?", "Your Cipher Here" );
alert( "Your encrypted sentence is " + CC_Encrypt( UserSentence, UserCipher ));


// Exercises 3.1.4 - Write the Caesar Cipher decrypt function.
// Write a function to take an encrypted message and decrypt it with a given cipher. Show the user the decrypted message.

alert ( "Exercise 3.1.4 Come Back To This Sad Little Mess.  At least it parses." );
function CC_Decrypt ( Sentence, Cipher ) {
  var DecryptedSentence = [];
  var DNum;
  var CipherWrap;
  //setup ascii variables for bounds checking
  var UpperCaseLowest ="A".charCodeAt();
  var UpperCaseHighest ="Z".charCodeAt();
  var LowerCaseLowest ="a".charCodeAt();
  var LowerCaseHighest ="z".charCodeAt();

  for (var DIndex in Sentence ) {
   
    //Get the ascii value of the character
    DNum = Sentence[DIndex].charCodeAt();

    if ( DNum < UpperCaseLowest || DNum > LowerCaseHighest || ( DNum > UpperCaseHighest && DNum < LowerCaseLowest)) {
      alert( "Unrecognized Character.  Just going to substitute a dash for this exercise." );
      DecryptedSentence[DIndex]="-";
    }
    else {
      //Is it lower case and in the wrap range?  These clauses depend on relative order of uc and lc in ascii table 
      if ( DNum >= LowerCaseLowest && DNum < ( LowerCaseLowest + Cipher  )) {
        CipherWrap = DNum - LowerCaseLowest;
        DNum = LowerCaseHighest - Cipher - CipherWrap + 1;
        DecryptedSentence[DIndex] = String.fromCharCode( DNum );
      }

      else {
         //Is it upper case and in the wrap range?  These clauses depend on relative order of uc and lc in ascii table 
         if ( DNum >= UpperCaseLowest && DNum < ( UpperCaseLowest + Cipher )) {
          CipherWrap = DNum - UpperCaseLowest;
          DNum = UpperCaseHighest - Cipher - CipherWrap + 1;
          DecryptedSentence[DIndex] = String.fromCharCode( DNum );
         } 
         else {
           //It's either upper or lower case but no wrap is needed
           DNum = DNum - Cipher;
           DecryptedSentence[DIndex] = String.fromCharCode( DNum );
         };
      };
    };
  };
  return DecryptedSentence;
};

UserSentence = prompt( "What sentence do you want to decrypt?", "Your Sentence Here" );
UserCipher = prompt( "What cipher was used?", "Your Cipher Here" );
alert( "Your decrypted sentence is " + CC_Decrypt( UserSentence, UserCipher ));


// Exercise 3.1.5 - Test it! Try encrypting a string and then sending it to a neighbor for decryption. How do you do?
alert ( "Exercise 3.1.5 Test it! Come Back And Do This" );