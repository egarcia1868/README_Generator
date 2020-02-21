const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const util = require("util");
let ansURL = "";

const writeFileSync = util.promisify(fs.writeFile);

const questions = [{
    type: "input",
    message: "What is your GitHub username?",
    name: "github"
  },{
    type: "input",
    message: "What is your project's name?",
    name: "projectName"
  },{
    type: "input",
    message: "Please write a short description of your project:",
    name: "description"
  },{
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["Apache 2.0", "EPL 1.0", "GPL v3"]
  },{
    type: "input",
    message: "What command should be run to install dependencies?",
    default: "npm i",
    name: "depCom"
  },{
    type: "input",
    message: "What command should be run to run tests?",
    default: "npm test",
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

function generateMarkdown(src1, src2, src3) {
  return `
  # ${src1.projectName}

  ## Description 

  ${src1.description}

  ## Installation

  To install the required dependencies, run the following command: "${src1.depCom}"

  ## Usage 

  ${src1.needToKnow}

  ## Credits

  [${src1.github}](https://github.com/${src1.github})

  ## License

  ${src2} 

  ## Contributing

  ${src1.contribute}

  ## Tests

  To run my tests, run the following command: "${src1.testCom}"

  ## Questions

  <img src="${src3.avatar_url}" alt="avatar" style="border-radius:58px"> Reach out to [${src1.github}](https://github.com/${src1.github}) for questions or concerns.
  `

}

// function writeToFile(fileName, data) {
//   fs.writeFile("README.md", generateMarkdown, function(err) {
//     if(err) {
//       throw err;
//     }
//     console.log("Written to README!")
//   })
// }

function init() {
  inquirer
  .prompt(questions).then(function(ans) {
    if (ans.license === "Apache 2.0") {
      ansURL = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)]"
    };
    if (ans.license === "EPL 1.0") {
      ansURL = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)]"
    };
    if (ans.license === "GPL v3") {
      ansURL = "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)]"
    };

    axios.get(`https://api.github.com/users/${ans.github}`).then((ghResp) => {
      const resp = ghResp.data;
      return writeFileSync("README.md", generateMarkdown(ans, ansURL, resp));
    });
  }).catch(function(err) {
    console.log(err)
  })
}

init();
