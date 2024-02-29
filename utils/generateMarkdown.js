// // TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  // Implementation based on the license type, return appropriate badge URL

  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
  else if (license === 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }
  else if (license === 'GPLv3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0.md)';
  }
  else {
    return ''; // Return empty string for no license
  }
} 

// // If there is no license, return an empty string
// function renderLicenseBadge(license) { }

// // TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  // Implementation based on the license type, return appropriate license URL
  if (license === 'MIT') {
    return '[MIT License](https://opensource.org/licenses/MIT)';
  }
  else if (license === 'GPLv3') {
    return '[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0)';
  }
  else if (license === 'AGPL') {
    return '[AGPL v3](https://www.gnu.org/licenses/gpl-3.0.md)';
  }
  else if (license === 'Apache 2.0') {
    return '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)';
  }
  else {
    return ''; // Return empty string for no license
  }
} 

// // If there is no license, return an empty string
function renderLicenseLink(license) {}
// Function that returns the license section of README
function renderLicenseSection(license) {
  // Implementation based on the license type, return appropriate license section
  if (license) {
    return `## License
  
  //   This project is licensed under the ${license} license. Click [here](${renderLicenseLink(license)}) for more details.`;
  }
  else {
    return ''; // Return empty string for no license
  }
} 

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// Function to generate markdown for README
function generateMarkdown(data) {
  // Generate the main content of the README using the data passed in

  return `# ${data.title}
  ## Description
  ${data.description}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}
  `;
}

// Export the generateMarkdown function
module.exports = generateMarkdown; 
