const config = require('../../config');
const crypto = require('crypto');
const api = require('dgtm-clienteAPI');

const service = require('../services/createtoken');

api.setConfig(config.dgtmApi);

module.exports.authenticate = function(req, res) {
  // console.log(req.body);
  let shasum = crypto.createHash('sha1');
  shasum.update(req.body.password);
  let password = shasum.digest('hex');
  let usuario = req.body.username;
  password = password.toUpperCase();

  api.callService("PermisosUsuarioInternet", "POST", "application/json",{"run":usuario,"clave":password})
  .then(function(p) {

      var apps = p.usuarios.usuario.personas.persona.aplicaciones.aplicacion;

            if(!Array.isArray(apps))
            {
              apps = [apps];
            }

            apps.forEach(function(app){
              if(app.codigo===config.appId)
              {
              res.json({
                  success: true,
                  message: 'Enjoy your token!',
                  token: service.createToken(usuario)
                });
              }
            })
  })
  .catch(function(err) {
      console.log(JSON.stringify(err) + " ----error auth api PermisosUsuarioInternet backend----");
      res.json({
          success: false,
          });

  });

};
