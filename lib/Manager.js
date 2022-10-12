const Employee = require("./Employee");
//this file creates a Manager class and assigns it methods.
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber
        this.importance = 1;
    };
};

Manager.prototype.getRole = function(){
    return this.constructor.name;
};

Manager.prototype.getOfficeNumber = function(){
    return this.officeNumber;
};

module.exports = Manager;