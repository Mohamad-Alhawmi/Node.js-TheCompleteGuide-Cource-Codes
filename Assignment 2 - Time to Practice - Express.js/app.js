const express = require('express') ;

const app = express() ;

// app.use((req, res, next) =>{
//     console.log("First MiddleWare") ;
//     next()
// }) ;

// app.use((req, res, next) =>{
//     console.log("Second MiddleWare") ;
//     res.send('<h1>Second MiddleWare</h1>') ;
// }) ;

app.use('/users', (req, res, next) =>{
    console.log('/ users middleware') ;
    res.send('<p>The middleware that handles just /users</p>') ;
}) ;

app.use('/', (req, res, next) =>{
    console.log('/ middleware') ;
    res.send('<p>The middleware that handles just /</p>') ;
}) ;

app.listen(3000) ;
