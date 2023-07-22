// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the project title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a project description,the what, why and how of the project:',
    },
    {
        type: 'input',
        name: 'tableOfContents',
        message: 'Enter the table of contents, please seperate them with comma:',
        filter: (value) => value.split(',').map((item) => item.trim()),
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter the installation explanations:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage instructions:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license:',
        choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'ISC', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contributing guidelines:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter tests instructions:',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Enter your email to answer questions about the project:',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const readmeContent = generateMarkdown(data);
    
    fs.writeFile(fileName,readmeContent, (err) =>
    err ? console.log('Error!') : console.log('Success!')
  );
}

// TODO: Create a function to initialize app
function init() {
    const fileName = "README.md";
    const userInput = inquirer.prompt(questions);
    writeToFile(fileName,userInput);
}

// Function call to initialize app
init();