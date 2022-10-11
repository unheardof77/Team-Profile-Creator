const Engineer = require("../lib/Engineer");
const Manager = require("../lib/Manager");
const arrayOfHumans = [];

const getSpecial = (data, i) => {
    const human = data[i];
    const role = human.getRole()
    if (role === `Manager`){
        return `Office Number: ${human.getOfficeNumber()}`;
    }else if(role === `Engineer`){
        return `<a target="_blank" href= "https://github.com/${human.getGithub()}">GitHub</a>`
    }else {
        return `School: ${human.getSchool()}`
    };
};

const generateCard = (data) =>{
    for(i=0; i < data.length; i++){
        console.log(`happened`)
        arrayOfHumans.push(`       
    <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body bg-primary color-white">
            <h5 class="card-title">${data[i].getName()}</h5>
            <p class="card-text">${data[i].getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${data[i].getId()}</li>
            <li class="list-group-item">Email: ${data[i].getEmail()}</li>
            <li class="list-group-item">${getSpecial(data, i)}</li>
        </ul>
    </div>`);
    };
    return arrayOfHumans.join(`
    `)
};


const generateHTML = (data) =>`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible"
        content="IE=edge">
    <meta name="viewport"
        content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous">
    <title>Team Profile</title>
</head>
<body>
    <header class="d-flex justify-content-center bg-danger color-white">
        <h1>My team</h1>
    </header>
    <main class="d-flex flex-wrap justify-content-center">
    ${generateCard(data)}
    </main>
</body>

</html>
`;

module.exports = generateHTML;