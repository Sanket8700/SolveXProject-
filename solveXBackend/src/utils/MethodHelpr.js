const requestMethodCheck = (methods = []) => (req, res, next) => {
    if (methods?.includes(req?.method)) return next();
    res.status(400)
    res.json({
        'status': 400,
        'message': "Method not allowed",
    })
};



module.exports={requestMethodCheck}