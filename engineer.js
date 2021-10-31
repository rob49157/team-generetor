class Engineer extends employee{
    constructor(github){
    super(name,email)
    }

    

    github(){
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
            name:'github'},


          ]).then(function(response){
            $template +=`<div id= engineer> Engineer name ${response.name} \n\n Engineer id: ${response.name}\n\n Engineer Email ${response.email}\n\n Engineer Github ${response.github}`
            fs.writeFile(html,function(err){
                if(err){
                    console.log(err)
                }
            })
      
          })

    }

    gitrole(){
        returns= Engineer
    }

}