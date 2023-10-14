const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.
const teamMember = []; // Storing the team members

function promptManager() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Manager's name:",
    },
    {
      type: "input",
      name: "id",
      message: "Manager's ID:",
    },
    {
      type: "input",
      name: "email",
      message: "Manager's email:",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Manager's office number:",
    },
  ]);
}

function promptEngineer() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Engineer's name:",
    },
    {
      type: "input",
      name: "id",
      message: "Engineer's ID:",
    },
    {
      type: "input",
      name: "email",
      message: "Engineer's email:",
    },
    {
      type: "input",
      name: "github",
      message: "Engineer's GitHub username:",
    },
  ]);
}

function promptIntern() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Intern's name:",
    },
    {
      type: "input",
      name: "id",
      message: "Intern's ID:",
    },
    {
      type: "input",
      name: "email",
      message: "Intern's email:",
    },
    {
      type: "input",
      name: "school",
      message: "Intern's school:",
    },
  ]);
}

const folderPath = "./output";
const outputPath = path.join(folderPath, "team.html");

function mainMenu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "Choose an option:",
        choices: [
          "Add Manager",
          "Add Engineer",
          "Add Intern",
          "Finish Building Team",
        ],
      },
    ])
    .then(function (answers) {
      switch (answers.choice) {
        case "Add Manager":
          promptManager().then(function (manager) {
            const managerObject = new Manager(
              manager.name,
              manager.id,
              manager.email,
              manager.officeNumber
            );
            teamMember.push(managerObject);
            mainMenu();
          });
          break;

        case "Add Engineer":
          promptEngineer().then(function (engineer) {
            const engineerObject = new Engineer(
              engineer.name,
              engineer.id,
              engineer.email,
              engineer.github
            );
            teamMember.push(engineerObject);
            mainMenu();
          });
          break;

        case "Add Intern":
          promptIntern().then(function (intern) {
            const internObject = new Intern(
              intern.name,
              intern.id,
              intern.email,
              intern.school
            );
            teamMember.push(internObject);
            mainMenu();
          });
          break;

        case "Finish Building Team":
          const html = render(teamMember);
          fs.writeFileSync(outputPath, html);
          console.log("Team HTML generated");
          break;
      }
    });
}

mainMenu();
