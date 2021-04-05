const express = require('express');
const dotenv=require('dotenv');
const routes=require('./routes');
const logger=require('./middleware/logger');
const app=express();

const port=process.env.PORT||5000;

// For configuring dotnev with configuration
dotenv.config({path:'./config/config.env'});

app.use(logger); // Logging the request :using  Middleware
app.use('/api/v1/bootcamp',routes);



app.listen(port,console.log(`Server in ${process.env.NODE_ENV} on ${port}`));