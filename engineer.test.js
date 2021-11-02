
const Engineertest = require('./engineer')


describe('engineer',()=>{
    it('should return the id username',()=>{
        const obj = new Engineertest(1, 'roberto', 'robertopaipo@hotmail.com', 'rob@github') 
        
        expect(obj.getId()).toEqual(1)
    })
    it('should return the name username',()=>{
        const obj = new Engineertest(1, 'roberto', 'robertopaipo@hotmail.com', 'rob@github') 
        
        expect(obj.getName()).toEqual('roberto')
    })
    it('should return the email username',()=>{
        const obj = new Engineertest(1, 'roberto', 'robertopaipo@hotmail.com', 'rob@github') 
        
        expect(obj.getEmail()).toEqual('robertopaipo@hotmail.com')
    })
    it('should return the Github username',()=>{
        const obj = new Engineertest(1, 'roberto', 'robertopaipo@hotmail.com', 'rob@github') 
        
        expect(obj.getGithub()).toEqual('rob@github')
    })
})