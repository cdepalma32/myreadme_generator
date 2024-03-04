// // // TODO: Create a function that returns a license badge based on which license is passed in

// function generateMarkdown(data) {
//   return `
//   ## ${data.title}

//   ![license badge] (https://img.shields.io/badge/license-$%7Bdata.license%7D-blue)
  
// ## Description
// ${data.description}

// ## Installation Instructions
// ${data.installationInstructions}

// ## Usage Instructions
// ${data.usageInstructions}

// ## Contribution Guidelines
// ${data.contributionGuidelines}

// ## Test Instructions
// ${data.testInstructions}

// ## License
// ${renderLicenseBadge(data.license)}

// ${renderLicenseSection(data.license)}

// ## GitHub username
// ${data.gitHubUserName}

// ## Email address
// ${data.emailAddress}

// `;
// } 

// function renderLicenseBadge(license) {
//   // Implementation based on the license type, return appropriate badge URL

//   if (license === 'MIT') {
//     return '(https://opensource.org/licenses/MIT)';
//   }
//   else if (license === 'Apache 2.0') {
//     return '(https://opensource.org/licenses/Apache-2.0)';
//   }
//   else if (license === 'GPLv3') {
//     return '(https://www.gnu.org/licenses/gpl-3.0.md)';
//   }
//   else {
//     return ''; // Return empty string for no license
//   }
// } 

// // // If there is no license, return an empty string
// // function renderLicenseBadge(license) { }

// // // TODO: Create a function that returns the license link
// function renderLicenseLink(license) {
//   // Implementation based on the license type, return appropriate license URL
//   if (license === 'MIT') {
//     return '[MIT License](https://opensource.org/licenses/MIT)';
//   }

//   else if (license === 'Apache 2.0') {
//     return '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)';
//   }

//   else  if (license === 'GPLv3') {
//     return '[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0)';
//   }
//   //keep this commented out, please
//   // else if (license === 'AGPL') {
//   //   return '[AGPL v3](https://www.gnu.org/licenses/gpl-3.0.md)';
//   }
// // keep this commented out, please
// //   else if () {
// //     return ''; // Return empty string for no license
// // } 

// // // If there is no license, return an empty string

// function renderLicenseSection(license) {
//   // Implementation based on the license type, return appropriate license section
//   if (license) {
//     return `## License
  
//   //   This project is licensed under the ${license} license. Click [here](${renderLicenseLink(license)}) for more details.`;
//   }
//   else {
//     return ''; // Return empty string for no license
//   }
// } 

// // // TODO: Create a function that returns the license section of README
// // // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // // TODO: Create a function to generate markdown for README
// // Function to generate markdown for README
// function generateMarkdown(data) {
//   // Generate the main content of the README using the data passed in

//   return `
//   ## Title
//    ${data.title}
  
//   ## Description
//   ${data.description}

//   ## Installation Instructions
//   ${data.installationInstructions}

//   ## Usage Instructions
//   ${data.usageInstructions}

//   ## Contribution Guidelines
//   ${data.installationInstructions}

//   ## Test Instructions
//   ${data.testInstructions}

//   ## License
//   ${data.license}

//   ## GitHub username
//   ${data.gitHubUserName}

//   ## Email address
//   ${data.emailAddress}
  
//   ${renderLicenseBadge(data.license)}
//   ${renderLicenseSection(data.license)}
//   `;
// }

// // Export the generateMarkdown function
// module.exports = generateMarkdown; 


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return " "
  }
    return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)]`
}

// [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)]

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return " "
  }
    return `(https://opensource.org/licenses/${license})]`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return " "
  }
    return `${renderLicenseBadge(license)}${renderLicenseLink(license)}`
}



module.exports = generateMarkdown;


// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseSection(data.license)}
  ## Description
  ${data.description}



  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Licence](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This project is licenced under the ${data.licence} licence.

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.tests}

  // NEED TO MAKE THIS DYNAMIC
  ## Questions
  If you have any questions I may or comments, be contacted at [GitHub](https://github.com/cdepalma32), or by [email](crystaldepalma@yahoo.com}).`;
}

module.exports = generateMarkdown; 