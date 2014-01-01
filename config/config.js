var path = require( 'path' ),
    rootPath = path.normalize(__dirname + '/..');

module.exports = {
    'prod': {
        port: 3000,
        rootPath: rootPath,
        db: {
            host: '172.17.0.202',
            user: 'test',
            password: 'test',
            database: 'lotus'
        }
    },
    'dev': {
        port: 3000,
        rootPath: rootPath,
        db: {
            host: '172.17.0.202',
            user: 'test',
            password: 'test',
            database: 'lotus'
        }
    }
}

