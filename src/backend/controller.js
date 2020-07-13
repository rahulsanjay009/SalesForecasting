var express=require('express');
const router=express.Router();
const fileUpload=require('express-fileupload')
const app=express()
app.use(fileUpload())
/*
//to store image in cloudinary
const cloudinary = require("cloudinary");
const cloudinaryStorage=require("multer-storage-cloudinary")
const multer = require("multer");
const { raw } = require('body-parser');
//credentials
cloudinary.config({
  cloud_name: "dzb4lmyme",
  api_key: "511935753193731",
  api_secret: "7A9DTSkYf6oJZua-GGILeRsV_dg",
});
//set storage
var storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "CSVs",
  filename: function (req, file, cb) {
    cb(undefined, file.fieldname + "-" + Date.now());
  }
});
//Configure multer middleware
var upload = multer({ storage: storage  });

router.use(express.json())
router.post("/upload",(req,res,next)=>{

        cloudinary.v2.uploader.upload('restaurant-2-products-price.csv',{ resource_type:"auto"},function(err,result){
                if(!err)
                console.log(result)
                else
                console.log(err)
        })


        //console.log(JSON.stringify(req.file))
    //console.log('url is ',req.file.secure_url)

    let dbo=req.app.locals.dbObject.db('FP');
    //req.body.csvUrl=req.file.secure_url

  /*  dbo.collection('CSVS').insertOne(req.body,(err,success)=>{
                if(err){
                        console.log("error in /uploads")
                }
                res.send({message:"user created"})
    }) 
    
    }) 
*/
router.post('/upload',(req,res,next)=>{
        console.log(req.files)
        let sampleFile=req.file
        console.log(sampleFile)
        /*sampleFile.mv('./tmp',err=>{
                if(err)
                console.log(err)
                else
                console.log("sucess")
        })*/
})




router.post('/upload',(req,res)=>{
        console.log(req.files)
})
module.exports=router;