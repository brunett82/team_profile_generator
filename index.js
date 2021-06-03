//modules
const inquirer = require("inquirer");
const fs = require("fs");
//required files
const Engineer = require('./src/engineer');
const Intern = require('./src/intern');
const Manager = require('./src/manager');
//array to store created employees
const employeeData = [];
//Employee type selection
const employeeType = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: "What is the Employee's role?",
            name: 'role',
            choices: [Manager, Engineer, Intern]
        },
    ])
    .then(answer => {
        if (answer.role === 'Manager'){
            mgmtInput();
        }
        else if (answer.role === 'Engineer'){
            engInput();
        }
        else if (answer.role === 'Intern'){
            intInput();
        }
    })
}
employeeType();