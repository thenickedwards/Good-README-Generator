// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');
const { type } = require('os');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
        type: "input",
        message: "WHat is the question?"

    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            console.log(answers);
            const myMarkdown = markdown(answers);

            // call writeToFile func with dsired filename and myMarkdown

        });
}

// Function call to initialize app
init();
