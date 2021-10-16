const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const { log } = require("console");

inquirer.prompt([
    {
        type: 'input',
        message: 'Employee Name:',
        name: 'name',
    },
    {
        type: 'input',
        message: 'ID Number:',
        name: "id"
    },
    {
        type: "input",
        message: "Employee Email:",
        name: "email"
    },
    {
        type: "list",
        message: "Role:",
        name: "role",
        choices: [
            { name: "Manager" },
            { name: "Engineer" },
            { name: "Intern" },
        ]
    },
    {
        type: "input",
        message: "Manager Office Number:",
        name: "officeNumber",
        when: function(response) {
            return response.role == "Manager"
        }
    },
    {
        type: "input",
        message: "GitHub Username:",
        name: "github",
        when: function(response) {
            return response.role == "Engineer"
        }
    },
    {
        type: "input",
        message: "School:",
        name: "school",
        when: function(response) {
            return response.role == "Intern"
        }
    }
])
    .then(({ name, email, role, school, officeNumber, github }) => {
        console.log(name, email, role, officeNumber, github, school)

    })