/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add (number1, number2) {
    return number1 + number2;
};

function addNumbers() {
    const add1 = Number(document.getElementById("add1").value);
    const add2 = Number(document.getElementById("add2").value);
    document.getElementById("sum").value = add(add1, add2);
};

document.getElementById("addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */

const subtract = function(number1, number2) {
    return number1 - number2;
};

const subtractNumbers = function() {
    const subtract1 = Number(document.getElementById("subtract1").value);
    const subtract2 = Number(document.getElementById("subtract2").value);
    document.getElementById("difference").value = subtract(subtract1, subtract2);
};

document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => {
    return number1 * number2;
};

const multiplyNumbers = () => {
    const factor1 = Number(document.getElementById("factor1").value);
    const factor2 = Number(document.getElementById("factor2").value);
    document.getElementById("product").value = multiply(factor1, factor2);
};

document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */

function divide (number1, number2) {
    return number1 / number2;
};

const divideNumbers = () => {
    const dividend = Number(document.getElementById("dividend").value);
    const divisor = Number(document.getElementById("divisor").value);
    document.getElementById("quotient").value = divide(dividend, divisor);
};

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */

let date = new Date();
let year = date.getFullYear();
document.getElementById("year").innerHTML = year;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById("array").innerHTML = numbers;

/* Output Odds Only Array */

const oddNumbers = numbers.filter(number => {
    const remainder = number % 2;
    if (remainder != 0)
        return number;
});

document.getElementById("odds").innerHTML = oddNumbers;

/* Output Evens Only Array */

const evenNumbers = numbers.filter(number => {
    const remainder = number % 2;
    if (remainder == 0)
        return number;
});

document.getElementById("evens").innerHTML = evenNumbers;

/* Output Sum of Org. Array */

document.getElementById("sumOfArray").innerHTML = numbers.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */

document.getElementById("multiplied").innerHTML = numbers.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */

document.getElementById("sumOfMultiplied").innerHTML = numbers.map(number => number * 2).reduce((sum, number) => sum + number);