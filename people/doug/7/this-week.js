document.write("<pre>");

var petGetCalled = function() {
	console.log("Species is " + this.species);
	  if (this.species == "cat") {
	    alert("Purrrr");
	  } else if (this.species == "dog") {
	    alert("Bark!");
	  } else {
	    alert("...[I am just a " + this.species + ". I can't understand you]");
	  }
	};
	
var relativeGetCalled = function() {
	alert("Hello? This is " + this.firstName + ". Who's calling?");
};


// Exercises 7 - Data Structures
// Exercises 7.1 - Multidimensional Arrays
//
// Exercise 7.1.1 - Below is a two dimensional array of names from the class. Print out the second value of the third row.
var namesByRow = [
  ["Doug", "David"],
  ["Cassandra", "Shelby", "Emily"],
  ["Rada", "Sara", "Gretchen"]
];
document.writeln("Start of file");
document.writeln("Second value of third row is " + namesByRow[2][1]);

// Exercise 7.1.2 - Below is a list of players' scores for pinball. Who has played the most times?
var scores = [
  [57, 28, 30, 49],
  [12, 42, 60],
  [19, 22, 88, 27]
];

var playerMostPlayed = 0;
var mostPlayed = 0;
for (i=0; i<scores.length; i++){
	if (scores[i].length > mostPlayed){
		mostPlayed = scores[i].length;
		playerMostPlayed = i;
	}	
}
document.writeln("Player who played the most is " + playerMostPlayed);

// Exercises 7.1.3 - Using the same pinball score list, check to see what the highest score was.
var highestScore = 0;
for (i=0; i<scores.length; i++){
	for (j=0; j<scores[i].length; j++){
		document.writeln("i and j are: " + i + " " + j);
		document.writeln("Score is " + scores[i][j]);
		if (scores[i][j] > highestScore){
			highestScore = scores[i][j];
		}
	}
}
document.writeln("The highest score was: " + highestScore);


// Exercises 7.2 - Objects
// Exercise 7.2.1 - Create an object that represents yourself. Just a basic object with your first and last name.
var doug = {
		firstName: "Doug",
		lastName: "Fleming",
		intro: function(){
			document.writeln("Hey I am " + doug.firstName + " "+ doug.lastName);
		}

}

// Execise 7.2.2 - Add an introduce function. This should at least say your name when called.
doug.intro();

// Exercise 7.2.3 - Add some pets for yourself.
// Pets are also objects. You can add them to yourself as an array of pet objects.
// A pet should include variables for species, name, age, and houseBroken
var myDog = {
		species: "dog",
		name: "Snickers",
		age: 7,
		housebroken: true,
		getCalled : petGetCalled()
};
document.writeln("My dog is " + myDog.name);

var myPony = {
		species: "horse",
		name: "Trigger",
		age: 2,
		housebroken: false,
		getCalled : petGetCalled()
};

doug.pets = [myDog, myPony];

for (i=0; i<doug.pets.length; i++){
	document.writeln("My pet's name is " + doug.pets[i].name);
}

// Exercise 7.2.4 - Now add relatives for yourself. These can be parents, children, siblings or anything.
// Relatives are objects just like pets, but their fields include firstName, lastName, and relationship (e.g. father, son, etc)
var myWife = {
		firstName: "Debbie",
		lastName: "Fleming",
		relationship: "wife",
		getCalled : relativeGetCalled()
}
var mySon = {
		firstName: "Greg",
		lastName: "Fleming",
		relationship: "son",
		getCalled : relativeGetCalled()
}
var myDaughter = {
		firstName: "Allison",
		lastName: "Fleming",
		relationship: "daughter",
		getCalled : relativeGetCalled()
}
doug.relatives = [myWife, mySon, myDaughter];

// Exercise 7.2.5 - Add the following getCalled() function to all the pets you own and all the relatives you have.
// Then try calling your pets and relatives!

console.log("length of relatives is " + doug.relatives.length);
for (i=0; i<doug.relatives.length; i++){
	console.log("relative is " + doug.relatives[i].firstName);
	//doug.relatives[i].getCalled();
}

for (i=0; i<doug.pets.length; i++){
	doug.pets[i].getCalled();
}

// Exercise 7.2.6 - Experiment! What if you accidentally assign the wrong getCalled function to the wrong type of object?
// Do you have a problem when assigning that function to the object? What about when calling the getCalled function?


document.write("</pre");