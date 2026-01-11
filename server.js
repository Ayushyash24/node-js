const http = require('http');


http.createServer((req,resp)=>{
    resp.write("My name is Ayd.");
    resp.end("Hell0")
}).listen(4800);