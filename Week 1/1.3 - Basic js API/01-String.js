//* String handbook

//* String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(), split(), trim(), toUpperCase(), toLowerCase(), etc.

//* Run each function to see the output, play and learn by doing.

//? Length of a string => str.length;
// function getLength(str) {
//   console.log("Original String:", str);
//   console.log("Length:", str.length);
// }
// getLength("Hello World");

//? index of a string => str.indexOf(target);
// function findIndexOf(str, target) {
//   console.log("Original String:", str);
//   console.log("Index:", str.indexOf(target));
// }
// findIndexOf("Hello World", "World");

//? last Index of a string => str.lastIndexOf(target);
// function findLastIndexOf(str, target) {
//   console.log("Original String:", str);
//   console.log("Index:", str.lastIndexOf(target));
// }
// findLastIndexOf("Hello World World", "World");

//? slice an string within a range*end not included* => str.slice(start,end);
// function getSlice(str, start, end) {
//   console.log("Original String:", str);
//   console.log("After slice:", str.slice(start, end));
// }
// getSlice("Hello World", 0, 5);

//? Create a substring of a string within a range *same as slice* => str.substring(start,end); 
// function getSubstring(str, start, end) {
//   console.log("Original String:", str);
//   console.log("After substring:", str.substring(start, end));
// }
// getSubstring("Hello World", 0, 5);

//? replace something in a given string => str.replace(target, replacement);
//   console.log("Original String:", str);
//   console.log("After replace:", str.replace(target, replacement));
// }
// replaceString("Hello World", "World", "JavaScript");

//? split a string around a separator => str.split(separator);
// function splitString(str, separator) {
//   console.log("Original String:", str);
//   console.log("After split:", str.split(separator));
// }
// splitString("Hello World", " ");

//? trim the string by removing irrelevant space at starting and last of string => str.trim();
// function trimString(str) {
//   console.log("Original String:", str);
//   console.log("After trim:", str.trim());
// }
// trimString("  Hello World ");

//? Change string to UpperCase => str.toUpperCase();
// function toUpper(str) {
//   console.log("Original String:", str);
//   console.log("After toUpperCase:", str.toUpperCase());
// }
// toUpper("Hello World");

//? Change string to LowerCase => str.toLowerCase();
// function toLower(str) {
//   console.log("Original String:", str);
//   console.log("After toLowerCase:", str.toLowerCase());
// }
// toLower("Hello World");