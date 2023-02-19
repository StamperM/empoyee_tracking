// allows for use of mysql2 npm
const mysql = require("mysql2");
// allows use of inquirer npm
const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();
// npm for creating the table

const cTable = require("console.table");
const {
  optionList,
  newDepartment,
  newRole,
  newEmployee,
} = require("./scripts/questions");
const {
  allDepartments,
  allRoles,
  viewAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
} = require("./scripts/queries");
const PORT = process.env.port || 3020;
// connects to the database

// allows use of json objects and to return a post

// manager prompts/questions to navigate things to do
function employeeTrackerInfo() {
  prompt(optionList).then((answers) => {
    switch (answers.selection) {
      case "View all departments":
        allDepartments()
        .then(employeeTrackerInfo);
        break;
      case "View all roles":
        allRoles()
        .then(employeeTrackerInfo);
        break;
      case "View all employees":
        viewAllEmployees()
        .then(employeeTrackerInfo);
        break;
      case "Add a department":
        prompt(newDepartment).then((answers) => {
          addDepartment(answers)
          .then(employeeTrackerInfo);
        });
        break;
      case "Add a role":
        inquirer.prompt(newRole).then((answers) => {
          addRole(answers)
          .then(employeeTrackerInfo);
        });

        break;
      case "Add an employee":
        prompt(newEmployee).then((answers) => {
          addEmployee(answers)
          .then(employeeTrackerInfo);
        });
    }
  });
}

function init() {
  employeeTrackerInfo();
}

init();
