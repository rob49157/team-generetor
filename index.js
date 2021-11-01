require('./intern.js');
const inquirer =require("inquirer")
const fs= require('fs')
const html="./index.html"
let template= ''

// import { appendFile } from 'fs';


let intern = new intern()
function testtt(){
  intern.getSchool();
}


question= inquirer.prompt([{
    type:'input',
    message:' Whats your name?',
    name: 'name'},

    {type:'input',
    message:"Enter id:",
    name:'id'},

    {type:'input',
    message:'Enter email:',
    name:'email:'},

    {type:'input',
    message:'Enter school name:',
    name:'school'}

  ]).then(function(response){
    template +=`<div id= "engineer"> Intern name ${response.name} \n\n Intern id: ${response.id}\n\n Intern Email ${response.email}\n\n Intern Github ${response.school}</div>\n </body>
    \n </html>`
    
    try {
      fs.appendFileSync('page.html', template);
      console.log('The "data to append" was appended to file!');
      } catch (err) {
      // Handle the error
      }
     
    
  })
 
  


