//Packages needed for the application
const inquirer=require("./node_modules/inquirer")
const fs=require("fs");
const jest = require("./node_modules/jest")

//An array of questions for user input to populate the html file
inquirer.prompt([
    {
    type:"input",
    name:"manager",
    message:"What is your team manager's name?"
 },{
    type:"input",
    name:"mgreeid",
    message:"What is your team manager's employee ID?"
 },{
    type:"input",
    name:"mgrEmailAddress",
    message:"What is your team manager's email address?"
 },{
    type:"input",
    name:"officeNumber",
    message:"What is your team manager's office number?"
 },{
    type:"list",
    name:"addMember",
    message:"Which type of team member would you like to add?",
    choices:["Engineer", "Intern", "I don't want to add any more team members"]

 }]).then(data=>{
   console.log(data)
   if (data.addMember === "Engineer"){
      addEngineer();
   }else if (data.addMember === "Intern"){
      addIntern();
   }else { writeToFile("team-generator.html",html,error)}
});

   function addEngineer() {
      inquirer.prompt([{
         type:"input",
       name:"engineer",
       message:"What is your engineer's name?"
    },{
       type:"input",
       name:"engEEid",
       message:"What is your engineer's employee ID?"
    },{
       type:"input",
       name:"engEmailAddress",
       message:"What is your engineer's email address?"
    },{
       type:"input",
       name:"github",
       message:"What is your engineer's Github?"
    },{
       type:"list",
       name:"addMember",
       message:"Which type of team member would you like to add?",
       choices:["Engineer", "Intern", "I don't want to add any more team members"]
   
    }]).then(data=>{
      console.log(data)
      if (data.addMember === "Engineer"){
         addEngineer();
      }else if (data.addMember === "Intern"){
         addIntern();
   }else { writeToFile("team-generator.html",html,error)}
});

   function addIntern(){
      inquirer.prompt([{
         type:"input",
       name:"intern",
       message:"What is your intern's name?"
    },{
       type:"input",
       name:"intEEid",
       message:"What is your intern's employee ID?"
    },{
       type:"input",
       name:"intEmailAddress",
       message:"What is your intern's email address?"
    },{
       type:"input",
       name:"school",
       message:"What school does your intern go to?"
    },{
       type:"list",
       name:"addMember",
       message:"Which type of team member would you like to add?",
       choices:["Engineer", "Intern", "I don't want to add any more team members"]
   
    }]).then(data=>{
      console.log(data)
      if (data.addMember === "Engineer"){
         addEngineer();
      }else if (data.addMember === "Intern"){
         addIntern();
      
   }else { writeToFile("team-generator.html",html,error)}
});


// A function to write html file
function writeToFile(fileName, data, error) {
   fs.writeFile("team-generator.html",html,error =>{
      if (error){
         return console.log(error);
      }
      console.log("website created successfully!")
   })
}

    //variable that will hold the html markdown for the website to be generated.
    const html=`<!DOCTYPE html>
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
</body>
</html>`;

