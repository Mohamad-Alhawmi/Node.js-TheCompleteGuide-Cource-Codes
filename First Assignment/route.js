const requestHandler = (req, res) =>{
    const url = req.url ;
    const method = req.method ;

    if(url == '/')
    {
        res.setHeader('Content-Type', 'text/html') ;
        res.write('<html>') ;
        res.write('<title>First Assignment</title>') ;
        res.write('<body><h1>Dummy Text</h1>') ;
        res.write('<form method = "POST" action = "/create-user"><input name = "username" placeholder = "User Name" type = "text"></br>') ;
        res.write('<button type = "submit">Submit</button></form></body>') ;
        res.write('</html>') ;
        
        return res.end() ;
    }

    if(url == '/users')
    {
        res.setHeader('Content-Type', 'text/html') ;
        res.write('<html>') ;
        res.write('<title>First Assignment</title>') ;
        res.write('<body><ul><li>Mohamad</li><li>Hamzeh</li><li>Ali</li></ul></body>') ;
        res.write('</html>') ;
   
        return res.end() ;
    }

    if(url === '/create-user' && method === 'POST')
    {   
        const body = [] ;

        req.on('data', (chunk) =>{
            body.push(chunk) ;
        }) ;

        req.on('end', () =>{
            const parsedBody = Buffer.concat(body).toString() ;
            console.log(parsedBody.split('=')[1]) ;
        }) ;

        res.statusCode = 302 ;
        res.setHeader('Location', '/') ; // Status code of 302 stands for redirection.
        
        return res.end() ;
    }
}

module.exports = requestHandler ;