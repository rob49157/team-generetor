const employee = require("./employee")
class intern extends employee{
    constructor(school){
        super(id,email,name)
    }

    
    getschool(){
    this.school=school}

    getRole(){
        return "intern"
    }
}
module.exports = intern