const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../../config');

exports.ensureAuthenticated = function(req, res, next) {
 if(!req.headers.authorization) {
 return res
     .status(403)
     .send({message: "Error no autorizado"});
 }

const token = req.headers.authorization.split(" ")[1];
const payload = jwt.decode(token, config.secret);

 if(payload.exp <= moment().unix()) {
     return res
     .status(401)
     .send({message: "The token expires"});
 }

 req.user = payload.sub;
    next();
}
