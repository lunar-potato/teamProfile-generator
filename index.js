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

}

function promptEngineer() {

}

function promptIntern() {
    
}

function mainMenu() {
    
}

function buildTeam() {
    
}

mainMenu();