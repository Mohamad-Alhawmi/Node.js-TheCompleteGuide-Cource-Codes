const express = require('express') ;
const bodyParser = require('body-parser') ;

const app = express() ;

app.use(bodyParser.urlencoded({extended : false})) ;

// Route handling middlewares
app.use('/add-product', (req, res, next) =>{      
    res.send('<form action="/product" method="POST"><input type="test" name = "title"><button>Submit</button><form>') ;
}) ;

// app.use('/product', (req, res, next) =>{   
//     console.log(req.body) ;
//     res.redirect('/') ;
// }) ;                             //Handling all HTTP methods. 

app.post('/product', (req, res, next) =>{   
    console.log(req.body) ;
    res.redirect('/') ;
}) ;

app.use('/', (req, res) =>{  
    res.send('<h1>Hello from Express!</h1>') ;
}) ; 

app.listen(3000) ; 