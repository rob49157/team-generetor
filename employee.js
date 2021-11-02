const inquirer =require("inquirer")
const fs= require('fs')
const html="./index.html"
const template= ''

class employee{
    constructor(id,name,email){
        this.name=name
        this.email=email
        this.id=id
        }

    getName() {
        return this.name
    } 
    getId() {
        return this.id
    }   
    getEmail() {
        return this.email
    }

    getRole() {
        return "Employee"
    }
}

<<<<<<< HEAD
module.exports = employee
=======
module.exports.employee = employee;
>>>>>>> ee244196afcd708476c73786c2b21dff9a6d7e9c
