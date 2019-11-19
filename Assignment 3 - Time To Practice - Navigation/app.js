const path = require('path') ;

const express = require('express') ;

const indexRoutes = require('./routes/index') ;
const recipesRoutes = require('./routes/recipes') ;
const pageNotFoundRoutes = require('./routes/404') ; 

const app = express() ;

app.use(express.static(path.join(__dirname, 'public'))) ;

app.use(recipesRoutes) ;
app.use(indexRoutes) ;
app.use(pageNotFoundRoutes) ;

app.listen(3000) ;