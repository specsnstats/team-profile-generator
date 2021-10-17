const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const generateHTML = require("./util/generateHtml");

team = []

const addManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Manager Name:',
            name: 'name',
        },
        {
            type: 'input',
            message: 'ID Number:',
            name: "id"
        },
        {
            type: "input",
            message: "Manager Email:",
            name: "email"
        },
        {
            type: "input",
            message: "Manager Office Number:",
            name: "officeNumber",
        }
    ])
    .then(({name, id, email, officeNumber}) => {
        const myManager = new Manager(name, email, id, officeNumber)
        team.push(myManager)
        addOptions()
    })
    .catch((err) => {
        console.log(err)
    })
}

const addEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Engineer Name:',
            name: 'name',
        },
        {
            type: 'input',
            message: 'ID Number:',
            name: "id"
        },
        {
            type: "input",
            message: "Engineer Email:",
            name: "email"
        },
        {
            type: "input",
            message: "Engineer GitHub:",
            name: "github",
        }
    ])
    .then(({name, id, email, github}) => {
        const myEngineer = new Engineer(name, email, id, github)
        team.push(myEngineer)
        addOptions()
    })
    .catch((err) => {
        console.log(err)
    })
}

const addIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Intern Name:',
            name: 'name',
        },
        {
            type: 'input',
            message: 'ID Number:',
            name: "id"
        },
        {
            type: "input",
            message: "Intern Email:",
            name: "email"
        },
        {
            type: "input",
            message: "School:",
            name: "school",
        }
    ])
    .then(({name, id, email, school}) => {
        const myIntern = new Intern(name, email, id, school)
        team.push(myIntern)
        addOptions()
    })
    .catch((err) => {
        console.log(err)
    })
}

function addOptions() {
    inquirer.prompt([
        {
            type: "list",
            message: "What Next?",
            name: "addAnother",
            choices: [
                { name: "Add an Engineer" },
                { name: "Add an Intern" },
                { name: "Finish Building my Team" }
            ]
        }
    ])
    .then(({ addAnother }) => {
        switch (addAnother){
            case "Add an Engineer":
                addEngineer()
                break;
            case "Add an Intern":
                addIntern()
                break;
            case "Finish Building my Team":
                populateTeam()
        }
    })
}

const populateTeam = () => {
    fs.writeFile("./index.html", generateHTML(team), (err) =>
    err? console.log(err) : console.log('Team Populated!'))
}

addManager()