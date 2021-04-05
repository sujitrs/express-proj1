// Logging the request :using  Middleware
const logger=(req,res,next)=>{
    console.log(`${req.method} called ${req.url}`);
    next();
}

module.exports=logger;