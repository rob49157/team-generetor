const Interntest= require('./intern')

describe('engineer',()=>{
    it('should return the id username',()=>{
        const obj = new Interntest(1, 'roberto', 'robertopaipo@hotmail.com', 'centennial') 
        
        expect(obj.getId()).toEqual(1)
    })
    it('should return the name username',()=>{
        const obj = new Interntest(1, 'roberto', 'robertopaipo@hotmail.com', 'rob@github') 
        
        expect(obj.getName()).toEqual('roberto')
    })
    it('should return the email username',()=>{
        const obj = new Interntest(1, 'roberto', 'robertopaipo@hotmail.com', 'rob@github') 
        
        expect(obj.getEmail()).toEqual('robertopaipo@hotmail.com')
    })
    it('should return the  School username',()=>{
        const obj = new Interntest(1, 'roberto', 'robertopaipo@hotmail.com', 'centennial') 
        
        expect(obj.getschool()).toEqual('centennial')
    })
})