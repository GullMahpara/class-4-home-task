/*4- Task: Create a Function to Calculate the Factorial of a Number
Breakdown:
· Create a function that takes a number as input and calculates its factorial using a loop.
· The factorial of a number is the product of all positive integers less than or equal to the number.
//For example, the factorial of 5 is 5 x 4 x 3 x 2 x 1 = 120.
· The function should return the factorial of the input number.
· Test the function with different numbers to make sure it is working correctly.
*/
var Prompt = require("prompt-sync")({ sigint: true });
function factorial(n) {
    var fact = 1;
    if (n <= 0) {
        console.log("FACTORIAL IS NOT DEFINED FOR NEGATIVE NUMBERS.");
    }
    else {
        for (var i = 1; i <= n; i++) {
            fact = fact * i;
        }
        console.log("Factorial of ".concat(n, "! is ").concat(fact));
    }
}
var num = parseInt(Prompt("Enter the number: "));
console.log("Number: " + num);
factorial(num);
