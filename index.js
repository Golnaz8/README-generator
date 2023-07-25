// packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { generateMarkdown } = require('./utils/generateMarkdown');

// An array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the project title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a brief project description,the what, why and how of the project:',
    },
    {
        type: 'input',
        name: 'tableOfContents',
        message: 'Enter the table of contents, please seperate them with comma:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter what command should be run to install dependencies:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter what to know about using the repo:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select which license your project has:',
        choices: ['MIT', 'GPL-3.0', 'Apache-2.0', 'MPL-2.0', 'ISC', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter how to contribute:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter what command should be used to run tests:',
    },
    {
        type: 'input',
        name: 'questionsGithub',
        message: 'Enter your github username:',
    },
    {
        type: 'input',
        name: 'questionsEmail',
        message: 'Enter your email address:',
    },
];

// A function to write README file
function writeToFile(fileName, data) {
    const readmeContent = generateMarkdown(data);

    fs.writeFile(fileName, readmeContent, (err) =>
        err ? console.log('Error!') : console.log('Success!')
    );
}

// A function to initialize app
async function init() {
    
        const fileName = "README.md";
        const userInput = await inquirer.prompt(questions);
        userInput.tableOfContents = userInput.tableOfContents.split(',').map((item) => item.trim());
        writeToFile(fileName, userInput);
}
    
init();