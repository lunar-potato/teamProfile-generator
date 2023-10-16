// TODO: Write code to define and export the Employee class
// Defining class for employee
class Employee {
    // Constructor to define and initialize data for employee
    constructor(name, id, email) {
        this.name = name; // Setting employee name
        this.id = id; // Setting employee id
        this.email = email; // Setting employee email
    }

    // Getting employee name
    getName() {
        return this.name; 
    }

    // Getting employee id
    getId() {
        return this.id; 
    }

    // Getting employee email
    getEmail() {
        return this.email;
    }

    // Getting employee role 
    getRole() {
        return 'Employee';
    }
}

// Exporting employee module  to be used in other parts of the application
module.exports = Employee;