const path = require('path') ;

const express = require('express') ;

const productsController = require('../contollers/products') ;

const router = express.Router() ;

router.get('/', productsController.getProducts) ; 

module.exports = router ;

