const inquirer = require('inquirer');
const { allowedNodeEnvironmentFlags } = require('process');

function menu() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'What would you like to do?',
                choices: ['View all Departments', 'View all Roles', 'View all Employees', 'Add Department', 'Add Role', 'Add Employee', 'Quit']
            }.then(response => {
                if (response.choice === 'View all Departments') {
                    allDepartments()
                }
                else if (response.choice === 'View all Roles') {
                    allRoles()
                }
                else if (response.choice === 'View all Employees') {
                    allEmployees()
                }
                else if (response.choice === 'Add Department') {
                    addDepartment()
                }
                else if (response.choice === 'Add Role') {
                    addRole()
                }
                else if (response.choice === 'Add Employee') {
                    addEmployee()
                }
                else if (response.choice === 'Quit') {
                    console.log('Goodbye!');
                }
            })
        ])
}

function allDepartments() {

}

function allRoles() {

}

function allEmployees() {

}

function addDepartment() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'departmentName',
                message: 'What is the name of the department?'
            }
        ]).then(response => {
            console.log(`Added ${response.departmentName} to the database`);
            menu()
        })
}

function addRole() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'roleName',
                message: 'What is the name of the role?'
            },
            {
                type: 'input',
                name: 'salary',
                message: 'What is the salary of the role?'
            },
            {
                type: 'input',
                name: 'roleDepartment',
                message: 'Which department does the role belong to?'
            },
        ]).then(response => {
            console.log(`Added ${response.roleName} to the database`);
            menu()
        })
}

function addEmployee() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'firstName',
                message: "What is the employee's first name?"
            },
            {
                type: 'input',
                name: 'lastName',
                message: "What is the employee's last name?"
            },
            {
                type: 'input',
                name: 'employeeRole',
                message: "What is the employee's role?"
            },
            {
                type: 'input',
                name: 'manager',
                message: "Who is the employee's manager?"
            },
        ]).then(response => {
            console.log(`Added ${response.firstName} ${response.lastName} to the database`);
            menu()
        })
}

menu()