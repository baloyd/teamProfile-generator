//Packages needed for the application
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
      employees.push(new Manager (data.manager, data.mgrEEid, data.mgrEmailAddress, data.officeNumber, data.title))
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
      employees.push(new Engineer (data.engineer, data.engEEid, data.engEmailAddress, data.github, data.title))
      if (data.addMember === "Engineer") {
        return addEngineer();
      } else if (data.addMember === "Intern") {
       return addIntern();
      } else {

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
      employees.push(new Intern (data.intern, data.intEEid, data.intEmailAddress, data.school, data.title))
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

// will show the specific information when the card is created attributed to each role depending on the role of the employee from the array
function titleInfo(employees) {
   if (employees.title === "Manager") {
       console.log(employees.officeNumber);
       return `Office #: ${employees.officeNumber}`;
   }

   if (employees.title === "Intern") {
       return `School: ${employees.school}`;
   }

   if (employees.title === "Engineer") {
       return `GitHub:<a href="https://github.com/${employees.github}"> ${employees.github}</a>`;
   }
}

//will loop through the final array of employees and generate the html for each specific employee by populating the fields accordingly.
function getCardHTML() {
   let html = "";
   for (i = 0; i < employees.length; i++) {
       html += `<div class="card mt-4 justify-content-center bg-info text-light shadow" style="width: 18rem;">
           <div class="col card-header">
               <h4>${employees[i].name}</h4>
               <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
               <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
               <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
             </svg> <u>${employees[i].title}</u></p>
           </div>
           
           <ul class="list-group list-group-flush text-secondary">
               <li class="list-group-item">ID: ${employees[i].id}</li>
               <li class="list-group-item">Email:<a href="mailto:${employees[i].email}"> ${employees[i].email}</a></li>
               <li class="list-group-item"> ${titleInfo(employees[i])}</li>
           </ul>
       </div > `;
   }
   return html;
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
   <div class="col-12 jumbotron p-2 d-flex align-items-center justify-content-center m-0 bg-warning">
       <h1 class="display-4 text-light">My Team</h1> </div></div></div>
     <body>
     
<div class ="container-fluid p-2">
<div class="row d-flex  justify-content-around">

${getCardHTML()}

</div>
</div>
</body>
</html>`;
}