// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'gitName',
            message: 'What is your GitHub Username?'
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
            // TODO: add function to correctly capitalize this
        },
        {

        }
        // add description, installation instructions, usage information, contribution guidelines, and test instructions
        // add liscense from a list of options
    ])
    .then(answers => console.log(answers));
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

function init() {
    console.log(`
====================================================================================
Welcome to Write Your README!
A README is the gateway into the soul of your project.
Please answer the following questions fully to create a glowing README of your own!
====================================================================================
    `);
}

// Function call to initialize app
init();
questions();
