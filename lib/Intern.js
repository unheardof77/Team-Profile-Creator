const Employee = require("./Employee");
//this file creates an Intern class and assigns it methods.
class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
        this.importance = 3;
    };
};

Intern.prototype.getRole = function(){
    return this.constructor.name;
};

Intern.prototype.getSchool = function(){
    return this.school;
};

module.exports = Intern;