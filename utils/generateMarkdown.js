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
let licenseText = ""

function renderLicenseSection(data) {
  renderLicenseBadge(data);
  renderLicenseLink(data);
  
  if (data.license.includes("MIT")) {
    licenseText = `Copyright 2022 ${data.ghusername}\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
  } else if (data.license.includes("Apache 2.0")) {
    licenseText = `Copyright 2022 ${data.ghusername}\n\nLicensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at\n\nhttp://www.apache.org/licenses/LICENSE-2.0\n\nUnless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.`;
  } else if (data.license.includes("GPL v3")) {
    licenseText = `Copyright (C) 2022 ${data.ghusername}\n\nThis program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.\n\nThis program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.\n\nYou should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>.`
  } else if (data.license.includes("BSD 3")) {
    licenseText = `Copyright 2022 ${data.ghusername}\n\nRedistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:\n\n1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.\n\n2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.\n\n3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.\n\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`
  } else {
    return "No licensing information at this time.";
  }

  return `${licenseText}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("generateMarkdown is runnning!");
  renderLicenseBadge(data);
  renderLicenseLink(data);
  return `
# ${data.title}

${licenseBadge}${licenseLink}

##Description

${data.description}


## Table of Contents (clickable)

* [Description](#description)

* [Installation](#installation)

* [Usage](#usage)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions?](#questions)


##Installation

${data.installation}

##Usage

${data.usage}

##License

${renderLicenseSection(data)}

##Contributing

${data.contributing}

##Tests

${data.tests}

##Questions?

If you have questions, want to work together, or connect, please find contact info below. Don't hesitate to reach out!


GitHub: <a href="https://github.com/${data.ghusername}">${data.ghusername}</a>

Email: <a href="mailto:${data.email}">${data.email}</a>
`;
}

module.exports = generateMarkdown;
