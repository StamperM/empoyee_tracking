// allows you to use express npm
const express = require("express");
// allows for use of mysql2 npm
const mysql = require("mysql2");
// allows use of inquirer npm
const inquirer = require("inquirer");
const app = express();
const prompt = inquirer.createPromptModule();
const cTable = require("console.table");
const {
  optionList,
  newDepartment,
  newRole,
  newEmployee
} = require("./scripts/questions");
const {
  allDepartments,
  allRoles,
  viewAllEmployees,
  addDepartment, addRole,addEmployee
} = require("./scripts/queries");
const PORT = process.env.port || 3020;
// connects to the database

// allows use of json objects and to return a post
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// manager prompts/questions to navigate things to do
function employeeTrackerInfo() {
  inquirer.prompt(optionList).
  then((answers) => {
    switch (answers.selection) {
      case "View all departments":
        allDepartments();
        break;
      case "View all roles":
        allRoles();
        break;
     case "View all employees":
            viewAllEmployees();
            break;
    case "Add a department":
        inquirer.prompt(newDepartment).
  then((answers) =>{

        addDepartment(answers);})
        break;
    case "Add a role":
        inquirer.prompt(newRole).then((answers)=>{ 
            addRole(answers);
        })
       
        break;
    case "Add an employee":
        inquirer.prompt(newEmplo).then((answers)=>{ 
        addEmployee(answers);
  }
);
}
  })
}

function init() {
  employeeTrackerInfo();
}
init();

app.listen(PORT, () => console.log("listening"));
