document.write("<pre>");

// For exercises this week we'll be working on the Objects II project
function Dog(species, name, age, houseBroken) {
  this.species = species;
  this.name = name;
  this.age = age;
  this.houseBroken = houseBroken;
}

var firstDog = new Dog("poodle", "Alfred", 7, false);
var secondDog = new Dog("terrier", "Ralph the Dog", 7, false);

document.writeln(firstDog.name);
document.writeln({"hi": "ho"}.prototype);

document.write("</pre");