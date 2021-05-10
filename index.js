//Packages needed for the application
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("./node_modules/inquirer")
const fs = require("fs");


//array that will hold the information of each team member as its created
const employees = [ ]
//An array of questions for user input to populate the html file

inquirer.prompt([
   {
      type: "input",
      name: "manager",
      message: "What is your team manager's name?"
   }, {
      type: "input",
      name: "mgrEEid",
      message: "What is your team manager's employee ID?"
   }, {
      type: "input",
      name: "mgrEmailAddress",
      message: "What is your team manager's email address?"
   }, {
      type: "input",
      name: "officeNumber",
      message: "What is your team manager's office number?"
   }, {
      type: "list",
      name: "addMember",
      message: "Which type of team member would you like to add?",
      choices: ["Engineer", "Intern", "I don't want to add any more team members"]

   }]).then(data => {
      //creates a new instance of Manager with the information retrieved from the prompt and pushes it to the employee array
      employees.push(new Manager (data.manager, data.mgrEEid, data.mgrEmailAddress, data.officeNumber))
      //if user chooses to add an Engineer, then the addEngineer function will run
      if (data.addMember === "Engineer") {
         
       return  addEngineer();
       //if user chooses to add an Intern, then the addIntern function will run
      } else if (data.addMember === "Intern") {
        return addIntern();
      } else {
         console.log(employees)
         //creates an html file named team-generator using the generateHTML function that holds the markdown by passing the employees array to populate the corresponding fields
         writeToFile("team-generator.html", generateHTML (employees), error=>{
         
         })
         
      }
      
   });


//function to add engineer  
function addEngineer() {
   return inquirer.prompt([{
      type: "input",
      name: "engineer",
      message: "What is your engineer's name?"
   }, {
      type: "input",
      name: "engEEid",
      message: "What is your engineer's employee ID?"
   }, {
      type: "input",
      name: "engEmailAddress",
      message: "What is your engineer's email address?"
   }, {
      type: "input",
      name: "github",
      message: "What is your engineer's Github?"
   }, {
      type: "list",
      name: "addMember",
      message: "Which type of team member would you like to add?",
      choices: ["Engineer", "Intern", "I don't want to add any more team members"]

   }]).then(data => {
      employees.push(new Engineer (data.engineer, data.engEEid, data.engEmailAddress, data.github))
      if (data.addMember === "Engineer") {
        return addEngineer();
      } else if (data.addMember === "Intern") {
       return addIntern();
      } else {
         console.log(employees)
         writeToFile("team-generator.html", generateHTML (employees), error=>{
         
         })
      }
   });
}
// function to add intern
function addIntern() {
  return inquirer.prompt([{
      type: "input",
      name: "intern",
      message: "What is your intern's name?"
   }, {
      type: "input",
      name: "intEEid",
      message: "What is your intern's employee ID?"
   }, {
      type: "input",
      name: "intEmailAddress",
      message: "What is your intern's email address?"
   }, {
      type: "input",
      name: "school",
      message: "What school does your intern go to?"
   }, {
      type: "list",
      name: "addMember",
      message: "Which type of team member would you like to add?",
      choices: ["Engineer", "Intern", "I don't want to add any more team members"]

   }]).then(data => {
      employees.push(new Intern (data.intern, data.intEEid, data.intEmailAddress, data.school))
      if (data.addMember === "Engineer") {
        addEngineer();
      } else if (data.addMember === "Intern") {
        addIntern();

      } else {
         console.log(employees)
         writeToFile("team-generator.html", generateHTML (employees), error=>{
         
         })
      }
   });
}


// A function to write html file
function writeToFile(fileName, data, error) {
   


   fs.writeFile("team-generator.html", generateHTML(employees), error => {
      if (error) {
         return console.log(error);
      }
      console.log("website created successfully!")
   })
}

//function that holds html markdown
function generateHTML (employees){ 
return `<!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <meta http-equiv="X-UA-Compatible" content="ie=edge" />
       <link
         rel="stylesheet"
         href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
       />
       <link
         rel="stylesheet"
         href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
         integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
         crossorigin="anonymous"
       />
       <title>Team Profile Generator</title>
     </head>
     <div class="container-fluid">
     <div class="row">
   <div class="col-12 jumbotron p-2 d-flex align-items-center justify-content-center m-0 .bg-danger">
       <h1 class="display-4 ">My Team</h1> </div></div></div>
     <body>
     <div class="card" style="width: 18rem;">

<div class="card-body">
  <h5 class="card-title">${employees.name}</h5>
  <p class="card-text">Manager</p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">Employee ID: ${employees.id}</li>
  <li class="list-group-item">Email: ${employees.email}</li>
  <li class="list-group-item">Office #: ${employees.officeNumber}</li>
</ul>
</div>
<div class="card-body">
<h5 class="card-title">${employees.engineer}</h5>
  <p class="card-text">Engineer</p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">Employee ID: ${employees.engEEid}</li>
  <li class="list-group-item">Email: ${employees.engEmailAddress}</li>
  <li class="list-group-item">Github: ${employees.github}</li>
</ul>
</div>
<div class="card-body">
<h5 class="card-title">${employees.intern}</h5>
  <p class="card-text">Intern</p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">Employee ID: ${employees.intEEid}</li>
  <li class="list-group-item">Email: ${employees.intEmailAddress}</li>
  <li class="list-group-item">Github: ${employees.school}</li>
</ul>
</div>
</body>
</html>`;
}