const express = require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.status(200).json({success:true, msg:'all data'});
})

router.get('/:id',(req,res)=>{
    res.status(200).json({success:true, msg:`${req.params.id} data`});
})

router.post('/',(req,res)=>{
    res.status(200).json({success:true, msg:`data created`});
})

router.put('/:id',(req,res)=>{
    res.status(200).json({success:true, msg:`${req.params.id} data updated`});
})

module.exports=router;

