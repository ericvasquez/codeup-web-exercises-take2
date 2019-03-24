"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

function isNumber(input) {
    return !isNaN(parseFloat(input)) && isFinite(input);
}

function isEven(input) {
    return input % 2 === 0;
}

function add100(number) {
    return 100 + parseFloat(number);
}
function isPositive(input) {
    return input > 0;
}

function isNegative(input) {
    return input < 0;
}

var userWantsToEnterANumber = confirm("Would you like to enter a number?");
if(userWantsToEnterANumber) {
    var userNumber = prompt("Please input a number");

    if(isNumber(userNumber)) {
        if(isEven(userNumber)) {
            alert(userNumber + " is even");
        } else {
            alert(userNumber + " is odd");
        }

        alert(userNumber + " plus 100 is " + add100(userNumber));

        if(isPositive(userNumber)) {
            alert(userNumber + " is positive");
        } else if(isNegative(userNumber)) {
            alert(userNumber + " is negative");
        }

    } else {
        alert("You did not input a valid number.");
    }

} else {
    alert("Fine. Don't enter a number");
}

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

function analyzeColor(colors) {
    if(colors==="red") {
        return "Blood is red";
    }

    if(colors==="orange") {
        return "Oranges are orange";
        }

    if(colors==="yellow") {
        return "Bananas are yellow";
        }

    if(colors==="green") {
        return "My room is green";
        }

    if(colors==="blue") {
        return "Blue is the color of the Infantry";
        }

    if(colors==="indigo") {
        return "Indigo is a different color";
        }

    if(colors==="violet") {
        return "Are violets blue?";
        }

    else{
        return "I don't know that color.";
    }
}
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

console.log(randomColor);
console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

var Colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColors = Colors[Math.floor(Math.random() * Colors.length)];


function analyzeColors(Colors) {
    switch(Colors) {
        case "red":
            return "Blood is red";
        case "orange":
            return "Oranges are orange";
        case "yellow":
            return "Bananas are yellow";
        case "green":
            return "My room is green";
        case "blue":
            return "Blue is the color of the Infantry";
        case "indigo":
            return "Indigo is a different color";
        case "violet":
            return "Are violets blue?";
        default:
            return "I don't know that color.";
    }
}

console.log(randomColors);
console.log(analyzeColors(randomColors));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var userColor = prompt("What color do you want to analyze?");
alert(analyzeColor(userColor));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */


function calculateTotal(luckyNumber, totalAmount){
    if(luckyNumber===0){
        return totalAmount -=0;
    }
    if(luckyNumber===1){
        return totalAmount -=(totalAmount * .1);
    }
    if(luckyNumber===2){
        return totalAmount -=(totalAmount * .25);
    }
    if(luckyNumber===3){
        return totalAmount -=(totalAmount * .35);
    }
    if(luckyNumber===4){
        return totalAmount -=(totalAmount * .5);
    }
    if(luckyNumber===5){
        return totalAmount - totalAmount;
    }

}

console.log("Discounted price is: $" + calculateTotal(1, 100));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumbers = Math.floor(Math.random() * 6);
var totalBill = prompt("What's your total bill? ");
alert("Your lucky number is: " + luckyNumbers);

function calculateTotals(luckyNumbers, totalBill){
    if(luckyNumbers===0){
        return totalBill -=0;
    }
    if(luckyNumbers===1){
        return totalBill -=(totalBill * .1);
    }
    if(luckyNumbers===2){
        return totalBill -=(totalBill * .25);
    }
    if(luckyNumbers===3){
        return totalBill -=(totalBill * .35);
    }
    if(luckyNumbers===4){
        return totalBill -=(totalBill * .5);
    }
    if(luckyNumbers===5){
        return totalBill - totalBill;
    }
}

alert("Your price before the discount is: $" + totalBill);
alert("Your price after the discount is: $" + calculateTotals(luckyNumbers, totalBill));