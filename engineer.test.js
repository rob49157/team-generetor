
const Engineertest = require('./engineer')


describe('engineer',()=>{
    it('should return the id ',()=>{
        const obj = new Engineertest(1, 'roberto', 'robertopaipo@hotmail.com', 'rob@github') 
        
        expect(obj.getId()).toEqual(1)
    })
    it('should return the name ',()=>{
        const obj = new Engineertest(1, 'roberto', 'robertopaipo@hotmail.com', 'rob@github') 
        
        expect(obj.getName()).toEqual('roberto')
    })
    it('should return the email ',()=>{
        const obj = new Engineertest(1, 'roberto', 'robertopaipo@hotmail.com', 'rob@github') 
        
        expect(obj.getEmail()).toEqual('robertopaipo@hotmail.com')
    })
    it('should return the Github ',()=>{
        const obj = new Engineertest(1, 'roberto', 'robertopaipo@hotmail.com', 'rob@github') 
        
        expect(obj.getGithub()).toEqual('rob@github')
    })
})