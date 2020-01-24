const Sequelize = require('sequelize') ;

const db = require('../config/database') ;

const CartItem = db.define(
                            'cartItem',
                            {
                                id : 
                                {
                                    type : Sequelize.INTEGER(10).UNSIGNED,
                                    autoIncrement : true,
                                    allowNull : false,
                                    primaryKey : true,
                                    unique: true
                                },

                                quantity : Sequelize.INTEGER
                            } 
) ;


module.exports = CartItem ;