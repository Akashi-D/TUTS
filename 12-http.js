const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('welcome to my homepage')
    }
    if(req.url === '/about'){
        res.end('my about page')
    }
    res.end(`
        <h1>Ooops!!</h1>
        <p>sorry we can't find the page you are looking for</p>
        <a href="/">back home</a>
    `)
})

server.listen(4000)