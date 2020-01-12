const mysql = require('mysql2') ;
const Sequelize = require('sequelize') ;

const sequelize = new Sequelize
    (
        'node-complete',
        'root',
        '09312539512',
        {
            dialect : 'mysql',
            host : 'localhost'
        }
    ) ;

module.exports = sequelize ;

