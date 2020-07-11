const express=require('express');
const mongoClient=require('mongodb').MongoClient;
const app=express()
const path = require('path')
const cors=require('cors')
const bodyParser = require('body-parser');
mongoClient.connect("mongodb+srv://Admin:Admin@cluster0-q4yrs.mongodb.net/FP/CSVS?retryWrites=true&w=majority",(err,res)=>{
        if(!err){
                console.log("Conntected to Mongo !")
        }
        else{
            console.log("error in connecting")
        }
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
const controller=require('./controller')
const port = process.env.PORT || 3000;
app.use(cors())
app.use('/api',controller)

app.listen(port,()=>{
        console.log("port connected on"+port)
})

// Find 404 and hand over to error handler
app.use((req, res, next) => {
    res.send({ message :" ERROR 404 " })
  });
  
  // Find 404 and hand over to error handler
  app.use((req, res, next) => {
    next(createError(404));
  });
  
  // error handler
  app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
  });