var items = require('../models/items.js');

module.exports.listAll = function(req, res) {
    var db = global.db;

    db.getConnection(function(err, conn) {
        if ( err !== null ) {
            throw new Error(err);
        } else {
            conn.query("SELECT * FROM `product`", function(err, rows) {
                res.render('pc_index', {items: rows});
                conn.release();
            });
        }
    });
};

