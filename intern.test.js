const Interntest= require('./intern')

describe('engineer',()=>{
    it('should return the id username',()=>{
        const obj = new Interntest(1, 'roberto', 'robertopaipo@hotmail.com', 'centennial') 
        
        expect(obj.getId()).toEqual(1)
    })
    it('should return the email ',()=>{
        const obj = new Interntest(1, 'roberto', 'robertopaipo@hotmail.com', 'centennial') 
        
        expect(obj.getName()).toEqual('robertopaipo@hotmail.com')
    })
    it('should return the name ',()=>{
        const obj = new Interntest(1, 'roberto', 'robertopaipo@hotmail.com', 'centennial') 
        
        expect(obj.getEmail()).toEqual('roberto')
    })
    it('should return the  School ',()=>{
        const obj = new Interntest(1, 'roberto', 'robertopaipo@hotmail.com', 'centennial') 
        
        expect(obj.getschool()).toEqual('centennial')
    })
})