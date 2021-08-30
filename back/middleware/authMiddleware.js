
var jwtUtils = require("../services/jwtService");


module.exports = {


  check: async (req, res, next) => {
    //test
    // Get user id from username
    console.log(req.headers.authorization);
    var authorization = req.headers.authorization;
     var userId = jwtUtils.getUserId(authorization);
    console.log(userId);
    if (userId == -1) {
      return res.status(401).json({ message: "unAuthorized API" });
    }
   
next();

}

 
};
