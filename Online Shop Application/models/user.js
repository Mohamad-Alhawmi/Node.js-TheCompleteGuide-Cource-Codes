const Sequelize = require('sequelize') ;

const db = require('../config/database') ;

const User = db.define(
                        'user',
                        {
                            id : 
                            {
                                type : Sequelize.INTEGER(10).UNSIGNED ,
                                autoIncrement : true,
                                allowNull : false,
                                primaryKey : true,
                                unique: true
                            },
                            name : 
                            {
                                type : Sequelize.STRING,
                                allowNull : false 
                            },
                            email : 
                            {
                                type : Sequelize.STRING,
                                allowNull : false
                            }
                        }, 
                        {
                            // By default, sequelize will automatically
                            // transform all passed model names (first parameter of define) into plural.
                            // if you don't want that, set the following
                            freezeTableName : true,
                            
                            // Disabled timestamps in sequelize.
                            timestamps : false
                        }
                      ) ;

module.exports = User ;