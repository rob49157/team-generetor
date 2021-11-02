require('./intern.js');
const inquirer =require("inquirer")
const fs= require('fs')
const html="./index.html"
<<<<<<< HEAD
const template= ' '
=======
let template= ''

// import { appendFile } from 'fs';


let intern = new intern()
function testtt(){
  intern.getSchool();
}
>>>>>>> ee244196afcd708476c73786c2b21dff9a6d7e9c


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
<<<<<<< HEAD
    template +=`<div id= engineer> Intern name ${response.name} \n\n Intern id: ${response.id}\n\n Intern Email ${response.email}\n\n Intern Github ${response.school}`
    fs.appendFile('./page.html',template,function(err){
        if(err){
            console.log(err)
        }
    })
    })
  
=======
    template +=`<div id= "engineer"> Intern name ${response.name} \n\n Intern id: ${response.id}\n\n Intern Email ${response.email}\n\n Intern Github ${response.school}</div>\n </body>
    \n </html>`
    
    try {
      fs.appendFileSync('page.html', template);
      console.log('The "data to append" was appended to file!');
      } catch (err) {
      // Handle the error
      }
     
    
  })
 
  


>>>>>>> ee244196afcd708476c73786c2b21dff9a6d7e9c
