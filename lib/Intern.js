// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// Importing employee class to extend 
const Employee = require('./Employee');

// Defining intern class which is a subclass for employee
class Intern extends Employee {
    // Constructor to define and initialize data for intern
    constructor(name, id, email, school) {
        super(name, id, email); // Setting intern's name, id, and email
        this.school = school; // Setting intern's school
    }

    // Getting data for intern's school
    getSchool() {
        return this.school;
    }

    // Getting employee role which is intern
    getRole() {
        return 'Intern';
    }
}

// Exporting intern moduel to be used in other parts of the application
module.exports = Intern;