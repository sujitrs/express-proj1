const express = require('express');
const dotenv=require('dotenv');
const routes=require('./routes');

const app=express();

const port=process.env.PORT||5000;
const logger=(req,res,next)=>{
    console.log(`${req.method} called ${req.url}`);
    next();
}

dotenv.config({path:'./config/config.env'});

app.use('/api/v1/bootcamp',routes);
app.use(logger);


app.listen(port,console.log(`Server in ${process.env.NODE_ENV} on ${port}`));