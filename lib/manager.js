const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber,role) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = "Manager"
    }

    getRole() {
        return this.role="Manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;