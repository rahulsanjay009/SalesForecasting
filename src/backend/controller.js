var express=require('express');
const { Interface } = require('readline');
const router=express.Router();

router.route('/uploads').post((req,res,next)=>{
    console.log('Wah re wah')
        console.log(req.files);
        res.send({
                success:true,
                message:" File uploaded!"
        })


})
module.exports=router;