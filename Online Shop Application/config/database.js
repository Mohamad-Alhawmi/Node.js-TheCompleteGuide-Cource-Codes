const mysql = require('mysql2') ;

const pool = mysql.createPool({ 
    host : 'localhost',
    user : 'root',
    database : 'node-complete',
    password :  '09312539512'
 }) ;

 module.exports = pool.promise() ;