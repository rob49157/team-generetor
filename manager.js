const employee = require('./employee')
class manager extends employee{
    constructor(officenumber){
        super(id, name, email)
        this.officenumber = officenumber
    }
    
    getOfficeNumer(officenumber){
        this.officenumber = officenumber
    }
    
    getRole() {
        return "Manager"
    }
}
module.exports = manager