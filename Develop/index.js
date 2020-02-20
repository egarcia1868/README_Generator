const inquirer = require("inquirer")

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
    message: "What kind of license should your project have?",
    choices: ""
  },{
    type: "tinput",
    message: "What command should be run to install dependencies? (default to \"npm i\" if user doesn't respond)",
    name: "depCom"
  },{
    message: "What command should be run to run tests? (default to \"npm test\" if user doesn't respond)",
    name: "testCom"
  },{
    message: "What does the user need to know about using the repo?",
    name: "needToKnow"
  },{
    message: "What does the user need to know about contributing to the repo?",
    name: "contribute"
  }
];

function writeToFile(fileName, data) {
  
}

function init() {

}

init();
