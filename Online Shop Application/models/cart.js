const Sequelize = require('sequelize') ;

const db = require('../config/database') ;

const Cart = db.define(
                            'cart',
                            {
                                id : 
                                {
                                    type : Sequelize.INTEGER(10).UNSIGNED,
                                    autoIncrement : true,
                                    allowNull : false,
                                    primaryKey : true,
                                    unique: true
                                }
                            } 
) ;


module.exports = Cart ;