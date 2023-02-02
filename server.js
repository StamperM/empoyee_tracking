// allows you to use express npm
const express = require("express");
// allows for use of mysql2 npm
const mysql = require("mysql2");
// allows use of inquirer npm
const inquirer = require("inquirer");
const { appendFile } = require("fs");
const app = express();
const prompt = inquirer.createPromptModule();
// connects to the database
const db = mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"",
        database: employee_tracker
    }
)
prompt(questions)
.then();
// allows use of json objects and to return a post
app.use(express.urlencoded({extended:false}));
app.use(express.json());

