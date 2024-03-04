// // TODO: Include packages needed for this application


// // const inquirer = require('inquirer'); 
// // import packages

// let fs = require("fs"); //to write to file
// let inquirer = require("inquirer"); // to get user input
// let generateMarkdown = require("./utils/generateMarkdown"); // to make the file content 

// // Exporting the getProjectAnswers function
// module.exports = getProjectAnswers; 

// function getProjectAnswers() {


// // function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, "utf8", function(){
//         console.log("Success!");
//     });
// }



// // function call to initialize program
// init(); 

//     // inquirer.prompt(questions);
//     // function to write README file



// ALSO CURRENT CODE WE ARE WORKING WITH!!!!!
// async function generateREADME(answers) {
// // Create the content for the README file based on user input
// const readmeContent = questions
// }
    

// function main () {

// }
// console.log('Welcome to the README Genorator!');

// const projectInfo = getProjectAnswers(); 

// // TODO: Create an array of questions for user input
// const ProjectAnswers = [];


// Writes the content to a readme

//Using generateMarkdown to get the content
// const readmeContent = generateMarkdown(data);

// README.mdfilefs.writeFile('README.md', readmeContent, (err) => {
//         if (err) {
//             console.error('Error writing to README.md:', err);
//         } else {
//             console.log('README.md successfully created!');
//         }
//     });


// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();


// //THIS IS THE NMP INSTALLER CODE
// // var inquirer = require('inquirer');
// // inquirer
// //   .prompt([
// //     /* Pass your questions in here */
// //   ])
// //   .then((answers) => {
// //     // Use user feedback for... whatever!!
// //   })
// //   .catch((error) => {
// //     if (error.isTtyError) {
// //       // Prompt couldn't be rendered in the current environment
// //     } else {
// //       // Something else went wrong
// //     }
// //   });
// this is the commented out older things to save ^^^^^

// this is the commented out current code vvv
// import packages
// let fs = require("fs"); //to write to file
// let inquirer = require("inquirer"); // to get user input
// let generateMarkdown = require("./utils/generateMarkdown"); // to make the file content

// // array of questions for user
// const questions = [
//     {
//         type: "input",
//         name: "title",
//         message: "Enter a title for the Readme:"
//     },
//     {
//         type: "input",
//         name: "description",
//         message: "Enter a description for this project:"
//     },
//     {
//         type: "input",
//         name: "installation",
//         message: "Enter installation instructions:"
//     },
//     {
//         type: "input",
//         name: "usage",
//         message: "Enter usage instructions:"
//     },
//     {
//         type: "input",
//         name: "contribution",
//         message: "Enter contribution guidelines:"
//     },
//     // {
//     //     type: "input",
//     //     name: "tests",
//     //     message: "Enter test instructions:"
//     // },
//     {
//         type: "list",
//         name: "licence",
//         message: "Choose a licence:",
//         choices: ["MIT", "GPL", "AGPL", "Apache"]
//     },
//     {
//         type: "input",
//         name: "github",
//         message: "Enter your GitHub username:"
//     },
//     {
//         type: "input",
//         name: "email",
//         message: "Enter your email address:"
//     }
// ];


// // function to initialize program
// async function init() {
//     try {
//     //ask questions and store answers
//     let answers = await inquirer.prompt(questions);
    
//     // generate readme using answers
//     let readmeData = generateMarkdown(answers);

//     //write the file
//     writeToFile("READMEout.md", readmeData);

//     }
//     catch (err) {
//         console.error(err);
//     }

// }

// // function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, "utf8", function(){
//         console.log("Success!");
//     });
// }

// // function call to initialize program
// init(); 

// NEW CODE TO TRY!!!
// import packages
let fs = require("fs"); //to write to file
let inquirer = require("inquirer"); // to get user input
let generateMarkdown = require("./utils/generateMarkdown"); // to make the file content

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter a title for the Readme:"
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description for this project:"
    },
    {
        type: "input",
        name: "installation",
        message: "Enter installation instructions:"
    },
    {
        type: "input",
        name: "usage",
        message: "Enter usage instructions:"
    },
    {
        type: "input",
        name: "contribution",
        message: "Enter contribution guidelines:"
    },
    {
        type: "input",
        name: "tests",
        message: "Enter test instructions:"
    },
    {
        type: "list",
        name: "license",
        message: "Choose a licence:",
        choices: ["MIT", "GPL_v2", "AGPL_v3", "Apache_2.0", "None"]
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub username:"
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address:"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, "utf8", function(){
        console.log("Success!");
    });
}

// function to initialize program
async function init() {
    try {
    //ask questions and store answers
    let answers = await inquirer.prompt(questions);
    
    // generate readme using answers
    let readmeData = generateMarkdown(answers);

    //write the file // for presentation: hover on READMEout.md - filesystem convention
    // then hover on READMEout.md in explorer
    writeToFile("READMEin.md", readmeData);

    }
    catch (err) {
        console.error(err);
    }

}

// function call to initialize program
init(); 
