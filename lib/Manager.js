const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber
    };
};

Manager.prototype.getRole = function(){
    return this.constructor.name;
};

Manager.prototype.getOfficeNumber = function(){
    return this.officeNumber;
};

module.exports = Manager;