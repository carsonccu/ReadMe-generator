
const inquirer = require('inquirer');
const fs = require('fs');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What Do you want to name the Repo?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project?'

        },
        {
            type: 'input',
            name: 'installation',
            message: 'What steps are required for installation?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What instructions are there for usage?'
        },
        {
            type: 'list',
            name: 'license',
            choices: ["The Apache License", "MIT License", "Creative Commons - CC0"]
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Enter any and all resources used in contribution to your project'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What instructions are there to Test?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your Github username:'
        },
        {
            type: 'input',
            name: 'emailphone',
            message: 'What is your Email? Phone Number?'
        }
    ])
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
