// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// const { type } = require('os');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
        type: "input",
        message: "What is the title of this project?"
    },
    {
        name: "license",
        type: "list",
        message: "Which license should be applied to this project? (Use arrow keys to change selection and enter to select.)",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None (Don't print a badge)"]
    },
    {
        name: "description",
        type: "input",
        message: "Provide a brief description of this project."
    },
    {
        name: "installation",
        type: "input",
        message: "Provide installation instructions this project."
    },
    {
        name: "usage",
        type: "input",
        message: "Provide usage information this project."
    },
    {
        name: "contributing",
        type: "input",
        message: "Provide contribution guidelines this project."
    },
    {
        name: "tests",
        type: "input",
        message: "Provide testing instructions this project."
    },
    {
        name: "ghusername",
        type: "input",
        message: "What is your github username?"
    },
    {
        name: "email",
        type: "input",
        message: "What is your email if a user needs to contact you about this project?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log("writeToFile is running!");
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Generating README!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(function(data) {
            console.log(data);
            // markdown(answers);
            // const myMarkdown = markdown(answers);
            writeToFile("./output/README.md", generateMarkdown(data));
            // call writeToFile func with dsired filename and myMarkdown

        })
}

// Function call to initialize app
init();
