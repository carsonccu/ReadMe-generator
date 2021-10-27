
const inquirer = require('inquirer');
const fs = require('fs');

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

function licenseBadge(answers) {
    if (answers === "Apache 2.0 License") {
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }
    if (copyright === "MIT License") {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }
    if (copyright === "Creative Commons - CC0") {
        return `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`
    }
    if (answers === "none") {
        return "";
    }
}


const genereateHTML = ({ title, description, installation, usage, license, contribute, tests, github, emailphone }) =>
    `# ${title}

## Description
${description}
<br/>

${licenseBadge(badge)}
## Table of Contents
1. [ Description. ](#description)
2. [ Installation. ](#installation)
3. [ Usage. ](#usage)
4. [ License. ](#license)
5. [ Contribute. ](#contribute)
6. [ Tests. ](#tests)
7. [ Email/Phone. ](#emailphone)
## Installation
${installation}
## Usage
${usage}
## License
${license}
## Contribute
${contribute}
## Tests
${tests}
## Email and Phone
${emailphone}
 `;
