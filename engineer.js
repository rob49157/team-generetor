class Engineer extends employee{
    constructor(github){
    super(name,email)
    }

    question= inquirer.prompt([{
        type:'input',
        message:' Whats your name?',
        name: 'name'},
  
        {type:'input',
        message:"Enter id:",
        name:'id'},
  
        {type:'input',
        message:'Enter email:',
        name:'email:'},

        {type:'input',
        message:'Enter github:',
        name:'github'}
      ])


    github(){

    }

    gitrole(){
        returns= Engineer
    }

}
