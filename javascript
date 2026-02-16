// Arithmetic Operations using Switch Case

let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));
let operator = prompt("Enter operator (+, -, *, /, %):");

let result;

switch (operator) {
    case "+":
        result = num1 + num2;
        console.log("Result: " + result);
        break;

    case "-":
        result = num1 - num2;
        console.log("Result: " + result);
        break;

    case "*":
        result = num1 * num2;
        console.log("Result: " + result);
        break;

    case "/":
        if (num2 !== 0) {
            result = num1 / num2;
            console.log("Result: " + result);
        } else {
            console.log("Error: Division by zero is not allowed.");
        }
        break;

    case "%":
        result = num1 % num2;
        console.log("Result: " + result);
        break;

    default:
        console.log("Invalid operator!");
}
