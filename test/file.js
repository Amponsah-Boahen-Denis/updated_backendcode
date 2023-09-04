// const express= require('express')
// const app =express();

// app.get('', (req,res)=>{
// res.send('hello my love')
// })
//  app.get('/index',(req,res)=>{
//     res.send(user.create(
//         name: body.name,
//         age:body.age
//     ))
//  })
// const localhost=3000 || process.env.PORT;
// app.listen(localhost);


// const mongoose =require('mongoose')
//   const user= new mongoose.schema({
//     name:String,
//     age:Number
//   })

   var bb ='my world here'
  function love(msg){
    const result=msg[0].toUpperCase() + msg.slice(1,2) + ' '
    +  msg[3].toUpperCase() + msg.slice(4,8) + ' '
    +  msg[9].toUpperCase() + msg.slice(10,13)
     console.log(result)
   };
  love(bb);


  var me ='my world here'
  function last(msg){
    const result= msg.slice(0,1) + msg[1].toUpperCase() +' '
     + msg.slice(2,7) +  msg[7].toUpperCase() + ' '
     + msg.slice(8,12) + msg[12].toUpperCase()
     console.log(result)
   };
  last(me);
//   var say='my love here'
// console.log(arr)
  