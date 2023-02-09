
const optionList= [
    // {
    //     type:"confirm",
    //     name:"kickoff",
    //     message: "Would you like to use the employee tracker?",

    // },
    {
        type:"choice",
        message:"What would you like to view?",
        choices:["View all departments" ,"View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"],
        name:"selection",
        when:(answers)=> answers.kickoff === true,

    },
]
const newDepartment = [
    {
        type:"input",
        message:"Name of Department",
        name:"department"
    }
]
const newRole=[
    {
        type: "input",
        message: "Name of new role",
        name: "roleName",
    },
    {
        type: "input",
        message: "What is the salary for this role?",
        name: "roleSalary",
    },
    {
        type: "input",
        message: "What department is this role for?",
        name: "roleDepartment",
        
    },
]
const newEmployee= [
    {
        type: "input",
        message: "Employee's First Name",
        name: "first",
       
    },
    {
        type: "input",
        message: "Employee's Last Name",
        name: "last",
       
    },
    {
        type: "input",
        message: "Employee's role",
        name: "role",
      
    },
    {

        type: "input",
        message: "Employee Manager",
        name: "manager",
      

    }


];

module.exports = {
  optionList,
  newDepartment,
  newRole,
  newEmployee
}