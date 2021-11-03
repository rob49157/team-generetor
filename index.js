const { fstat } = require("fs")
const inquirer =require("inquirer")
const fs= require('fs')
const Engineer = require('./engineer')
const Intern = require('./intern')


const Manager = require("./manager")



let teamMembers = []

addNewMember()
function addNewMember(){
     inquirer.prompt([
    {
        type:'input',
        message:"Enter team member's name:",
        name: 'name'
    },
    {
        type:"list",
        message:"Select team member's role:",
        name:"role",
        choices:["Engineer", "intern", 'manager']
    },
    {
        type:'input',
        message:"enter team member's id:",
        name:'id'
    },
    {
        type:'input', 
        message:"Enter team member's email:",
        name:'email'
    }
  ])
  .then(function({name, role, id, email}){
      console.log(name)
        if (role === "Engineer") {
            inquirer.prompt([
                {
                    type:'input',
                    message:"Enter team member's GitHub:",
                    name:'info'
                },
                {
                    type:'list',
                    message:'Would you like to add any additional team members?',
                    choices:['yes', 'no'],
                    name:'addMoreMembers'
                }
                
            ]).then(function({info, addMoreMembers}) {
                let engineer = new Engineer(id, name, email, info)
                teamMembers.push(engineer)
                
                if (addMoreMembers === 'yes'){
                    addNewMember()
                } else {
                    addMemberToHtml()
                }
            })
        } else if (role === "intern") {
            inquirer.prompt([
                {
                    type:'input',
                    message:"Enter your school name:",
                    name:'school'
                },
                {
                    type:'list',
                    message:'Would you like to add any additional team members?',
                    choices:['yes', 'no'],
                    name:'addMoreMembers'
                }
            ]).then(function({info, addMoreMembers}) {
                let intern = new Intern(id, name, email, info)
                teamMembers.push(intern)
                // addMemberToHtml(engineer)
                if (addMoreMembers === 'yes'){
                    addNewMember()
                } else {
                    addMemberToHtml()
                }
            })
        } else if (role === "manager") {
            inquirer.prompt([
                {
                    type:'input',
                    message:" Office number:",
                    name:'officenumber'
                },
                {
                    type:'list',
                    message:'Would you like to add any additional team members?',
                    choices:['yes', 'no'],
                    name:'addMoreMembers'
                }
            ]).then(function({info, addMoreMembers}) {
                let manager = new Manager(id, name, email, info)
                teamMembers.push(manager)
                // addMemberToHtml(engineer)
                if (addMoreMembers === 'yes'){
                    addNewMember()
                } else {
                    addMemberToHtml()
                }
            })
        }
  })
}



function addMemberToHtml() {
    html = `
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Document</title>
    </head>
    <body>
    <h1>My Team</h1>
    `

    for (let i = 0; i < teamMembers.length; i++) {
        member = teamMembers[i]
        if (member.getRole() === "engineer") {
            html += `
            <div class="card">
                <h1 class="card-header">${member.getName()}</h1>
                <h2>${member.getRole()}</h2>
                    <ul>
                        <li>id: ${member.getId()}</li>
                        <li>email: ${member.getEmail()}</li>
                        <li>github: ${member.getGithub()}</li>
                    </ul>
            </div>
            `
        }
        else if (member.getRole() === "intern") {
            html += `
            <div class="card">
                <h1 class="card-header">${member.getName()}</h1>
                <h2>${member.getRole()}</h2>
                    <ul>
                        <li>id: ${member.getId()}</li>
                        <li>email: ${member.getEmail()}</li>
                        <li>github: ${member.getschool()}</li>
                    </ul>
            </div>
            `
        }
    
        else if (member.getRole() === "manager") {
            html += `
            <div class="card">
                <h1 class="card-header">${member.getName()}</h1>
                <h2>${member.getRole()}</h2>
                    <ul>
                        <li>id: ${member.getId()}</li>
                        <li>email: ${member.getEmail()}</li>
                        <li>github: ${member.getOfficeNumer()}</li>
                    </ul>
            </div>
            `
        }
    }

    html += `
    </body>
    </html>
    `
    fs.appendFile("./temp.html", html,function(err){
        if(err){
            console.log(err)
        }
    })
}