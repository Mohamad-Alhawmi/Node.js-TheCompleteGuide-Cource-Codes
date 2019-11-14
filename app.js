const express = require('express') ;

const app = express() ;

app.use('/add-product', (req, res, next) =>{      
    res.send('<form action="/product" method="POST"><input type="test" name = "title"><button>Submit</button><form>') ;
}) ;

app.use('/product', (req, res, next) =>{      
    res.redirect('/') ;
}) ;

app.use('/', (req, res) =>{  
    res.send('<h1>Hello from Express!</h1>') ;
}) ; 

app.listen(3000) ; 