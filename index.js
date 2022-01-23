// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer
        .prompt([
        {
            type: 'input',
            name: 'gitName',
            message: 'What is your GitHub Username?'
        },
        {
            type: 'input',
            name: 'link',
            message: 'What is the link to your project on GitHub?'
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
            // TODO: add function to correctly capitalize this
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please add a description for your project.'
        },
        {
            type: 'input',
            name: 'install',
            message: 'Provide the user with installation instructions.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How will one use your project?'
        },
        {
            type: 'input',
            name: 'contribution',
            message:'contribution guidelines'
            // TODO: change wording in message
        },
        {
            type: 'input',
            name: 'instructions',
            message: 'How will the user test your project'
        },
        {
            type: 'list',
            name: 'liscense',
            message: 'Which liscense would you like to use?',
            choices: ['a', 'b', 'c', 'd']
            // TODO: change choices
        }

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
