var inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
// const questions = [];
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
  ])

  // TODO: Create a function to write README file
  // function writeToFile(fileName, data) {
  //   fileName = response.name;
  // }

  // TODO: Create a function to initialize app
  // function init() {}

  // Function call to initialize app
  // init();

  .then((answers) => {
    fs.writeFile(
      "README.md",
      `
  # ${answers.name}
  
  ### Project Purpose
  ${answers.description}
  `,

      (err) => (err ? console.log(err) : console.log("success!"))
    );
  });

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
