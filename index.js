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
      message: "How is this application installed?",
    },
    {
      type: "input",
      name: "usage",
      message: "Enter any Usage Information:",
    },
    {
      type: "input",
      name: "contguide",
      message: "Enter any contribution guidelines:",
    },
    {
      type: "input",
      name: "test",
      message: "Enter any testing instructions:",
    },
    {
      type: "list",
      name: "license",
      message: "What license would you like?",
      choices: ["None", "A", "B"],
    },
  ])

  .then((answers) => {
    fs.writeFile(
      "README.md",
      `
  **# ${answers.name}**
  

  ### Description
  ${answers.description}

  ### Installation
  ${answers.install}

  ### Usage
  ${answers.usage}

  ### Contributing
  ${answers.contguide}

  ### Tests
  ${answers.test}
  `,

      (err) => (err ? console.log(err) : console.log("readme created!!"))
    );
  });

// WHEN I choose a license for my application from a list of options
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
