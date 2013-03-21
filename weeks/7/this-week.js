document.write("<pre>");

// Exercises 7 - Data Structures
// Exercises 7.1 - Multidimensional Arrays
//
// Exercise 7.1.1 - Below is a two dimensional array of names from the class. Print out the second value of the third row.
var namesByRow = [
  ["Doug", "David"],
  ["Cassandra", "Shelby", "Emily"],
  ["Rada", "Sara", "Gretchen"]
];

// Exercise 7.1.2 - Below is a list of players' scores for pinball. Who has played the most times?
var scores = [
  [57, 28, 30, 49],
  [12, 42, 60],
  [19, 22, 88, 27]
];

// Exercises 7.1.3 - Using the same pinball score list, check to see what the highest score was.



// Exercises 7.2 - Objects
// Exercise 7.2.1 - Create an object that represents yourself. Just a basic object with your first and last name.


// Execise 7.2.2 - Add an introduce function. This should at least say your name when called.


// Exercise 7.2.3 - Add some pets for yourself.
// Pets are also objects. You can add them to yourself as an array of pet objects.
// A pet should include variables for species, name, age, and houseBroken


// Exercise 7.2.4 - Now add relatives for yourself. These can be parents, children, siblings or anything.
// Relatives are objects just like pets, but their fields include firstName, lastName, and relationship (e.g. father, son, etc)


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
  alert("Hello? This is " + this.firstName + ". Who's calling?");
};


// Exercise 7.2.6 - Experiment! What if you accidentally assign the wrong getCalled function to the wrong type of object?
// Do you have a problem when assigning that function to the object? What about when calling the getCalled function?


document.write("</pre");