/*2- Task: Create an Array Manipulation Program

Breakdown:

· Declare an array of strings, e.g. ["apple", "banana", "cherry", "date", "elderberry"]

· Use array methods to perform the following manipulations:

o Append a string to the end of the array

o Prepend a string to the beginning of the array

o Remove a string from a specific index in the array and replace it with another string

· Display the array before and after each manipulation to the user as output
*/
//Declare an array of strings, e.g. ["apple", "banana", "cherry", "date", "elderberry"]
var fruit = ["apple", "banana", "cherry", "date", "elderberry"];
console.log(fruit);
//Append a string to the end of the array
console.log("--------APPEND-----------");
var append_fruit = "Watermellon";
console.log("Before append:", fruit);
fruit.push(append_fruit);
console.log("After append:", fruit);
// Prepend a string to the beginning of the array
console.log("------------PREPEND AT THE BEGINNING---------");
var prepand_fruit = "Pine Apple";
console.log("Before Prepend:", fruit);
fruit.unshift(prepand_fruit);
console.log("After Prepand:", fruit);
// //Remove a string from a specific index in the array and replace it with another string
console.log("-------REMOVE AT SPECIFIC INDEX AND REPLACE---------");
var replace_fruit = "peach";
console.log("Before remove and replace:", fruit);
fruit.splice(4, 1, replace_fruit);
console.log("After remove/replace:", fruit);
