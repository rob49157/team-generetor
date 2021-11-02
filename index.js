const inquirer =require("inquirer")
const fs= require('fs')
const html="./index.html"
const template= ' '


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
    template +=`<div id= engineer> Intern name ${response.name} \n\n Intern id: ${response.id}\n\n Intern Email ${response.email}\n\n Intern Github ${response.school}`
    fs.appendFile('./page.html',template,function(err){
        if(err){
            console.log(err)
        }
    })
    })
  