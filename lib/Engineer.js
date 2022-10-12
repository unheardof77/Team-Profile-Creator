const Employee = require("./Employee");

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