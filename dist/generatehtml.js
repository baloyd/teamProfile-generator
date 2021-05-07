function generateHTML(data){
    console.log(data);
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
     <div class="card" style="width: 18rem;">

<div class="card-body">
  <h5 class="card-title">${data.manager}</h5>
  <p class="card-text">Manager</p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">${data.mgrEEid}</li>
  <li class="list-group-item">${data.mgrEmailAddress}</li>
  <li class="list-group-item">${data.officeNumber}</li>
</ul>
</div>
</body>
</html>`;

}
module.exports = generateHTML;