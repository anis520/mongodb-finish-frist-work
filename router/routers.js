// init nodemodules 

const express= require('express')
const router=express.Router()
const {home,about,blog,contact,service,admin,from,fromsub ,single,Delete,edit,update} = require('../controllers/controler')
const path=require('path')
const multer=require('multer')

//inti  config


const storage = multer.diskStorage({

   destination:(req,file,cb)=>{

      cb(null,path.join(__dirname, '../public/images/students/'))
   },
   filename:(req,file,cb)=>{

    cb(null,file.originalname)



   }




}) 


const studentPhotoMulter=multer({


storage:storage




}).single('img');




router.get('/',home)
router.get('/about',about)
router.get('/blog',blog)
router.get('/contact',contact)
router.get('/service',service)
router.get('/admin',admin)
router.get('/from',from)
router.post('/adminf',studentPhotoMulter,fromsub)
router.get('/single/:id',single)
router.get('/delete/:id',Delete)
router.get('/edit/:id',edit)
router.post('/updateit/:id',studentPhotoMulter,update)




 

module.exports=router
