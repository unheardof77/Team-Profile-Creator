const Employee = require(`./lib/Employee`); 
const Engineer = require(`./lib/Engineer`);
const inquirer = require(`inquirer`);

const questions = [
    {type: `input`,
    name: `TMName`,
    message: `What is your team managers name?`},
    {type: `input`,
    name: `TMID`,
    message: `What is your team managers employee ID?`},
    {type: `input`,
    name: `TMEmail`,
    message: `What is your team managers email?`},
    {type: `input`,
    name: `TMoffice`,
    message: `What is your team managers office number?`},
];
