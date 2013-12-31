var express = require('express'),
    fs = require('fs'),
    env = process.env.NODE_ENV || 'dev',
    config = require('./config/config.js')[env],
    dbConn = require('./config/db.js')(config);

var app = express();

require('./config/express')(app, config);
require('./config/routes')(app, config);

app.listen(config.port);

