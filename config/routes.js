var express = require('express');

module.exports = function(app, config) {
    app.get('/pc', function(req, res) {
        res.render('pc_index');
    });

    app.get('/m', function(req, res) {
        res.render('m_index');
    });
};

