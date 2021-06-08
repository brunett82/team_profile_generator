//modules
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
//required files
const Engineer = require('./src/engineer');
const Intern = require('./src/intern');
const Manager = require('./src/manager');
const publish = require('./htmlPublish')
//variables for output
const finalDir = path.resolve(__dirname, 'distro');
const finalPath = path.join(finalDir, './index.html');
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
            type: 'input',
            name: 'officeNum',
            message: "Enter the manafer's office number."
        },
        {
            type: 'confirm',
            name: 'addMore',
            message: 'Would you like to enter another employee?'
        },
    ])

    .then(answer => {
        const mgr = new Manager(answer.mgrName, answer.mgrId, answer.mgrEmail, answer.officeNum);
        employeeData.push(mgr);
        console.log(employeeData)

        if (answer.addMore){
            employeeType();
        }
        else {
            let info = publish(employeeData);
            fs.writeFile('./distro/index.html', info, (err) => {
                if (err) throw err;
            })
        }
    })
}

const engInput = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engName',
            message: 'Enter name of engineer.',
        },
        {
            type: 'input',
            name: 'engId',
            message: 'Enter ID for the engineer.',
        },
        {
            type: 'input',
            name: 'engEmail',
            message: 'Enter the email for the engineer.',
        },
        {
            type: 'input',
            name: 'engGit',
            message: "Enter the engineer's GitHub username."
        },
        {
            type: 'confirm',
            name: 'addMore',
            message: 'Would you like to enter another employee?',
        },
    ])
    .then(answer => {
        const eng = new Engineer(answer.engName, answer.engId, answer.engEmail, answer.engGit);
        employeeData.push(eng);
        console.log(employeeData);

        if (answer.addMore){
            employeeType();
        }
        else {
            let info = publish(employeeData);
            fs.writeFile('./distro/index.html', info, (err) => {
                if (err) throw err;
            })
        }
    })
}
const intInput = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'intName',
            message: 'Enter name of intern.',
        },
        {
            type: 'input',
            name: 'intId',
            message: 'Enter ID for the intern.',
        },
        {
            type: 'input',
            name: 'intEmail',
            message: 'Enter the email for the intern.',
        },
        {
            type: 'input',
            name: 'intSchool',
            message: "Enter the Intern's school."
        },
        {
            type: 'confirm',
            name: 'addMore',
            message: 'Would you like to enter another employee?',
        },
    ])
    .then(answer => {
        const int = new Intern(answer.intName, answer.intId, answer.intEmail, answer.intSchool);
        employeeData.push(int);
        console.log(employeeData);

        if (answer.addMore){
            employeeType();
        }
        else {
            let info = publish(employeeData);
            fs.writeFile('./distro/index.html', info, (err) => {
                if (err) throw err;
            })
        }
    })
}

