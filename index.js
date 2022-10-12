//The first 4 requires get modules that I created.  The last two get npm packages.  Inquirer allows me to prompt the user in the command line.  Fs allows me to navigate the file system to create an html document in the dist folder.
const Engineer = require(`./lib/Engineer`);
const Intern = require(`./lib/Intern`);
const Manager = require(`./lib/Manager`);
const generateHTML = require(`./src/htmltemplate`)
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const arrayOfData = [];
//This is the first set of questions that the user is prompted.  This is because there will always be a manager.
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
//This is the questions for if they want an engineer.
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
//This is the questions for if they want an intern.
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
//this function checks if they wanted a Engineer or a Intern.  If they do it runs either engineer or intern function.  If they don't it runs startGenerate.
function checkAnswer(data){
    if(data.EngineerOrIntern === `Engineer`)engineer();
    if(data.EngineerOrIntern === `Intern`)intern();
    if(data.EngineerOrIntern === `Done, generate my website`)startGenerate(arrayOfData);
};
//this function prompts the user the engineer questions then creates a new engineer from there input then pushes it to array of data.  After that it runs checkAnswer again.
const engineer= () =>{
    inquirer.prompt(engineerQuestions)
    .then((data) => {
        arrayOfData.push(new Engineer(data.name, data.iD, data.email, data.gitHub));
        checkAnswer(data);
    })
};
//this function prompts the user the intern questions then creates a new intern from there input then pushes it to array of data.  After that it runs checkAnswer again.
const intern= () =>{
    inquirer.prompt(internQuestions)
    .then((data) => {
        arrayOfData.push(new Intern(data.name, data.iD, data.email, data.school));
        checkAnswer(data);
    })
};
//this function takes in array of data as a parameter when it is called.  It then sorts the data.  After that it creates a file in the dist folder.
const startGenerate= (data) =>{
    //this line below sorts the order that the data is in based off of its importance property.  Managers have a importance of 1, Engineers 2, and Inters 3.  This means that Manager is always first, then engineers, then Interns.
    data.sort((a,b) => a.importance - b.importance)
    fs.writeFile(`./dist/TeamChart.html`, generateHTML(data), (err) => err ? console.log(err) : console.log(`HTML document successfully generated!`))
};
//this function prompts the user then creates a manager and the manager object into an array of data.  After that it runs the checkAnswer function.
function init(){
    inquirer.prompt(managerQuestions)
    .then((data) => {
        arrayOfData.push(new Manager(data.name, data.id, data.email, data.office));
        checkAnswer(data);
        
    })
};
//This runs the init function on page load.
init();
