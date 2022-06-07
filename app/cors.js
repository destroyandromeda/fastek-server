const Cors = (req, res, next) => {

    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.header('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, content-type, Content-Type, Accept, Authorization");
    res.header("Access-Control-Expose-Headers", "Content-Length");
    res.header("Access-Control-Max-Age", "86400");
    next();
}


export {
    Cors
};