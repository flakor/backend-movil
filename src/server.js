const express = require('express');
const path = require('path');
const cors = require('cors');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const config = require('./config');
const app = express();


process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'; //////evita problema https
require('rainbow-console');
//carga Base de datos
// require('./api/models/db');
require('./api/services/connectdb');
//carga passport
// require('./api/config/passport');
const routesApi = require('./api/routes/router');

// settings

app.set('port', process.env.PORT || config.serverport);

// middlewares

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(cors());
// Enable CORS from client-side


// app.use(passport.initialize());
// routes
// app.use('/', indexRoutes);
app.use('/api', routesApi);

// static files
// app.use(express.static(path.join(__dirname, './client/dist')));

// start the server
app.listen(app.get('port'), () => {
    console.log('server on port 3000');
});
