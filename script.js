//this project uses Math.random() and Math.floor() to generate random numbers.
// ==========================
// Part 1: Date Display
// ==========================

var date = new Date();
var month = date.getMonth()+1;    // 0–11 + 1
var day = date.getDate();       // Day of the month: 1–31
var year = date.getFullYear();  // Full year, such as 2026

// Add a leading zero when needed
if (month < 10) {
    month = "0" + month;
}

if (day < 10) {
    day = "0" + day;
}

var dateMessage = "Today is " + month + "/" + day + "/" + year;

// Display the message in the HTML paragraph
document.getElementById("dateOutput").textContent = dateMessage;

// ==========================
// Part 2: Number Conversion
// ==========================

// Two numeric strings, such as "42" and "87"
var numericString1 = String(Math.floor(Math.random() * 100)); //The Math.random() static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1
var numericString2 = String(Math.floor(Math.random() * 100));//The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.

// A decimal string, such as "24.63"
var decimalString = (Math.random() * 100).toFixed(2);// the toFixed() method formats a number using fixed-point notation. It returns a string representation of the number that does not use exponential notation and has the exact number of digits after the decimal place.

var nonNumericString = "apple"; //create a non-numeric string variable

var firstNumericResult ="Original: '" + numericString1 + "' -> Converted: " + Number(numericString1) + " -> isNaN: " + Number.isNaN(Number(numericString1)) + " -> isInteger: " + Number.isInteger(Number(numericString1)) + "\n";
var secondNumericResult = "Original: '" + numericString2 + "' -> Converted: " + Number(numericString2) + " -> isNaN: " + Number.isNaN(Number(numericString2)) + " -> isInteger: " + Number.isInteger(Number(numericString2)) + "\n";
var decimalResult = "Original: '" + decimalString + "' -> Converted: " + Number(decimalString) + " -> isNaN: " + Number.isNaN(Number(decimalString)) + " -> isInteger: " + Number.isInteger(Number(decimalString)) + "\n";
var nonNumericResult = "Original: '" + nonNumericString + "' -> Converted: " + Number(nonNumericString) + " -> isNaN: " + Number.isNaN(Number(nonNumericString)) + " -> isInteger: " + Number.isInteger(Number(nonNumericString));

var conversionMessage = firstNumericResult + secondNumericResult + decimalResult + nonNumericResult;

document.getElementById("numberConversionOutput").textContent = conversionMessage;

// ==========================
// Part 3: Math & Formatting
// ==========================

var num1 = Math.floor(Math.random() * 1000);
var num2 = Math.random() * 1000;// getting this var as a possible floating point number between 0 and 1000, not an integer
var num3 = Math.random() * 1000;

var additionResult = num1 + num2; // addition
var multiplicationResult = num3 * 2; // multiplication

var mathMessage = "num1: " + num1 + "\nnum2: " + num2.toFixed(2) + "\nnum3: " + num3.toFixed(2) + "\n\nAddition (num1 + num2): " + additionResult.toLocaleString() + "\nMultiplication (num3 * 2): " + multiplicationResult.toLocaleString();

document.getElementById("mathOutput").textContent = mathMessage;

// ==========================
// Part 4: Conditionals
// ==========================

if (Number.isNaN(Number(nonNumericString))) {
    document.getElementById("conditionalOutput").textContent += "The value '" + nonNumericString + "' is not a number.\n";
} else {
    document.getElementById("conditionalOutput").textContent += "The value '" + nonNumericString + "' is a number.\n";
}

if (Number.isInteger(Number(decimalString))) {
    document.getElementById("conditionalOutput").textContent += "The value '" + decimalString + "' is an integer.\n";
} else {
    document.getElementById("conditionalOutput").textContent += "The value '" + decimalString + "' is not an integer.\n";
}

if (additionResult > 1000) {
    document.getElementById("conditionalOutput").textContent += "The result of addition (num1 + num2) is greater than 1000.\n";
} else {
    document.getElementById("conditionalOutput").textContent += "The result of addition (num1 + num2) is not greater than 1000.\n";
}


