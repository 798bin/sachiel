var mysql = require('mysql')

module.exports = function(config) {
    var pool = mysql.createPool(config.db);
};

