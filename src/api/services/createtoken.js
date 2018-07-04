const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../../config');

exports.createToken = function(user) {

  var payload = {
    sub: user,
    iat: moment().unix(),
    exp: moment().add(14, "years").unix(),
  };
  return jwt.encode(payload, config.secret);
};
