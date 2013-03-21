document.write("<pre>");
var i; var j; //useful vars

// Exercises 7 - Data Structures
// Exercises 7.1 - Multidimensional Arrays
//
// Exercise 7.1.1 - Below is a two dimensional array of names from the class. Print out the second value of the third row.
var namesByRow = [
  ["Doug", "David"],
  ["Cassandra", "Shelby", "Emily"],
  ["Rada", "Sara", "Gretchen"]
];
 
document.writeln ( "Exercise 7.1.1 Row 3 Value 2 is " + namesByRow[2][1] );


// Exercise 7.1.2 - Below is a list of players' scores for pinball. Who has played the most times?
document.writeln( "Exercise 7.1.2" );
var scores = [
  [57, 28, 30, 49],
  [12, 42, 60],
  [19, 22, 88, 27]
];

var PlaysPerPlayer = [0,0,0];
var MaxPlays = 0;
//There may be a tie, so first go through the score array to record how many each played and the max number played.
for ( i = 0; i < scores.length; i++ ) {
  PlaysPerPlayer[i] = scores[i].length;
  if ( PlaysPerPlayer[i] > MaxPlays ) {
      MaxPlays = scores[i].length;
  };
};

var PlayerIndex = -1;
//Then output everyone who played the max number
for ( i = 0; i < scores.length; i++ ) {
  if ( PlaysPerPlayer[i] == MaxPlays ) {
     PlayerIndex = i+1;
     document.writeln( "A prize goes to Player " + PlayerIndex );
  };
};


// Exercises 7.1.3 - Using the same pinball score list, check to see what the highest score was.

var MaxScore = -1;
var WinOrTiePlayer = -1;
var MaxScoreTh = -1;
//To simplify, assume only the last max score is wanted.
for ( i = 0; i < scores.length; i++ ) {
 for ( j = 0; j < scores[i].length; j++ ) {
  if ( scores[i][j] > MaxScore ) {
     MaxScore = scores[i][j];
     WinOrTiePlayer = i+1;
     MaxScoreTh = j+1;
  };
 };
};

document.writeln( "Exercise 7.1.3 The highest score was " + MaxScore );
document.writeln( "One player who got this score was Player " + WinOrTiePlayer + " in Game " + MaxScoreTh );

// Exercises 7.2 - Objects
// Exercise 7.2.1 - Create an object that represents yourself. Just a basic object with your first and last name.

var MeObj = {
  first_name:  "Gretchen",
  last_name:   "Brown"
};

document.writeln ( "Exercise 7.2.1 Created MeObj" );
// Execise 7.2.2 - Add an introduce function. This should at least say your name when called.


MeObj.introduce = function () {
  document.writeln( "Hi! My name is " + MeObj.first_name + " " + MeObj.last_name );
};


document.writeln ( "Exercise 7.2.2 Calling Introduce " );

MeObj.introduce(); 

// Exercise 7.2.3 - Add some pets for yourself.
// Pets are also objects. You can add them to yourself as an array of pet objects.
// A pet should include variables for species, name, age, and houseBroken


var backyard_woodchuck = {
  species: "woodchuck",
  name:	   "woodchuck_2013",
  age:	    2,
  house_broken:	false
};

var cat = {
  species: "cat",
  status:  "ghost",
  name:	   "Penny",
  age:	   20,
  house_broken:	true
};

var dog = {
  species: "dog",
  status:  "ghost",
  name:	   "Clara",
  age:	   12,
  house_broken:	true
};

MeObj.pets = [ backyard_woodchuck, cat, dog ];
document.writeln ( "Exercise 7.2.3" );
document.writeln ( "One of my pets (also pest) is " + MeObj.pets[0].name );
document.writeln ( "The other pets, who are low-maintenance, are " + MeObj.pets[1].name + " and " + MeObj.pets[2].name );


// Exercise 7.2.4 - Now add relatives for yourself. These can be parents, children, siblings or anything.
// Relatives are objects just like pets, but their fields include firstName, lastName, and relationship (e.g. father, son, etc)


var husband = {
  first_name: 	"Bob",
  last_name: 	"Brown"
};

var daughter = {
  first_name: 	"Amelia",
  last_name: 	"Brown"
};

var soninlaw = {
  first_name: 	"Will",
  last_name: 	"David"
};

MeObj.relatives = [ husband, daughter, soninlaw ];

document.writeln ( "Exercise 7.2.4 Added 3 relatives " );

// Exercise 7.2.5 - Add the following getCalled() function to all the pets you own and all the relatives you have.
// Then try calling your pets and relatives!
var petGetCalled = function() {
  if (this.species == "cat") {
    alert("Purrrr");
  } else if (this.species == "dog") {
    alert("Bark!");
  } else {
    alert("...[I am just a " + this.species + ". I can't understand you]");
  }
};
var relativeGetCalled = function() {
  alert("Hello? This is " + this.first_name + ". Who's calling?");
};

for ( i=0; i < MeObj.pets.length; i++ ) {
  MeObj.pets[i].get_called = petGetCalled;
};

for ( i=0; i < MeObj.relatives.length; i++ ) {
  MeObj.relatives[i].get_called = relativeGetCalled;
};

document.writeln ( "Exercise 7.2.5 See the alerts for the get_called calls." );

for ( i=0; i < MeObj.pets.length; i++ ) {
  MeObj.pets[i].get_called();
};

for ( i=0; i < MeObj.relatives.length; i++ ) {
  MeObj.relatives[i].get_called();
};

// Exercise 7.2.6 - Experiment! What if you accidentally assign the wrong getCalled function to the wrong type of object?
// Do you have a problem when assigning that function to the object? What about when calling the getCalled function?

document.writeln ( "Exercise 7.2.6 What happens when wrong get-called function is assigned? " );
MeObj.pets[1].get_called = relativeGetCalled;
MeObj.relatives[0].get_called = petGetCalled;
document.writeln ( "Exercise 7.2.6 What happens when wrong get-called function is called?" );
MeObj.pets[1].get_called();
MeObj.relatives[0].get_called();


document.write("</pre");