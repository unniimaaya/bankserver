//import express
const express=require("express")

const dataService = require('./services/data.services')

 //create app using 
const app= express()

//parse json
app.use(express.json())


// resolving http request

// get request-to fetch  
app.get('/',(req,res)=>{
    res.status(401) .send("GET REQuest !!")
})
//post request
app.post('/',(req,res)=>{
    res.send("POST REQUEST !!")
})
// put request
app.put('/',(req,res)=>{
    res.send("PUT REQuest !!")
})

// patch request
app.patch('/',(req,res)=>{
    res.send("PATCH REQUEST !!")
})
// delete request
app.delete('/',(req,res)=>{
    res.send("DELETE REQUEST !!")
})

//register API
app.post('/register',(req,res)=>{
    console.log(req.body.acno);
  const result= dataService.register(req.body.acno,req.body.password,req.body.uname)
  res.status(result.statusCode).json(result)
})

//login api
app.post('/login',(req,res)=>{
    console.log(req.body);
    const result=dataService.login(req.body.acno,req.body.password)
    res.status(result.statusCode).json(result)
})

//deposit api
app.post('/deposit',(req,res)=>{
    console.log(req.body);
    const result=dataService.deposit(req.body.acno,req.body.password,req.body.amt)
    res.status(result.statusCode).json(result)
})

//withdrawal api

app.post('/withdrawal',(req,res)=>{
    console.log(req.body);
    const result=dataService.withdrawal(req.body.acno,req.body.password,req.body.amt)
    res.status(result.statusCode).json(result)
})

// transaction

app.post('/getTransaction',(req,res)=>{
    // console.log(req.body);
    const result =dataService.getTransaction(req.body.acno)
    res.status(result.statusCode).json(result)
})
 




//set port numbr of server
app.listen(3000,()=>{
    console.log("server started at 3000");
})
