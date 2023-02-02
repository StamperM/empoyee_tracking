const { title } = require("process");

const questions=[
    {
      type:"list",
      message:"What would you like to view?",
      Choices:["View all departments","View all roles","View all employees","Add a department","Add a role","Add an employee","Update an employee role"],
      title:"selection"

    },
    {
        type:"input",
        message:"What is the Department name?",
        title:"department",
        when:(answers.selection==="Add a departement")
    },
    {
        type:"input",
        message:"Name of new role",
        title:"roleName",
        when:(answers.selection==="Add a role")
    },
    {
        type:"input",
        message:"What is the salary for this role?",
        title:"roleSalary",
        when:(answers.selection==="Add a role")
    },
    {
        type:"input",
        message:"What department is this role for?",
        title:"roleDepartment",
        when:(answers.selection==="Add a role")
    },
    {
        type:"input",
        message:"Employee's First Name",
        title:"first",
        when:(answers.selection==="Add an Employee")
    },
    {
        type:"input",
        message:"Employee's Last Name",
        title:"last",
        when:(answers.selection==="Add an Employee")
    },
    {
        type:"input",
        message:"Employee's role",
        title:"role",
        when:(answers.selection==="Add an Employee")
    },
    {
        {
            type:"input",
            message:"Employee Manager",
            title:"manager",
            when:(answers.selection==="Add an Employee")
        }
    }
    // add in remove employee

]