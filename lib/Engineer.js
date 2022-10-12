const Employee = require("./Employee");
//this file creates an Engineer class and assigns it methods.
class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
        this.importance = 2;
    };
};

Engineer.prototype.getRole = function(){
    return this.constructor.name;
};

Engineer.prototype.getGithub = function(){
    return this.github
};

module.exports = Engineer;