const inquirer =require("inquirer")
const fs= require('fs')

class employee{
    constructor(id,name,email){
        this.name=name
        this.email=email
        this.id=id
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
      name:'email:'}
    ])
// creat fs.writefile(html). also add the question get name
    getName(){
      console.log(`Name: ${this.name}`)

    }

    getid(){
      console.log(`id: ${this.id}`)
    }

    getemail(){
      console.log(`Email: ${this.email}`)
    }

    getRole(){

      returns= employee  
    }

}