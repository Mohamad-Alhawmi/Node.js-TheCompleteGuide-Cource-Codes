const path = require('path') ;
const express = require("express") ;

const mainRoutes = require("./routes/index") ;

const usersRoutes = require("./routes/users") ;

const four04Routes = require("./routes/404") ;

const app = express() ;

app.use(express.static(path.join(__dirname, 'public')))

app.use(mainRoutes) ;

app.use(usersRoutes) ;

app.use(four04Routes) ;

app.listen(3000) ;