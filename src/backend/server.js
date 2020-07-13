const express=require('express');
const mongoClient=require('mongodb').MongoClient;
const app=express()
const path = require('path')
const controller=require('./controller')
const bodyParser=require('body-parser')
app.use(express.static(path.join(__dirname,"../../dist/FP")));

app.use(bodyParser.json({
  limit:'52mb'
}));
app.use(bodyParser.urlencoded({
  extended: false
}));
//app.use('/api',controller)

app.post('/upload',(req,res,next)=>{  
      let dbo=app.locals.dbObject.db('FP');
      console.log("bu hahaha",req.body)
      dbo.collection('CSVS').insertMany(req.body,(err,success)=>{
            if(err){
                console.log("error",err)
            }
            else
              console.log("success",success)
      })
})
app.get('/runMain',(req,res)=>{
  var spawn = require("child_process").spawn; 
  console.log("main buhahaha")
  // Parameters passed in spawn - 
  // 1. type_of_script 
  // 2. list containing Path of the script 
  //    and arguments for the script  
    
  // E.g : http://localhost:3000/name?firstname=Mike&lastname=Will 
  // so, first name = Mike and last name = Will 
  var process = spawn('python',["./main.py"] ); 
 
  process.stdout.on('data', function(data) { 
      res.send(data.toString()); 
  }) 

})

app.use((req,res,next)=>{
  res.send({message:`${req.url} is invalid!`});
});

mongoClient.connect("mongodb+srv://Admin:Admin@cluster0-q4yrs.mongodb.net/FP/CSVS?retryWrites=true&w=majority",{useUnifiedTopology:true},(err,client)=>{
        if(!err){
                console.log("Conntected to Mongo !")
                const port =  3000;
                app.locals.dbObject=client;
                app.listen(port,()=>{
                        console.log("server listening on "+port)
                })


        }
        else{
            console.log("error in connecting")
        }
})