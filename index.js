//modules
const inquirer = require("inquirer");
const fs = require("fs");
//required files
const Engineer = require('./src/engineer');
const Intern = require('./src/intern');
const Manager = require('./src/manager');
const { type } = require("os");
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

const mgmtInput = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'mgrName',
            message: 'Enter name of manager.'
        },
        {
            type: 'input',
            name: 'mgrId',
            message: 'Enter ID for the manager.'
        },
        {
            type: 'input',
            name: 'mgrEmail',
            message: 'Enter the email for the manager.'
        },
        {
            type:
        }
    ])
}