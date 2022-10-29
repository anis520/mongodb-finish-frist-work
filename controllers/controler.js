const path=require('path')
const {readFileSync,writeFileSync}=require('fs')
const nodemailer =require('nodemailer')
const { time } = require('console')
const user=require('../models/User')




// const nodeEmail=(req,res)=>{


//  const transport =nodemailer.createTransport({

//     host : 'smtp.gmail.com',
//     port :587,
//     auth :{
//                    user:'ahisahad520@gmail.com',
//                    pass:'cefkvagcfwsdgzty'

//          }




// });

// transport.sendMail({

//   from    :req.body.email,
//   to      :'ahisahad520@gmail.com',
//   subject :'user  commants',
//   text    :`Name  :${req.body.name}. Email : ${req.body.email}   .was Text you `
// })




// }










 
 

//home router
const home =async(req,res)=>{
    const teacherComments=await user.find()
    
    res.render('index',{teacherComments})
    
}



//about router
const about =(req,res)=>{

    
    res.render('about')
    
}



//bolg router
const blog =(req,res)=>{

    
    res.render('blog')
    
}



//contact router
const contact =(req,res)=>{

    
    res.render('contact')
    
}



//service router
const service =(req,res)=>{

    
    res.render('service')
    
}



//admin router
const admin =async(req,res)=>{
    const teacherComments=await user.find()
    
    res.render('admin',{teacherComments})
     
}


// req for form

const from = (req,res)=>{


   res.render('from')


}



// submit from 

const fromsub=async(req,res)=>{


      const {name,text,img}=req.body
      let id=Math.floor((Math.random()*1000000)+Date.now())
      
      await user.create({
        id:id,
        name:name,
        text:text, 
        img: req.file?req.file.filename:'abs.jpg'
        
        })
        
        
       
     


  

      
    

res.redirect('/admin')



}



//single views



const single=async(req,res)=>{
   
  const {id}=req.params;
const teacherComments=await user.findById(id)

 const datas=teacherComments

       
res.render('single',{datas})



}
const Delete=async(req,res)=>{

   const {id} =req.params
 
 await user.findByIdAndDelete(id)
 

   res.redirect('back')
}


//edit controler


const edit =async(req,res)=>{

    const {id}=req.params;
  

    const datas=await user.findById(id)
  
          
   res.render('editfrom',{datas})



}


const update=async (req,res)=>{
    
    const id =req.params.id
    
    const {name,Text,leastimg}=req.body
    const img=req.file ? req.file.filename :leastimg
 
 
   const data= await user.findByIdAndUpdate(id,{name:name,text:Text,img:img})



    res.redirect('/admin') 


 


}


// user router









    module.exports={home,about,blog,contact,service,admin,from,fromsub,single,Delete,edit,update}