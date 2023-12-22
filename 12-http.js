const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/') {
        res.end('welcome to our Homepage')
    }
    if(req.url === '/about'){
        res.end('Here is our short History')
    }
    res.end(
       ` <h1>Ooops!</h1>
       <p>We can't seem to find the page you're looking for </p>
       <a href="/">back home<a/>`
    )
    })

server.listen(5000)