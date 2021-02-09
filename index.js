var inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is this project called?",
    },
    {
      type: "input",
      name: "description",
      message: "What is this purpose of this project?",
    },
    {
      type: "input",
      name: "install",
      message:
        "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
    },
    {
      type: "input",
      name: "usage",
      message: "Provide instructions and examples for use.",
    },
    {
      type: "input",
      name: "contguide",
      message: "Enter any contribution guidelines",
    },
    {
      type: "input",
      name: "test",
      message: "Enter any testing instructions",
    },
    {
      type: "list",
      name: "license",
      message: "What license would you like?",
      choices: ["Apache", "MIT", "Boost", "None"],
    },
    {
      type: "input",
      name: "github",
      message: "Enter your github username",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email address",
    },
  ])

  .then((answers) => {
    fs.writeFile(
      "printed/README.md",
      `
  # ${answers.name}
  

  ### Description
  ${answers.description}

  ### Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)


  ### Installation
  ${answers.install}

  ### Usage
  ${answers.usage}

  ### Contributing
  ${answers.contguide}

  ### Tests
  ${answers.test}

  ### Questions
  github: ${answers.github}
  email: ${answers.email}
  `,

      (err) => (err ? console.log(err) : console.log("readme created!!"))
    );
  });
// switch (answers.licence) {
//   case "Apache":
//     licenceURL =
//       "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
//   case "MIT":
//     licenceURL =
//       "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
//   case "Boost":
//     licenceURL =
//       "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
//   case "None":
//     licenceURL = "";
// }
