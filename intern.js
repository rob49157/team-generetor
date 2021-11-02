const employee = require("./employee")
class intern extends employee{
    constructor(id, name, email, school){
        super(id,email,name,)
        this.school=school
    }

    
    getschool(){
    return this.school
    
}

    getRole(){
        return "intern"
    }
}
module.exports = intern