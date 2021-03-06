const Sequelize = require('sequelize') ;

const sequelize = require('../config/database') ;

const Product = sequelize.define(
    'product',
    {
        id : 
        {
            type : Sequelize.INTEGER(10).UNSIGNED,
            autoIncrement : true,
            allowNull : false,
            primaryKey : true,
            unique: true
        },

        title : Sequelize.STRING,
        
        price : 
        {
            type : Sequelize.DOUBLE,
            allowNull : false 
        },

        imageUrl: 
        {
            type: Sequelize.STRING,
            allowNull: false
        },

        description :
        {
            type : Sequelize.STRING,
            allowNull : false 
        }
    } 
) ;

module.exports = Product ;