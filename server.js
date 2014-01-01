var express = require('express'),
    fs = require('fs'),
    env = process.env.NODE_ENV || 'dev',
    config = require('./config/config.js')[env],
    db = require('./config/db.js')(config);

var app = express();

global.db = db;

require('./config/express')(app, config);
require('./config/routes')(app, config);

app.listen(config.port);

