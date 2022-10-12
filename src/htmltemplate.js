//This array is an array of cards for each human in the team.
const arrayOfHumanCards = [];
//this returns the correct string to the generateCard function
const getSpecial = (data) => {
    const human = data;
    const role = human.getRole()
    if (role === `Manager`){
        return `Office Number: ${human.getOfficeNumber()}`;
    }else if(role === `Engineer`){
        return `<a target="_blank" href= "https://github.com/${human.getGithub()}">GitHub</a>`
    }else {
        return `School: ${human.getSchool()}`
    };
};
//This returns all of the card information after receiving information from getSpecial function.
const generateCard = (data) =>{
    for(i=0; i < data.length; i++){
        arrayOfHumanCards.push(`       
    <div class="card" style="width: 18rem;">
        <div class="card-body bg-primary color-white">
            <h5 class="card-title">${data[i].getName()}</h5>
            <p class="card-text">${data[i].getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${data[i].getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${data[i].getEmail()}">${data[i].getEmail()}</a></li>
            <li class="list-group-item">${getSpecial(data[i])}</li>
        </ul>
    </div>`);
    };
    return arrayOfHumanCards.join(`
    
    `)
};

//This is the main template for the html.  It has the head and body information.
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
//This exports the generateHTML function allowing it to be used in the index.js file.
module.exports = generateHTML;