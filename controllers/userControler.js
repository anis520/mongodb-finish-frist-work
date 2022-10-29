

const sendAEmail = require("../utility/sendmail")

const user=(req,res)=>{


    res.render('user/user.ejs')
    
    
    
    
    }

    

   const userData =(req,res)=>{

    sendAEmail(req.body.email,'created ')

res.json(req.body)

    
    
}


module.exports={user,userData}