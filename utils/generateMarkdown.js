// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let licenseBadge = "";

function renderLicenseBadge(data) {
  if (data.license.includes("MIT")) {
      licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)]";
  } else if (data.license.includes("Apache 2.0")) {
     licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-yellow.svg)]";
  } else if (data.license.includes("GPL v3")) {
     licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]"
  } if (data.license.includes("BSD 3")) {
      licenseBadge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-brightgreen.svg)]"
  } else {
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
let licenseLink = "";

function renderLicenseLink(data) {
  if (data.license.includes("MIT")) {
    licenseLink = "(https://opensource.org/licenses/MIT)";
  } else if (data.license.includes("Apache 2.0")) {
    licenseLink = "(https://opensource.org/licenses/Apache-2.0)";
  } else if (data.license.includes("GPL v3")) {
    licenseLink = "(https://www.gnu.org/licenses/gpl-3.0)"
  } else if (data.license.includes("BSD 3")) {
    licenseLink = "(https://opensource.org/licenses/BSD-3-Clause)"
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  renderLicenseBadge(data);
  renderLicenseLink(data);
  console.log(licenseBadge, licenseLink)

  return `${licenseBadge}${licenseLink}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("generateMarkdown is runnning!");
  return `
# ${data.title}

##Description

${data.description}


## Table of Contents (clickable)

*[Description](#description)

*[Installation](#installation)

*[Usage](#usage)

*[Contributing](#contributing)

*[Tests](#tests)


##Installation

${data.installation}

##Usage

${data.usage}

##License (Provided by License)

${renderLicenseSection(data)}

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
