const express=require('express');
const app=express();

const userModel=require('./userModel');

app.get('/',(req,res)=>{
    res.send('Hello World');
})
app.get('/create',async (req,res)=>{
   let createdUser = await userModel.create({
    name:"pratham",
    email:"agrawalpratham2706@gmail.com",
    username:"kanha"
   }) 
   res.send(createdUser); 
})
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})