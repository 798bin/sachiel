var mysql = require('mysql')

module.exports = function(config) {
    return mysql.createPool(config.db);
};

