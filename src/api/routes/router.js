const router = require('express-promise-router')();
const config = require('../../config');

const ctrlTrip = require('../controllers/tripulante');
const ctrlAuth = require('../controllers/authentication');
const service = require('../services/authorization');


router.get('/tripulante/:id(\\d+)/', service.ensureAuthenticated, ctrlTrip.tripulanteRead);  // (\\d+)/ Validacion Solo numeros
router.post('/authenticate', ctrlAuth.authenticate)


module.exports = router;
