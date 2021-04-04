const express = require('express');
const dotenv=require('dotenv');

dotenv.config({path:'./config/config.env'});
const app=express();
const port=process.env.PORT||5000;
app.listen(port,console.log(`Server in ${process.env.NODE_ENV} on ${port}`));