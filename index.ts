#! /usr/bin/env node

import inquirer from "inquirer";

const userInputs = await inquirer.prompt([
    {
        type: 'number',
        name: 'firstNumber',
        message: 'Enter the first number: ',
        validate: (input: string) => !isNaN(parseFloat(input)),
    },
    {
        type: 'number',
        name: 'secondNumber',
        message: 'Enter the second number: ',
        validate: (input: string) => !isNaN(parseFloat(input)),
    },
    {
        type: 'list',
        name: 'operator',
        message: 'Select the math operation you want to perform:',
        choices: ['Add', 'Subtract', 'Multiply', 'Divide']
    }
]);

let result: number;

switch(userInputs.operator){
    case 'Add':
        result = userInputs.firstNumber + userInputs.secondNumber;
        console.log("The answer is: " + result);
        break;
    
    case 'Subtract':
        result = userInputs.firstNumber - userInputs.secondNumber;
        console.log("The answer is: " + result);
        break;

    case 'Multiply':
        result = userInputs.firstNumber * userInputs.secondNumber;
        console.log("The answer is: " + result);
        break;

    case 'Divide':
        result = userInputs.firstNumber / userInputs.secondNumber;
        console.log("The answer is: " + result);
        break;
}