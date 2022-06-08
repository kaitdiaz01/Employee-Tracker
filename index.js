const inquirer = require("inquirer");
const db = require("./db/connection");
require("console.table");

mainMenu();

function mainMenu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: [
          {
            name: "View All Employees",
            value: "VIEW_EMPLOYEES",
          },
          {
            name: "View All Departments",
            value: "VIEW_DEPARTMENTS",
          },
          {
            name: "View All Roles",
            value: "VIEW_ROLES",
          },
          {
            name: "Add a new employee",
            value: "ADD_EMPLOYEE",
          },
          {
            name: "Add a new department",
            value: "ADD_DEPARTMENT",
          },
          {
            name: "Add New Role",
            value: "ADD_ROLE",
          },
          {
            name: "Update Employee Role",
            value: "UPDATE_ROLE",
          },
          {
            name: "Quit",
            value: "QUIT",
          },
        ],
      },
    ])
    .then((data) => {
      //call function dpeending on what the user chooses
      // if conditional or switch case or when
      // let choices = data.choices;
      switch (data.choice) {
        case "VIEW_EMPLOYEES":
          viewEmployees();
          break;
        case "VIEW_DEPARTMENTS":
          viewDeparments();
          break;
        case "VIEW_ROLES":
          viewRoles();
          break;
        case "ADD_EMPLOYEE":
          addEmployee();
          break;
        case "ADD_DEPARTMENT":
          addDepartment();
          break;
        case "ADD_ROLE":
          addRole();
          break;
        case "UPDATE_ROLE":
          updateRole();
          break;
        default:
          quit();
      }
    });
}

function viewEmployees() {
  db.query(`SELECT * FROM employee;`, (err, results) => {
    if (err) {
      console.log(err);
    }
    console.log("\n");
    console.table(results);
    mainMenu();
  });
}

function viewDeparments() {
    db.query(`SELECT * FROM department;`, (err, results) => {
        if (err) {
          console.log(err);
        }
        console.log("\n");
        console.table(results);
        mainMenu();
    })
    
}

function viewRoles() {
    db.query(`SELECT * FROM role;`, (err,results) => {
        if (err) {
            console.log(err);
          }
          console.log("\n");
          console.table(results);
          mainMenu();
    })
}

function addEmployee() { 
    db.connect(function(err) {
        if (err) throw err;
        const sql = 'INSERT into employees.employee (first_name, last_name, role_id) VALUES ?'
        const values = [
            ['Gerry', 'Fluffs',1],
            ['Zee', 'Man', 2]
        ];
        db.query(sql, [values], (err,results) => {
            if (err) {
                console.log(err);
              }
              console.log("\n");
              console.log(results.insertId);
              
              mainMenu();
        })
    })
    
}