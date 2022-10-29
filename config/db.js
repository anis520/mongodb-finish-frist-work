const mongoose =require('mongoose')
const colors=require('colors')





// mongodb  connction


const mongoDBConnection=async()=>{


    try{
          
        const connect = await mongoose.connect(process.env.MONGO_URI)
         console.log('monogDB connected success full '.bgCyan);
    }catch(error){
 
       console.log(`${error.message}`.bgMagenta.white);
 
    }




}



module.exports=mongoDBConnection