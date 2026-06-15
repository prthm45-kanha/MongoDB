const express=require('express');
const app=express();

const userModel=require('./userModel');

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.get('/create',async (req,res)=>{
   let createdUser = await userModel.create({
    name:"Anushka",
    email:"Anu10@gmail.com",
    username:"Anuu"
   }) 
   res.send(createdUser); 
})

app.get('/update',async (req,res)=>{
  let updatedUser=await userModel.findOneAndUpdate({username:"kanha"},{name:"Pratham Agrawal"},{new:true})
  res.send(updatedUser)
})

app.get('/read',async (req,res)=>{
    let readUser=await userModel.find({username:"tusii"});// to print only the username you want
    //   let readUser=await userModel.find(); to print all username
    res.send(readUser);
})
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})