const http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{'content_type': "text/plain"});
    res.end("hello node it is server");
}).listen(8000);