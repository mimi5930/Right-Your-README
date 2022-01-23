// packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// initial questions prompt
const initialQuestions = () => {
    // TODO: add data validation and defaults
    // TODO: reword questions to be more helpful!
    return inquirer
        .prompt([
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        },
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
            message: 'Give the user a list of instructions to install your project. (Separate steps with a "/")'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Instruct the user on how to use your product.'
        },
        {
            type: 'list',
            name: 'liscense',
            message: 'Which liscense would you like to use?',
            choices: ['a', 'b', 'c', 'd']
            // TODO: change choices
        },
        {
            type: 'confirm',
            name: 'collabConfirm',
            message: 'Were there any other contributers to this project?'
        },
        // if collabConfirm is true
        {
            type: 'input',
            name: 'collab',
            message: `Enter the contributers' GitHub username. (If more than one, separate with a "/")`,
            when: ({ collabConfirm }) => collabConfirm
        },
        {
            type: 'input',
            name: 'instructions',
            message: 'How will the user test your project? (Separate steps with a "/")'
        }
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
initialQuestions();