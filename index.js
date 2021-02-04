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
      choices: ["None", "A", "B"],
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
      "README.md",
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

// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
