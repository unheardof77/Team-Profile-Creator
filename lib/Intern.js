const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    };
};

Intern.prototype.getRole = function(){
    return this.constructor.name;
};

Intern.prototype.getSchool = function(){
    return this.school;
};

module.exports = Intern;