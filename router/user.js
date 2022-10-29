// init nodemodules 

const express= require('express')
const router=express.Router()
const {user, userData } = require('../controllers/userControler')
const path=require('path')





 


router.get('/',user)
router.post('/',userData)





module.exports=router











