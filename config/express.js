var express = require('express'),
    engines = require('consolidate');

module.exports = function(app, config) {
    app.set('showStackError', true);
    app.use(express.favicon());
    app.use('/static', express.static(config.rootPath + '/static'));

    app.set('views', config.rootPath + '/app/views');
    app.engine('html', engines.mustache);
    app.set('view engine', 'html');

    app.use(express.compress({
        filter: function (req, res) {
            return /json|text|javascript|css/.test(res.getHeader('Content-Type'))
        },
        level: 9
    }));
};

