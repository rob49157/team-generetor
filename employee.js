const inquirer =require("inquirer")
const fs= require('fs')
const html="./index.html"
const template= ''

class employee{
    constructor(id,name,email,role){
        this.name=name
        this.email=email
        this.id=id
        this.role = role
        }

    getName(name) {
        this.name = name
    } 
    getId(id) {
        this.id = id
    }   
    getEmail(email) {
        this.email = email
    }

    getRole() {
        this.role = "Employee"
    }
}