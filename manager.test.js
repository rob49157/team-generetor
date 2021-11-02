const Managertest = require('./engineer')


describe('engineer',()=>{
    it('should return the id username',()=>{
        const obj = new Managertest (1, 'roberto', 'robertopaipo@hotmail.com', '256') 
        
        expect(obj.getId()).toEqual(1)
    })
    it('should return the name username',()=>{
        const obj = new Managertest (1, 'roberto', 'robertopaipo@hotmail.com', '256') 
        
        expect(obj.getName()).toEqual('roberto')
    })
    it('should return the email username',()=>{
        const obj = new Managertest (1, 'roberto', 'robertopaipo@hotmail.com', '256') 
        
        expect(obj.getEmail()).toEqual('robertopaipo@hotmail.com')
    })
    it('should return the  officenumber',()=>{
        const obj = new Managertest (1, 'roberto', 'robertopaipo@hotmail.com', '256') 
        
        expect(obj.getOfficeNumer()).toEqual('256')
    })
})