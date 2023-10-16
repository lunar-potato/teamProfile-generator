// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// Importing employee class to extend
const Employee = require('./Employee');

// Defining manager class which is a subclass for employee
class Manager extends Employee {
    // Consturctor to define and initialize data for manager
    constructor(name, id, email, officeNumber) {
        super(name, id, email); // Setting employee's name, id, and email
        this.officeNumber = officeNumber; // Setting manager's office number
    }

    // Getting manager's office number
    getOfficeNumber() {
        return this.officeNumber;
    }

    // Getting employee role of manager
    getRole() {
        return 'Manager';
    }
}

// Exporting manager role to be used in other parts of the application
module.exports = Manager;