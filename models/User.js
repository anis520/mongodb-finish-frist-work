const mongoose=require('mongoose')




//creae Schma 

const UserSchema =mongoose.Schema({

  name :String,
  text  :String,
  img:String,
  id:Number



},{timestamps:true})





// create collection 

module.exports=mongoose.model('allmobile',UserSchema)


