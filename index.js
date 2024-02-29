// TODO: Include packages needed for this application
const inquirer = require('inquirer'); 
function getProjectAnswers() {

const questions = [
    {
    type: 'input',
    name: 'title',
    message: 'Enter your project title:',
    }, 
    {
    type: 'input',
    name: 'description',
    message: 'Enter your project description:',
    },
    {
    type: 'input',
    name: 'installation instructions',
    message: 'Enter installation instructions:',
    },
    {
    type: 'input',
    name: 'usage information',
    message: 'Enter usage information:' ,
    },
    {
    type: 'input',
    name: 'contribution guidelines',
    message: 'Enter contribution guidelines:',
    },
    {
    type: 'input',
    name: 'test instructions',
    message: 'Enter test instructions:',
    },
    {
    type: 'list',
    name: 'license',
    message: '',
    choices: ['MIT License', 'Apache License 2.0', 'GNU GPLv3', 'Unlicensed'],
    // badge for license should be added to top of README with a notice to section of README
    // entitled license that explains which license app was covered under
    },
    {
    type: 'input',
    name: 'GitHub Username',
    message: 'Enter your GitHub username',
    },
    {
    type: 'input',
    name: 'E-mail',
    message: 'Enter your E-mail address',
    // return statement to return inquirer prompt & questions
    },
];
    inquirer.prompt(questions);
    
}

function main () {

}
console.log('Welcome to the README Genorator!');

const projectInfo = getProjectAnswers(); 

// TODO: Create an array of questions for user input
const ProjectAnswers = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


//THIS IS THE NMP INSTALLER CODE
// var inquirer = require('inquirer');
// inquirer
//   .prompt([
//     /* Pass your questions in here */
//   ])
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });