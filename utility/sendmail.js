const nodemailer = require('nodemailer')





const sendAEmail =(to,sub)=>{




const number =Math.floor(Math.random()*1000000);
console.log(number);


        const transport=nodemailer.createTransport({
    
           host:process.env.EMAIL_HOST,
           port:process.env.EMAIL_PORT,
           auth :{

                    user:process.env.EMAIL_USER,
                    pass:process.env.EMAIL_PASS

           }

})
transport.sendMail({


   from:'ahisahad520@gmail.com',
   to:to,
   subject:sub,
   html:`
   <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .plan{
                width: 60vh;
                height: auto;
                border: 1px solid gray;
                border-radius: 10px;
                padding:20px;
                 margin: 100px auto 0px;
                

        }
         .plan .logo{
               width: 100px;
               height: auto;
               /* margin-left:0px; */
              display: block;
              margin: 0px auto;
              
        

         }
      .planimg{
            width: 100%;
            height: 250px;
            object-fit: cover;
            margin-top: 30px;

      }


    </style>
</head>
<body>
    


                <div class="plan">
                       
                     <img class="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwAMVIYFU7fBkYkhI_BGVqizydCiwjRIJvjQ&usqp=CAU" alt="sorobindu">
                     <hr>
                      <img class="planimg" src="https://cdn2.vectorstock.com/i/1000x1000/20/61/man-programer-sit-chair-work-on-computer-create-vector-35182061.jpg" alt="">
                      
                       <h3 style="margin:20px 0;">hello Dear  . you are successfuly create a account</h3>
                       <p style="margin-top: 10px;display:inline-block;"> Your verify number is    <p style="color:red;front-size:20px;display:inline-block;">${number}</p>     consectetur adipisicing elit. Voluptate, officiis? Quod, delectus laudantium modi aspernatur nesciunt velit commodi, neque rem distinctio recusandae natus quam ex. Veritatis ipsam magni saepe tenetur!</p>
                       <button style="padding:8px 50px;background-color: #8758FF;  border: none;border-radius: 5px;margin-left:180px; margin-top: 20px;">Go to</button>



                </div>
 




</body>
</html>
   `

})



 
} 








module.exports=sendAEmail