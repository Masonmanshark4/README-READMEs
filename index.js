//packages for this application
const generateMarkdown  = require('./Utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

//questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What's the project title?"
    },
    {
        type: "input",
        name: "description",
        message: "Please give a berief description of your project."
    },
    {
        type: "input",
        name: "installation",
        message: "Are there any installation instructions?"
    },
    {
        type: "input",
        name: "usage",
        message: "What is the best usage case for you project?"
    },
    {
        type: "input",
        name: "credits",
        message: "Are there any credit that need mentioning?"
    },
    {
        type: "list",
        name: "license",
        message: "Please select a license.",
        choices: ["MIT", "Apache", "GPL", "None"]
    },
    {
        type: "input",
        name: "tests",
        message: "Please provide test instructions."
    },
    {
        type: "input",
        name: "questions",
        message: "Any contact information as needed."
    }
];

//function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Success!");
    });
}

//function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile("README.md", generateMarkdown(answers));
    });
}

//function call to initialize app
init();
