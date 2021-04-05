const express = require('express');
const {getMyLifes, getMyLife,postMyLife,putMyLife }=require('./controllers/mylife');
const router=express.Router();
router.route('/').get(getMyLifes).post(postMyLife);
router.route('/:id').get(getMyLife).put(putMyLife);


module.exports=router;

