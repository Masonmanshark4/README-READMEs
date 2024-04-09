//function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
    if (license === "MIT") {
        return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
    } else if (license === "Apache") {
        return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
    } else if (license === "GPL") {
        return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
    } else {
        return "";
    }
}

//function that returns the license link
function renderLicenseLink(license) {
    if (license === "MIT") {
        return `[MIT](https://opensource.org/licenses/MIT)`;
    } else if (license === "Apache") {
        return `[Apache](https://opensource.org/licenses/Apache-2.0)`;
    } else if (license === "GPL") {
        return `[GPL](https://www.gnu.org/licenses/gpl-3.0)`;
    } else {
        return "";
    }
}

//function that returns the license section of README
function renderLicenseSection(license) {
    if (license === "None") {
        return "";
    } else {
        return '## License';
    }
}

//function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
    ${renderLicenseBadge(data.license)}
    ## Description
    ${data.description}
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    - [Tests](#tests)
    - [Questions](#questions)
    ## Installation
    ${data.installation}
    ## Usage
    ${data.usage}
    ## Credits
    ${data.credits}
    ${renderLicenseSection(data.license)}
    ${renderLicenseLink(data.license)}
    ## Tests
    ${data.tests}
    ## Questions
    ${data.questions}
    `;
}

module.exports = {
    generateMarkdown,
    renderLicenseBadge,
    renderLicenseLink,
    renderLicenseSection
};
