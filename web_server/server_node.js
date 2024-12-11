// This is code to make a simple server using NODE
// We can import http in 2 ways either in the ES module import or standard const_require as js.
// import http from 'http';  ES module import method
const { log } = require('console')
const http = require('http') //other method
const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res)=>{
    if (req.url === '/') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end("Start Node Response")
    }else if(req.url === '/login'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end("Send Node Login Response")
    }else{
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/plain')
        res.end("404 Not Found on Node server")
    }
})
server.listen(port, hostname, ()=>{
    console.log(`Node Server is running at http://${hostname}:${port}`);
})