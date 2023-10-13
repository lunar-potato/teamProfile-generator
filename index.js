const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

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

function mainMenu() {}

function buildTeam() {}

mainMenu();
