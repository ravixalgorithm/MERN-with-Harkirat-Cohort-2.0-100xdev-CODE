//* Array handbook

//* Array:   push(), pop(), shift(), unshift(), splice(), slice(), concat(), forEach(), map(), filter(), reduce(), find(), sort()

//* Run each function to see the output, play and learn by doing.

//? arr.push(element) => used to add a new element to an existing array
// function pushExample(arr, element) {
//   console.log("Original Array:", arr);

//   arr.push(element);
//   console.log("After push:", arr);
// }
// pushExample([1, 2, 3], 4); //[1, 2, 3, 4]

//? arr.pop() => remove the last element from the array
// function popExample(arr) {
//   console.log("Original Array:", arr);

//   arr.pop();
//   console.log("After pop:", arr);
// }
// popExample([1, 2, 3]); //[1, 2]

//? arr.shift() => shift the array and removes the first element
// function shiftExample(arr) {
//   console.log("Original Array:", arr);

//   arr.shift();
//   console.log("After shift:", arr);
// }
// shiftExample([1, 2, 3]);//[2, 3]

//? arr.unshift(element) => shift the array to right side and add the element at the starting
// function unshiftExample(arr, element) {
//   console.log("Original Array:", arr);

//   arr.unshift(element);
//   console.log("After unshift:", arr);
// }
// unshiftExample([1, 2, 3], 0); // [0, 1, 2, 3]

//? arr1.concat(arr2) = create a combined array of arr1 and arr2
// function concatExample(arr1, arr2) {
//   console.log("Original Arrays:", arr1, arr2);

//   let arr3 = arr1.concat(arr2);
//   console.log("After concat:", arr3);
// }
// concatExample([1, 2, 3], [4, 5, 6]);//[1, 2, 3, 4, 5, 6]

//? arr.forEach(function()) => runs for every element of the array
// function forEachExample(arr) {
//   console.log("Original Array:", arr);

//   arr.forEach(function (item, index) {
//     console.log(item, index);
//   });
// }
// forEachExample([1, 2, 3]);

//? arr.map(function) => create a new array by applying a provided function to every element in the calling array.
// function mapExample(arr) {
//   console.log("Original Array:", arr);

//   let newArr = arr.map(function (item) {
//     return item * 2;
//   });
//   console.log("After map:", newArr);
// }
// mapExample([1, 2, 3]);

//? arr.filter(function) => create a new array with all elements that pass the test implemented by the provided function
// function filterExample(arr) {
//   console.log("Original Array:", arr);

//   let newArr = arr.filter(function (item) {
//     return item > 3;
//   });
//   console.log("After filter:", newArr);
// }
// filterExample([1, 2, 3, 4, 5]);

//? arr.find(function) =>  used to return the value of the first element in the array that satisfies the provided testing function. 
// function findExample(arr) {
//   console.log("Original Array:", arr);

//   let found = arr.find(function (item) {
//     return item > 3;
//   });
//   console.log("After find:", found);
// }
// findExample([1, 2, 3, 4, 5]);

//? arr.sort(function) => used to sort the elements of an array in place and return the sorted array
// function sortExample(arr) {
//   console.log("Original Array:", arr);

//   arr.sort(function (a, b) {
//     return a - b;
//   });
//   console.log("After sort:", arr);
// }
// sortExample([5, 2, 3, 4, 1]);
