// packages
const inquirer = require('inquirer');
const createMarkdown = require('./utils/generateMarkdown');
const markdownContent = require('./src/markdownTemplate');

// initial questions prompt
const initialQuestions = () => {
    return inquirer
        .prompt([
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?*',
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log('Please enter your email!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'gitName',
            message: 'What is your GitHub username?*',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your GitHub username!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'link',
            message: 'What is the link to your project on GitHub?*',
            validate: linkInput => {
                if (linkInput) {
                    return true
                } else {
                    console.log('Please include the link to your project on GitHub!');
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?*',
            validate: titleInput => {
                if (titleInput) {
                    return true
                } else {
                    console.log('Please add a title for your project!');
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please add a description for your project.*',
            validate: descInput => {
                if (descInput) {
                    return true
                } else {
                    console.log('Please describe your project!');
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'Give the user a list of instructions to install your project. (Separate steps with a "*")'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Instruct the user on how to use your product.'
        },
        {
            // TODO: Add badges
            type: 'list',
            name: 'license',
            message: 'Which license would you like to use?',
            choices: ['MIT Licence', 'GNU GPLv3 License', 'Apache License 2.0', 'ISC License', 'none']
        },
        {
            type: 'confirm',
            name: 'collabConfirm',
            message: 'Were there any other contributers to this project? (If more than one, separate with a "*")',
            default: false
        },
        {
            // if collabConfirm is true
            type: 'input',
            name: 'collab',
            message: `Enter the contributers' GitHub username. (If more than one, separate with a "*")`,
            when: ({ collabConfirm }) => collabConfirm
        },
        {
            type: 'input',
            name: 'sources',
            message: `Enter any other contributor's name and website or any tutorials (separate with a "*")`,
            when: ({ collabConfirm }) => collabConfirm
        },
        {
            type: 'input',
            name: 'instructions',
            message: 'How will the user test your project? (Separate steps with a "*")'
        },
        // TODO: Add contributing section
        {
            type: 'confirm',
            name: 'confirmContributing',
            message: 'Would you like to add a section for contributing?',
            default: false
        },
        {
            type: 'confirm',
            name: 'contributeOptions',
            message: 'Would you like to use the Contributor Covenant?',
            when: ({ confirmContributing }) => confirmContributing,
            default: true
        },
        {
            type: 'input',
            name: 'customContribute',
            message: 'Please write your message for contributing to this project! (Separate steps with a "*")',
            when: ({ confirmContributing, contributeOptions }) => {
                if (confirmContributing && !contributeOptions) {
                    return true;
                } else {
                    return false;
                }
            },
            validate: titleInput => {
                if (titleInput) {
                    return true
                } else {
                    console.log('Please add a message for contributing to your project!');
                }
            }
        }
        // TODO: Add Tests Section
        // TODO: Add Questions Section
    ])
};

// function for welcome text
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
initialQuestions()
.then(data => {
    console.log(data);
    return markdownContent(data);
})
.then(markdownContent => {
    return createMarkdown(markdownContent);
});