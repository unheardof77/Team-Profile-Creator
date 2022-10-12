const Employee = require(`./lib/Employee`);
const Engineer = require(`./lib/Engineer`);
const Intern = require(`./lib/Intern`);
const Manager = require(`./lib/Manager`);
const generateHTML = require(`./src/htmltemplate`)
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const arrayOfData = [];

const managerQuestions = [
    {type: `input`,
    name: `name`,
    message: `What is your team managers name?`},
    {type: `input`,
    name: `id`,
    message: `What is your team managers employee ID?`},
    {type: `input`,
    name: `email`,
    message: `What is your team managers email?`},
    {type: `input`,
    name: `office`,
    message: `What is your team managers office number?`},
    {type:`list`,
    name: `EngineerOrIntern`,
    message: `Would you like to add an engineer or a intern, or would you like to generate your website?`,
    choices: [`Engineer`, `Intern`, `Done, generate my website`]}
];
const engineerQuestions = [
    {type: `input`,
    name: `name`,
    message: `What is your engineers name?`},
    {type: `input`,
    name: `iD`,
    message: `What is your engineers employee ID?`},
    {type: `input`,
    name: `email`,
    message: `What is your engineers email?`},
    {type: `input`,
    name: `gitHub`,
    message: `What is your engineers GitHub username?`},
    {type:`list`,
    name: `EngineerOrIntern`,
    message: `Would you like to add an engineer or a intern, or would you like to generate your website?`,
    choices: [`Engineer`, `Intern`, `Done, generate my website`]}
];
const internQuestions = [
    {type: `input`,
    name: `name`,
    message: `What is your interns name?`},
    {type: `input`,
    name: `iD`,
    message: `What is your interns employee ID?`},
    {type: `input`,
    name: `email`,
    message: `What is your interns email?`},
    {type: `input`,
    name: `school`,
    message: `What is your interns school?`},
    {type:`list`,
    name: `EngineerOrIntern`,
    message: `Would you like to add an engineer or a intern, or would you like to generate your website?`,
    choices: [`Engineer`, `Intern`, `Done, generate my website`]}
];

function checkAnswer(data){
    if(data.EngineerOrIntern === `Engineer`)engineer();
    if(data.EngineerOrIntern === `Intern`)intern();
    if(data.EngineerOrIntern === `Done, generate my website`)startGenerate(arrayOfData);
};

const engineer= () =>{
    inquirer.prompt(engineerQuestions)
    .then((data) => {
        arrayOfData.push(new Engineer(data.name, data.iD, data.email, data.gitHub));
        checkAnswer(data);

    })};
const intern= () =>{
    inquirer.prompt(internQuestions)
    .then((data) => {
        arrayOfData.push(new Intern(data.name, data.iD, data.email, data.school));
        checkAnswer(data);
    })
};
const startGenerate= (data) =>{
    data.sort((a,b) => a.importance - b.importance)
    fs.writeFile(`./dist/TeamChart.html`, generateHTML(data), (err) => err ? console.log(err) : console.log(`HTML document successfully generated!`))
};

function init(){
    inquirer.prompt(managerQuestions)
    .then((data) => {
        arrayOfData.push(new Manager(data.name, data.id, data.email, data.office));
        checkAnswer(data);
        
    })
};

init();
