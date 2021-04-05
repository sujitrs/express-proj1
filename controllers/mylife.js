// @desc    Get all mylife
// @route   GET /api/v1/bootcamp
// @access  Public
exports.getMyLifes=(req,res,next)=>{
    res
        .status(200)
        .json({success:true, msg:'all data'});
}

// @desc    Get single mylife
// @route   GET /api/v1/bootcamp/:id
// @access  Public

exports.getMyLife=(req,res,next)=>{
    res.status(200).json({success:true, msg:`${req.params.id} data`});
}

// @desc    Create single mylife
// @route   POST /api/v1/bootcamp/
// @access  Public

exports.postMyLife=(req,res,next)=>{
    res.status(200).json({success:true, msg:'data created'});
}

// @desc    Update single mylife
// @route   PUT /api/v1/bootcamp/:id
// @access  Public

exports.putMyLife=(req,res,next)=>{
    res.status(200).json({success:true, msg:`${req.params.id} data updated`});
}