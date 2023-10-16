// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// Importing employee class to extend 
const Employee = require('./Employee');

// Defining engineer class which is a subclass for employee
class Engineer extends Employee {
    // Constructor to define and initialize data for engineer 
    constructor(name, id, email, github) {
        super(name, id, email); // Setting eimployee's name, id, and email (from employee class)
        this.github = github; // Setting engineer's github
    }

    // Getting engineer's github
    getGithub() {
        return this.github;
    }

    // Getting employee role which is engineer
    getRole() {
        return 'Engineer';
    }
}

// Exporting engineer module to be used in other parts of the application
module.exports = Engineer;