function sayHello(name) {
    return `Hello, ${name}`;
}

console.log(sayHello("Даня"));

// 2 задание

function NumbersTen(numbers) {
    for (let number of numbers) {
        if (number > 10) {
            console.log(number);
        }
    }
}

const numbers = [5, 10, 15, 20];
NumbersTen(numbers);

// 3 задание

function calc(num1, num2, operator) {

    let result;

    switch (operator) {
        case 'plus':
            result = num1 + num2;
            break;
        case 'minus':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
            break;
    }

    return result;
}

const num1 = 50;
const num2 = 5;
const operator = 'multiply';

const result = calc(num1, num2, operator);
console.log(result)
