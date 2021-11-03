const employee = require('./employee')
class manager extends employee{
    constructor(id, name, email, officenumber){
        super(id, name, email)
        this.officenumber = officenumber
    }
    
    getOfficeNumer(){
        return this.officenumber
    }
    
    getRole() {
        return "manager"
    }
}
module.exports = manager