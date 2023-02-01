DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE employee_tracker;

USE employee_tracker;


CREATE TABLE department(
    id: INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name: VARCHAR(30),
);

CREATE TABLE role (
    id: INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title: VARCHAR(30),
    salary; DECIMAL,
    department_id: INT
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
   

);

CREATE TABLE employee(
    id: INT,
    first_name: VARCHAR(30),
    last_name: VARCHAR(30),
    role_id: INT,
    manager_id:INT
    FOREIGN KEY (role_id)
    REFERENCES role (id)
    ON DELETE SET NULL

);