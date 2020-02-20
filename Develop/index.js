const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");

const questions = [{
    type: "input",
    messsage: "What is your GitHub username?",
    name: "github"
  },{
    type: "input",
    message: "What is your project's name?",
    name: "projectName"
  },{
    type: "input",
    messsage: "Please write a short description of your project?",
    name: "description"
  },{
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["Apache 2.0", "BSD 3-Clause", "EPL 1.0", "GPL v3"]
  },{
    type: "input",
    message: "What command should be run to install dependencies? (default to \"npm i\" if user doesn't respond)",
    name: "depCom"
  },{
    type: "input",
    message: "What command should be run to run tests? (default to \"npm test\" if user doesn't respond)",
    name: "testCom"
  },{
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "needToKnow"
  },{
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "contribute"
  }
];

function writeToFile(fileName, data) {
  fs.writeFile("README.md", "./generateMarkdown.js", function(err) {
    if(err) {
      throw err;
    }
    console.log("Written to README!")
  })
}

function init() {
  // questions.forEach( question => {
  // inquirer
  // .prompt({question}).then( () => )
  // })
}

init();
