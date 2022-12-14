//this file creates an employee class and assigns it methods.
class Employee {
    constructor(name, id, email){
        this.id = id,
        this.name =  name,
        this.email = email
    };
    
};

Employee.prototype.getName = function (){
    return this.name;
};
Employee.prototype.getId = function (){
    return this.id;
};
Employee.prototype.getEmail = function(){
    return this.email;
};
Employee.prototype.getRole = function(){
    return this.constructor.name;
};

module.exports = Employee;