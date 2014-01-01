var express = require('express'),
    items = require('../app/controllers/items.js');

module.exports = function(app, config) {

    app.get('/pc', items.listAll );

    app.get('/m', function(req, res) {
        res.render('m_index');
    });

};

