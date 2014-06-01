/* Maak list en list items */

var li1 = new ListItem("Schoonmaken", "Henk");
var li2 = new ListItem("Reinigen", "Paul");

var list = new List([li1, li2]);

console.log(li1.details());

console.log(list.tasks);
