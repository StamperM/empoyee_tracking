// allows you to use express npm
const express = require("express");
// allows for use of mysql2 npm
const mysql = require("mysql2");
// allows use of inquirer npm
const inquirer = require("inquirer");
const fs= require("fs");
const app = express();
const prompt = inquirer.createPromptModule();
const questions = require("./scripts/questions")
const optionList = require("./scripts/questions")
const PORT = 3020
// connects to the database

const db = mysql.createConnection(
    {
        host:"127.0.0.1",
        user:"root",
        password:"",
        database: "employee_tracker_db"
    },
);

// allows use of json objects and to return a post
app.use(express.urlencoded({extended:false}));
app.use(express.json());
// manager prompts/questions to navigate things to do
prompt(optionList)
.then((answers) => {
    console.log(answers);
    if(answers.selection === "View all departments"){
        
    }
});

// display all employees

   


app.listen(PORT,()=> console.log("listening!!!!"));

// diplay all roles
// display all employees
// Update employeenod