// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("generateMarkdown is runnning!");
  return `
# ${data.title}
License Badge + Link

##Description
${data.description}

## Table of Contents (clickable)

*[Description](#description)

*[Instalaltion](#installation)

*[Usage](#usage)

*[Contributing](#contributing)

*[Tests](#tests)

##Installation
${data.installation}

##Usage
${data.usage}

License (Provided by License)

##Contributing
${data.contributing}

##Tests
${data.tests}

##Questions
If you have questions, want to work together, or connect, please find contact info below. Don't hesitate to reach out!

GitHub: <a href="https://github.com/${data.ghusername}">${data.ghusername}</a>
Email: <a href="mailto:${data.email}">${data.email}</a>
`;
}

module.exports = generateMarkdown;
