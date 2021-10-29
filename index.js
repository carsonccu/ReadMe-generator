
const inquirer = require('inquirer');
const fs = require('fs');
// const badge = require('utils/generateMarkdown.js')

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
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
        },
    ])
}

const genereateHTML = ({ title, description, installation, usage, license, contribute, tests, github, emailphone }) =>
    `# ${title}

## Description
${description}
<br/>

${makeBadge(license)}
## Table of Contents
1. [ Description. ](#description)
2. [ Installation. ](#installation)
3. [ Usage. ](#usage)
4. [ License. ](#license)
5. [ Contribute. ](#contribute)
6. [ Tests. ](#tests)
7. [ Github. ](#github)
8. [ Email/Phone. ](#emailphone)
## Installation
${installation}
## Usage
${usage}
## License
${license}
## Contributors
${contribute}
## Tests
${tests}
## Github
${github}
## Email and Phone
${emailphone}
 `;


function makeBadge(select) {
    if (select === "The Apache License") {
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-orange)](https://opensource.org/licenses/Apache-2.0)"
    }
    if (select === "MIT License") {
        return "[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)"
    }
    if (select === "Creative Commons - CC0") {
        return "[![License](https://img.shields.io/badge/License-Creative%20Commons%20--%20CCO-blue)](http://creativecommons.org/publicdomain/zero/1.0/)"
    }
}

const init = () => {
    promptUser()
        .then((userInput) => fs.writeFileSync('README.md', genereateHTML(userInput)))
        .then(() => console.log('Successfully wrote to README.MD'))
        .catch((err) => console.error(err));
};

init();